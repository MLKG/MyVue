<template>
  <section>
    <div class="invest-detail">
      <div class="product-title">定活通2号0300期</div>
      <div class="invest-detail-header">
        <div class="invest-detail-header__block">
          <p class="invest-detail-header__amount">2450.25</p>
          <p class="font-color-gray">投资金额 (￥)</p>
        </div>
        <div class="invest-detail-header__block">
          <p class="invest-detail-header__amount font-color-red">2450.25</p>
          <p class="font-color-gray">预期总收益 (￥)</p>
        </div>
      </div>
    </div>
    <div class="gap"></div>
    <my-invest-detail-con></my-invest-detail-con>
    <my-invest-detail-progress></my-invest-detail-progress>
    <my-invest-detail-footer></my-invest-detail-footer>

    <!-- <button type="button" class="btn-bottom">2017-7-20起可转让</button> -->
    <router-link :to="{name: 'MyTransferProduct', params: {accountId: 123}}" class="btn-bottom btn-bottom__transfer">我要转让</router-link>
  </section>
</template>

<script>
  import MyInvestDetailCon from './MyInvestDetailCon'
  import MyInvestDetailProgress from './MyInvestDetailProgress'
  import MyInvestDetailFooter from './MyInvestDetailFooter'

  export default {
    data () {
      return {
        path: ''
      }
    },
    components: {MyInvestDetailCon, MyInvestDetailProgress, MyInvestDetailFooter}
  }
</script>


<style lang="less" scoped>
  @import "../../../style/variables";

  p {
    margin: 0;
  }

  .invest-detail {
    background: @bg-white;
    padding-top: .5rem;
  }

  .product-title {
    text-align: center;
    .font-size-large;
    min-height: .5rem;
  }

  .invest-detail-header {
    padding: .5rem 0;
    display: flex;

    &__block {
      flex: 1;
      text-align: center;
      border-right: 1px solid @line-color;

      &:last-child {
        border-right: none;
      }
    }

    &__amount {
      .font-size-bigger;
      min-height: .7rem;
    }
  }

  .btn-bottom {
    &__transfer {
      background: @bg-white;
      .font-color-blue;
    }
  }


</style>
