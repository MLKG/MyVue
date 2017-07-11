<template>
  <div>
    <ul class="my-insurance-nav">
      <li class="my-insurance-nav_item" :class="{'current': selectedNav === 'product'}" @click="selectedType('product')">全部产品({{holdListTotal}})</li>
      <li class="my-insurance-nav_item" :class="{'current': selectedNav === 'history'}" @click="selectedType('history')">已退保({{historyListTotal}})</li>
      <li class="my-insurance-nav_item" :class="{'current': selectedNav === 'loan'}" @click="selectedType('loan')">质押贷款({{loanListTotal}})</li>
    </ul>
    <div class="my-insurance-nav_placeholder"></div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        selectedNav: 'ttl/myInsurance/selectedNav',
        holdListTotal: 'ttl/myInsurance/holdListTotal',
        historyListTotal: 'ttl/myInsurance/historyListTotal',
        loanListTotal: 'ttl/myInsurance/loanListTotal'
      })
    },
    methods: {
      ...mapMutations({
        changeNav: 'ttl/myInsurance/MY_INSURANCE_NAV',
        resetList: 'ttl/myInsurance/RESET_LIST'
      }),
      ...mapActions({
        getHoldList: 'ttl/myInsurance/getHoldList',
        getHistoryList: 'ttl/myInsurance/getHistoryList',
        getLoanList: 'ttl/myInsurance/getLoanList'
      }),
      selectedType: function (type) {
        this.changeNav({ type })
        this.resetList()
        if (type === 'product') {
          this.getHoldList()
        } else if (type === 'history') {
          this.getHistoryList()
        } else if (type === 'loan') {
          this.getLoanList()
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  .my-insurance-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    max-width: 1080px;
    list-style: none;
    font-size: @font-size-large;
    background-color: @bg-white;
    z-index: 2;
    display: flex;

    &_item {
      flex: 0 0 2.5rem;
      height: .9rem;
      line-height: .9rem;
      text-align: center;
      border-bottom: 1px solid @line-color;
      font-size: @font-size-medium;
      &.current {
        border-bottom: 1px solid @font-color-red;
        color: @font-color-red;
      }
    }

    &_placeholder {
      height: .9rem;
    }
  }
</style>
