<template>
  <section>
    <div class="l-coupon-list">
      <div class="l-coupon-list__item l-coupon-list__item_gray">
        <div class="c-coupon">
          <div class="c-coupon_gray"></div>
          <div class="c-coupon__left c-coupon__left_bg">
            <div class="c-coupon_amount">
              <span class="font-size-biggest">125</span>
              <span class="font-size-base">元 x</span><span class="font-size-large">4</span>
            </div>
            <div>返现红包</div>
          </div>
          <div class="c-coupon__right">
            <div class="c-coupon_text">单笔投资&ge;5000元</div>
            <div class="c-coupon_text"><span>持满60天可转让</span></div>
            <div class="date">有效期：2015.15.12</div>
            <div class="c-btn-group">
              <a class="c-btn-group__btn c-btn-group__btn_gray">分享</a>
              <a class="c-btn-group__btn c-btn-group__btn_gray">去投资</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";
  @import "../../../style/common";

  .l-coupon-list {
    margin-top: 1.3rem;
    &__item {
      margin: 0 0.2rem 0.3rem;

      &_gray {
        .font-color-gray;
        .c-coupon__left {
          &_bg {
            background-color: #c0c0c0;
          }
        }
      }
    }
  }

  .c-coupon {
    display: flex;

    &__left {
      flex: 0 0 2rem;
      position: relative;
      color: @font-color-white;
      padding: 0 .3rem;
      text-align: left;
    }

    &_count {
      text-align: right;
      margin-right: .2rem;
      margin-top: .1rem;
      .font-size-big;
    }

    &_amount {
      margin-top: 0.7rem;
      height: 0.8rem;
    }

    &__right {
      flex: 1;
      background-color: @bg-white;
      position: relative;
      padding: 0.35rem 0 0.35rem 0.2rem;

      & .date {
        color: @font-color-gray;
        margin-top: 0.1rem;
      }

      & .select {
        display: none;
      }
    }

    &_text {
      height: 0.4rem;
    }

    &_gray {
      background: url('../../../images/puyitou/coupon-gray.png') repeat-y;
      width: 0.2rem;
      background-size: 100%;
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

  .c-btn-group {
    margin-top: .3rem;
    height: .6rem;
    line-height: .6rem;
    &__btn {
      padding: .1rem .5rem;
      border-radius: 15px;

      &_red {
        .font-color-red;
        border: 1px solid @font-color-red;
      }

      &_gray {
        .font-color-gray;
        border: 1px solid @font-color-gray;
      }
    }
  }
</style>
