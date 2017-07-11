<template>
  <div>
    <div class="cus-mangent-coupon">
      <div class="cus-mangent-coupon_repeat" v-for="coupon in customerCoupons">
        <span class="cus-mangent-coupon_name">{{ coupon.couponName }}</span>
        <span class="cus-mangent-coupon_date">到期时间：{{ coupon.couponDate }}</span>
        <div class="cus-mangent-coupon_amount" v-if="coupon.cardType == 6">{{ coupon.couponRiseRate | currency(true)}}<span class="font-size-large">%</span></div>
        <div class="cus-mangent-coupon_amount" v-else>{{ coupon.couponAmount }}<span class="font-size-large">元</span></div>
        <span class="cus-mangent-coupon_count">x {{ coupon.couponCount }}</span>
      </div>
      <div class="load-more font-size-small" v-if="tip">{{ tip }}</div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        customerCoupons: 'shop/customerDetail/customerCoupons',
        couponCount: 'shop/customerDetail/couponCount'
      }),
      tip () {
        return !this.couponCount ? '无卡券信息' : ''
      }
    }
  }
</script>

<style lang="less">
  @import "../../../style/variables";

  .cus-mangent-coupon {
    padding: 0.3rem 0.3rem 0;

    &_repeat {
      background-color: @bg-white;
      border: 1px solid @line-color;
      border-radius: 0.17rem;
      margin-bottom: 0.22rem;
      position: relative;
      padding-left: 0.3rem;
      padding-bottom: 0.3rem;
    }

    &_name {
      position: absolute;
      background-color: @bg-red;
      color: @font-color-white;
      padding: 0.08rem;
      left: 0.3rem;
      top: 0;
    }

    &_date {
      position: absolute;
      right: 0.3rem;
      top: 0.17rem;
      color: @font-color-gray;
    }

    &_amount {
      padding-top: 0.84rem;
      font-size: @font-size-bigger;
      color: @font-color-red;
    }

    &_count {
      position: absolute;
      right: 0.3rem;
      top: 0.91rem;
      font-size: @font-size-largest;
    }
  }
</style>
