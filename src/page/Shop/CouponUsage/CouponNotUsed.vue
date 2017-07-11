<template>
  <div class="coupon-not-used">
    <div class="coupon-not-used_repeat" v-for="user in couponsNotUsed">
      <span class="coupon-not-used_name">{{user.cardType | couponName}}</span>
      <span class="coupon-not-used_date">失效时间：{{user.invalidDate}}</span>
      <div class="coupon-not-used_amount" v-if="user.cardType === 6">{{user.riseInterestRate | rateFormat}}<span class="font-size-large">%</span></div>
      <div class="coupon-not-used_amount" v-if="user.cardType === 4 || user.cardType === 5">{{user.cardAmount}}<span class="font-size-large"> 元</span></div>
      <span class="coupon-not-used_count">x {{user.cardCount}}</span>
      <div class="coupon-not-used__person" v-show="user.customerFlag !== '2'">
        <span class="coupon-not-used__person_name">
          <span class="font-color-gray">卡券持有用户：</span>
          <span class="font-bold" v-if="user.customerFlag === '1'">{{user.userName}}&nbsp;&nbsp;&nbsp;&nbsp;{{user.loginName}}</span>
          <span class="font-bold" v-if="user.customerFlag === '3'">{{user.loginName}}&nbsp;&nbsp;&nbsp;(非名下客户)</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        couponsNotUsed: 'shop/couponUsage/couponsNotUsed'
      })
    },
    watch: {
      couponsNotUsed () {
        window.addEventListener('scroll', this.handleScroll)
      }
    }
  }
</script>

<style lang="less">
   @import "../../../style/variables";

    .coupon-not-used {
      padding: 0.3rem 0.3rem 0;

      &_repeat {
        background-color: @bg-white;
        border: 1px solid @line-color;
        border-radius: 0.17rem;
        margin-bottom: 0.22rem;
        position: relative;
        padding-left: 0.3rem;
        padding-bottom: 0.2rem;
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

      &__person {
        margin-top: 0.2rem;
        border-top: 1px solid @line-color;
        margin-right: 0.3rem;

        &_name {
          padding-top: 0.15rem;
          display: inline-block;
        }
      }
   }
</style>
