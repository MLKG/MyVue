<template>
  <div class="product-detail">
    <div class="product-header">
      <div class="product-header_title">{{productDetail.productName}}</div>
      <img class="product-header_img" src="../../../images/ttl/cgb-bank.png" />
      <div class="product-header_apply">历史年化结算利率</div>
      <div class="product-header_rate">{{productDetail.expYield | rateFormat}}%</div>
    </div>
    <div class="product-header_tip">实际结算利率以保险公司官网每月公示为准</div>
    <div class="product-header__detail_name">产品介绍</div>
    <div class="product-header__detail">
      <div class="product-header__detail_coloum">
        <span class="product-header__detail_item">起点金额</span>
        <span class="product-header__detail_item">{{productDetail.minOrder | currency(true)}}元</span>
      </div>
      <div class="product-header__detail_coloum">
        <span class="product-header__detail_item">最低保证年化收益率</span>
        <span class="product-header__detail_item">{{productDetail.minExpYield | rateFormat}}%</span>
      </div>
      <div class="product-header__detail_coloum">
        <span class="product-header__detail_item">免手续费领取</span>
        <span class="product-header__detail_item">5年后</span>
      </div>
    </div>
    <div class="product-header_intro">
      投保{{productDetail.withdrawPeriod}}天后可质押贷款，贷款最大金额为投保金额及持有期收益之和（单客申请天天利系列贷款总额不得超过28万），贷款利率{{productDetail.expYield | rateFormat}}%（银行可在不超过该贷款利率的范围内调整贷款利率），详阅天天利服务协议、产品详情及常见问题。
    </div>
    <div class="product-content">
      <div class="product-content__html" v-html="productDetail.content"></div>  <!-- 此处存放html内容 -->
      <div class="product-content_tip">- 本服务由广发银行提供 -</div>
    </div>
    <div class="product-content_placeholder"></div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        productDetail: 'ttl/productDetail/productDetail'
      })
    }
  }
</script>

<style lang="less">
  @import "../../../style/variables";

  .product-detail {
    position: absolute;
    top: 0;
    bottom: 0;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    max-width: 1080px;
  }

  .product-header {
    background-color: @bg-red;
    height: 2.5rem;
    padding: 0.3rem;
    position: relative;
    color: @font-color-white;

    &_title {
      font-size: @font-size-large;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 3.8rem;
    }

    &_img {
      position: absolute;
      top: 0.32rem;
      right: 0.3rem;
      width: 2.8rem;
    }

    &_apply{
      margin-top: 0.6rem;
      text-align: center;
    }

    &_rate {
      margin-top: 0.2rem;
      text-align: center;
      font-size: @font-size-biggest;
    }

    &_tip {
      background-color: @bg-yellowlight;
      height: 0.75rem;
      text-align: center;
      line-height: 0.75rem;
      color: @font-color-orange;
    }

    &__detail {
      background-color: @bg-white;
      display: flex;
      align-content: space-between;
      flex-wrap: wrap;
      padding: 0.05rem 0.3rem;
      border-bottom: 1px solid @line-color;

      &_name {
        height: 0.9rem;
        line-height: 0.9rem;
        font-size: @font-size-small;
        padding: 0 0.3rem;
        border-top: 1px solid @line-color;
        border-bottom: 1px solid @line-color;
        background-color: @bg-white;
      }

      &_coloum{
        display: flex;
        flex-basis: 100%;
        justify-content: space-between;
        height: 0.65rem;
        align-items: center;
      }
    }

    &_intro {
      padding: 0.4rem 0.3rem;
      line-height: 0.45rem;
    }
  }

  .product-content{
    background-color: @bg-white;
    padding: 0.3rem 0.15rem 0.3rem;
    line-height: 0.36rem;

    &_tip {
      text-align: center;
      margin-top: 0.3rem;
      color: @font-color-gray;
      padding-bottom: 0.5rem;
    }

    &_placeholder {
      height: 2.82rem;
    }

    img {
      width: 100%;
    }
  }
</style>
