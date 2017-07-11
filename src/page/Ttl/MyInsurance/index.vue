<template>
  <div>
    <my-insurance-nav v-show="!isNoList"></my-insurance-nav>
    <my-insurance-product v-show="currentNav ==='product'"></my-insurance-product>
    <my-insurance-history v-show="currentNav ==='history'"></my-insurance-history>
    <my-insurance-loan v-show="currentNav ==='loan'"></my-insurance-loan>
    <my-insurance-none v-show="isNoList"></my-insurance-none>
    <div class="my-insurance__bottom">
      <p @click="gotoCard()">银行卡管理</p>
    </div>
    <div class="my-insurance__bottom_height"></div>
  </div>
</template>

<script>
  import MyInsuranceNav from './MyInsuranceNav'
  import MyInsuranceProduct from './MyInsuranceProduct'
  import MyInsuranceHistory from './MyInsuranceHistory'
  import MyInsuranceLoan from './MyInsuranceLoan'
  import MyInsuranceNone from './MyInsuranceNone'
  import { mapActions, mapGetters, mapMutations } from 'vuex'

  export default {
    data () {
      return {
        // myInsuranceBalance: {},
        isOpenAccount: false,
        isSuccess: false
      }
    },
    mounted () {
      this.resetList()
      this.resetListTotal()
      this.getMyInsuranceBalance().then((res) => {
        this.isSuccess = true
        this.isOpenAccount = res.data.cgbUser ? 1 : 0
        // this.myInsuranceBalance = res.data.balance
        this.getHoldList()
        this.getHistoryList()
        this.getLoanList()
      })
    },
    computed: {
      ...mapGetters({
        currentNav: 'ttl/myInsurance/selectedNav',
        errorStatus: 'ttl/myInsurance/errorStatus',
        holdList: 'ttl/myInsurance/holdList',
        historyList: 'ttl/myInsurance/historyList',
        loanList: 'ttl/myInsurance/loanList',
        holdListTotal: 'ttl/myInsurance/holdListTotal',
        historyListTotal: 'ttl/myInsurance/historyListTotal',
        loanListTotal: 'ttl/myInsurance/loanListTotal',
        noMoreFlag: 'ttl/myInsurance/noMoreFlag',
        noMoreHoldList: 'ttl/myInsurance/noMoreHoldList',
        noMoreFlagLoan: 'ttl/myInsurance/noMoreFlagLoan'
      }),
      isNoList () {
        if (this.holdListTotal === 0 && this.historyListTotal === 0 && this.loanListTotal === 0) {
          this.currentNav = ''
        }
        return (this.holdListTotal === 0 && this.historyListTotal === 0 && this.loanListTotal === 0 && this.errorStatus)
      }
    },
    watch: {
      holdList () {
        window.addEventListener('scroll', this.handleScroll)
      },
      historyList () {
        window.addEventListener('scroll', this.handleScroll)
      },
      loanList () {
        window.addEventListener('scroll', this.handleScroll)
      }
    },
    methods: {
      ...mapActions({
        getMyInsuranceBalance: 'ttl/myInsurance/getMyInsuranceBalance',
        getHoldList: 'ttl/myInsurance/getHoldList',
        getHistoryList: 'ttl/myInsurance/getHistoryList',
        getLoanList: 'ttl/myInsurance/getLoanList'
      }),
      ...mapMutations({
        resetList: 'ttl/myInsurance/RESET_LIST',
        resetListTotal: 'ttl/myInsurance/REST_LIST_TOTAL'
      }),
      gotoCard () {
        if (this.isOpenAccount) {
          this.$router.push('/puyipay')
        } else {
          this.$router.push('/puyipay/openaccount/info?backUrl=myinsurance')
        }
      },
      handleScroll () {
        if (this.currentNav === 'product') {
          if (!this.noMoreHoldList && this._scrollToBottom()) {
            window.removeEventListener('scroll', this.handleScroll)
            this.getHoldList()
          }
        } else if (this.currentNav === 'history') {
          if (!this.noMoreFlag && this._scrollToBottom()) {
            window.removeEventListener('scroll', this.handleScroll)
            this.getHistoryList()
          }
        } else if (this.currentNav === 'loan') {
          if (!this.noMoreFlagLoan && this._scrollToBottom()) {
            window.removeEventListener('scroll', this.handleScroll)
            this.getLoanList()
          }
        }
      }
    },
    components: {MyInsuranceNav, MyInsuranceProduct, MyInsuranceHistory, MyInsuranceLoan, MyInsuranceNone},
    created () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  p {
    padding: 0;
    margin: 0;
  }

  .flex {
    display: flex;
    width: 100%;
  }

  .my-insurance {
    padding-top: .9rem;

    &__header {
      background: url('../../../images/ttl/red-bg.png') no-repeat;
      background-size: 100% 100%;
      background-color: #ea544a;
      padding: .45rem .3rem 0;
      color: #fff;
      &_title {
        flex: 3;
        padding: .1rem 0 .3rem;
        .transfer {
          font-size: @font-size-base;
          border: 1px solid #fff;
          border-radius: 2px;
          padding: 0 .1rem;
          position: relative;
          bottom: .05rem;
          margin-left: .6rem;
        }
      }
      .item {
        flex: 1;
        text-align: right;
      }
      .card {
        width: 35%;
      }

      &_con{
        padding-top: .28rem;
        align-items: flex-end;
        .title {
          flex: 0 0 30%;
        }
      }
    }

    &__bottom {
      position: fixed;
      bottom: 0;
      width: 100%;
      max-width: 1080px;

      p {
        height: .5rem;
        text-align: center;
        background: @bg-red;
        color: @font-color-white;
        font-size: @font-size-medium;
        height: 0.9rem;
        line-height: 0.9rem;
      }

      &_height {
        height: 0.9rem;
      }
    }
  }
</style>
