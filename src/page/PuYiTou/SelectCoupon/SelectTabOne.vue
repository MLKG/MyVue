<template>
  <div>
    <div class="coupon">
      <div class="coupon__list">
        <div class="coupon__list_red"></div>
        <div class="coupon__list_left">
          <div class="amount">
            <span class="font-size-large">&yen;</span>125
          </div>
          <div>返现红包</div>
        </div>
        <div class="coupon__list_right coupon__list_border">
          <div class="every">单笔投资&ge;5000元</div>
          <div class="every"><span>持满60天可转让</span></div>
          <div class="date">过期时间：2015.15.12</div>
          <div class="select"></div>
        </div>
      </div>
      <div class="coupon__list gray">  <!-- gray 优惠券可选与不可选 -->
        <div class="coupon__list_red"></div>
        <div class="coupon__list_left">
          <div class="amount">
            <span class="font-size-large">+</span>1.1%
          </div>
          <div>加息券</div>
        </div>
        <div class="coupon__list_right">
          <div class="every">单笔投资&ge;5000元</div>
          <div class="every"><span>持满60天享受加息</span></div>
          <div class="date">过期时间：2015.15.12</div>
          <div class="select"></div>
        </div>
      </div>
      <div class="coupon__list">
        <div class="coupon__list_red"></div>
        <div class="coupon__list_left">
          <div class="amount">
            <span class="font-size-large">&yen;</span>125
          </div>
          <div>返现红包</div>
        </div>
        <div class="coupon__list_right">  <!-- coupon__list_border 是否选中 -->
          <div class="every">单笔投资&ge;5000元</div>
          <div class="every"><span>持满60天可转让</span></div>
          <div class="date">过期时间：2015.15.12</div>
          <div class="select"></div>
        </div>
      </div>
    </div>
    <div class="btn-bottom_placeholder"></div>
    <button class="btn-bottom btn-bottom_red">确认</button>
  </div>
</template>

<style lang="less" scoped>
  @import "../../../style/variables";
  @import "../../../style/common";

  .coupon {
    margin-top: 0.3rem;
    &__list {
      margin: 0 0.2rem 0.3rem;
      display: flex;
      height: 2.0rem;

      &_left {
        flex: 0 0 2.68rem;
        position: relative;
        background-color: @bg-red;
        color: @font-color-white;
        text-align: center;

        & .amount {
          font-size: @font-size-biggest;
          margin-top: 0.4rem;
          height: 0.8rem;
        }
      }

      &_right {
        flex: 1;
        background-color: @bg-white;
        position: relative;
        padding: 0.35rem 0 0.35rem 0.2rem;

        & .every {
          height: 0.4rem;
        }

        & .date {
          color: @font-color-gray;
          margin-top: 0.1rem;
        }

        & .select {
          display: none;
        }
      }

      &_red {
        background: url('../../../images/puyitou/coupon-red.png') repeat-y;
        width: 0.2rem;
        background-size: 100%;
      }

      &.gray {
        & .coupon__list_red {
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
      }

      &_border {
        border: 2px solid @bg-red;

        & .select {
          display: inline-block;
          background: url('../../../images/puyitou/coupon-select.png') no-repeat;
          background-size: 100%;
          height: 0.5rem;
          width: 0.5rem;
          position: absolute;
          right: 0;
          bottom: 0;
        }
      }
    }
  }
</style>
