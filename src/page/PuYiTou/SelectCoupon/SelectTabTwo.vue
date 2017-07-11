<template>
  <div>
    <div class="coupon">
      <div class="coupon__list">
        <div class="coupon__list_yellow"></div>
        <div class="coupon__list_left">
          <div class="count">x24</div>
          <div class="amount">
            <span class="font-size-large">&yen;</span>1000
          </div>
          <div>增利本金</div>
        </div>
        <div class="coupon__list_right">
          <div class="every">单笔投资单笔投资单笔投资单笔投资单笔投资单笔投资</div>
          <div class="date">最近过期时间：2015.15.12</div>
          <div class="btn">立即使用</div>
        </div>
        <select class="coupon__list_select" v-model="coupons">
          <option disabled>请选择增利本金</option>
          <option v-for="coupon in 20">{{coupon}}</option>
        </select>
      </div>
      <div class="coupon__list gray">
        <div class="coupon__list_yellow"></div>
        <div class="coupon__list_left">
          <div class="count">x24</div>
          <div class="amount">
            <span class="font-size-large">&yen;</span>1000
          </div>
          <div>增利本金</div>
        </div>
        <div class="coupon__list_right">
          <div class="every">单笔投资单笔投资单笔投资单笔投资单笔投资单笔投资</div>
          <div class="date">最近过期时间：2015.15.12</div>
          <div class="btn">立即使用</div>
        </div>
        <select class="coupon__list_select" v-model="coupons">
          <option disabled>请选择增利本金</option>
          <option v-for="coupon in 20">{{coupon}}</option>
        </select>
      </div>

      <!-- 卡券使用说明 -->
      <div class="coupon__intro">
        <div class="coupon__intro_position">
          <div class="line"></div>
          <div class="title">使用规则</div>
        </div>
        <div class="coupon__intro_content">
          <div>1.单张面额为1,000.00元，可叠加使用；</div>
          <div>2.仅限于投资定活通、磐石理财、转让专区（带加息标识产品除外）；</div>
          <div>3.增利本金、返现红包与加息券不可叠加使用。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        coupons: ''
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";
  @yellow: #f59423;

  .coupon {
    margin-top: 0.3rem;
    &__list {
      margin: 0 0.2rem 0.3rem;
      display: flex;
      height: 2.6rem;
      position: relative;

      &_left {
        flex: 0 0 2.68rem;
        position: relative;
        background-color: @yellow;
        color: @font-color-white;
        text-align: center;

        & .count {
          text-align: right;
          padding-right: 0.2rem;
          margin-top: 0.3rem;
          font-size: @font-size-large;
        }

        & .amount {
          font-size: @font-size-biggest;
          height: 0.8rem;
        }
      }

      &_right {
        flex: 1;
        background-color: @bg-white;
        position: relative;
        padding: 0.2rem;

        & .every {
          height: 0.8rem;
        }

        & .date {
          color: @font-color-gray;
          margin-top: 0.1rem;
        }

        & .btn {
          display: inline-block;
          width: 1.82rem;
          height: 0.58rem;
          border: 1px solid @bg-red;
          border-radius: 0.3rem;
          text-align: center;
          line-height: 0.58rem;
          color: @bg-red;
          margin-top: 0.2rem;
          font-size: @font-size-small;
        }
      }

      &_select {
        outline: none;
        appearance: none;
        border: none;
        color: transparent;
        background: transparent;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
      }

      &_yellow {
        background: url('../../../images/puyitou/coupon-yellow.png') repeat-y;
        width: 0.2rem;
        background-size: 100%;
      }

      &.gray {
        & .coupon__list_yellow {
          background: url('../../../images/puyitou/coupon-gray.png') repeat-y;
          width: 0.2rem;
          background-size: 100%;
        }

        & .coupon__list_left {
          background-color: @bg-gray-hight;
        }

        & .every {
          color: @font-color-gray;
        }

        & .btn {
          border: 1px solid @font-color-gray;
          color: @font-color-gray;
        }

        & select {
          display: none;
        }
      }
    }

    &__intro {
      margin-top: 0.8rem;

      &_position {
        position: relative;
        text-align: center;

        & .line {
          width: 3rem;
          height: 1px;
          background-color: @line-color;
          display: inline-block;
        }

        & .title {
          position: absolute;
          left: 3.05rem;
          background-color: @bg-color;
          color: @font-color-gray;
          top: 0.08rem;
          width: 1.4rem;
        }
      }

      &_content {
        padding: 0.25rem;
        color: @font-color-gray;
        line-height: 0.48rem;
        font-size: @font-size-smaller;
      }
    }
  }
</style>
