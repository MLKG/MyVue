<template>
  <div>
    <div class="purchase-header">
      <div class="purchase-header__title">
        <div class="purchase-header__title_name">
          定活通10号15期
        </div>
        <div class="font-size-small">可投份额：&nbsp;&yen;2000份</div>
      </div>
      <div class="purchase-header__charge">
        <div>可用余额：&nbsp;&yen;20000.00</div>
        <div class="purchase-header__charge_button">充值</div>
      </div>
    </div>
    <div class="gap"></div>
  </div>
</template>

<style lang="less" scoped>
  @import "../../../style/variables";

  .purchase-header {
    height: 2.9rem;
    color: @font-color-white;

    &__title {
      background-color: @bg-red;
      height: 1.02rem;
      padding: 0.4rem 0.25rem;

      &_name {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: @font-size-larger;
        margin-bottom: 0.1rem;
      }
    }

    &__charge {
      height: 1.08rem;
      background-color: #eb5957;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: @font-size-small;
      padding: 0 0.25rem;

      &_button {
       border: 1px solid @bg-white;
       padding: 0.08rem 0.35rem;
       border-radius: 0.35rem;
     }
    }
  }
</style>
