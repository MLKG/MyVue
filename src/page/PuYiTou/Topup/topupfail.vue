<template>
  <div>
    <div class="purchase-success_background"></div>
    <div class="purchase-success__content">
      <img class="purchase-success__content_img" src="../../../images/puyitou/topup-fail.png" />
      <div class="purchase-success__content_tip">
        <div class="font-size-large">充值失败</div>
        <img class="purchase-success__content_icon" src="../../../images/puyitou/purchase-fail-icon.png" />
      </div>
      <router-link to="/mypyt">
        <button class="btn-flow btn-flow_red">重新充值</button>
      </router-link>
      <router-link to="/index">
        <div class="purchase-success__content_go">进入我的普益投</div>
      </router-link>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import "../../../style/variables";
  @import "../../../style/common";

  .purchase-success {
    &_background {
      background-color: @bg-white;
      position: absolute;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
      z-index: -1;
      margin: 0 auto;
      max-width: 1080px;
    }

    &__content {
      text-align: center;

      &_img {
        width: 2.6rem;
        margin-top: 1.5rem;
      }

      &_tip {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0.3rem;
        margin-bottom: 0.5rem;
      }

      &_icon {
        width: 0.6rem;
        margin-left: 0.1rem;
      }

      &_why {
        margin-bottom: 0.3rem;
        color: @font-color-gray;
        width: 5.0rem;
        display: inline-block;
      }

      &_go {
        color: @font-color-blue;
        margin-top: 0.3rem;
      }
    }
  }
</style>
