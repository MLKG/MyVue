<template>
  <div class="coupon-used">
    <div class="coupon-used__item" v-for="user in couponsUsed">
      <div class="coupon-used__item_name" v-if="user.customerFlag === '1'">{{user.userName}}&nbsp;&nbsp;&nbsp;&nbsp;{{user.loginName}}</div>
      <div class="coupon-used__item_name" v-if="user.customerFlag === '2'">我</div>
      <div class="coupon-used__item_name" v-if="user.customerFlag === '3'">{{user.loginName}}&nbsp;&nbsp;&nbsp;(非名下客户)</div>
      <div class="coupon-used__item_flex">
        <div class="item">
          <span class="font-color-gray">使用卡券</span>
          <span class="font-bold" v-if="user.cardType === 4 || user.cardType === 5">{{user.cardType | couponName}} <span class="font-color-red">{{user.cardAmount * user.cardCount}}</span>元</span>
          <span class="font-bold" v-if="user.cardType === 6">{{user.cardType | couponName}} <span class="font-color-red">{{user.riseInterestRate | rateFormat}}%</span></span>
        </div>
        <div class="item">
          <span class="font-color-gray">投资产品</span>
          <span>{{user.productName}}</span>
        </div>
        <div class="item">
          <span class="font-color-gray">投资金额</span>
          <span>{{user.investAmount | currency}}</span>
        </div>
        <div class="item">
          <span class="font-color-gray">卡券分享时间</span>
          <span>{{user.shareTime}}</span>
        </div>
        <div class="item">
          <span class="font-color-gray">卡券使用时间</span>
          <span>{{user.time}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        couponsUsed: 'shop/couponUsage/couponsUsed'
      })
    },
    watch: {
      couponsUsed () {
        window.addEventListener('scroll', this.handleScroll)
      }
    }
  }
</script>

<style lang="less">
   @import "../../../style/variables";

   .coupon-used {
      margin-top: 0.3rem;

      &__item {
        background-color: @bg-white;
        border-bottom: 1px solid @line-color;
        border-top: 1px solid @line-color;
        padding-left: 0.3rem;
        margin-bottom: 0.3rem;

        &_name {
          height: 0.88rem;
          line-height: 0.88rem;
          border-bottom: 1px solid @line-color;
          font-weight: 500;
        }

        &_flex {
          display: flex;
          align-content: space-between;
          flex-wrap: wrap;
          padding-top: 0.2rem;
          padding-bottom: 0.2rem;

          & .item {
            display: flex;
            flex-basis: 100%;
            justify-content: space-between;
            align-items: center;
            padding: 0.1rem 0.3rem 0.1rem 0;
          }
        }
      }
   }
</style>
