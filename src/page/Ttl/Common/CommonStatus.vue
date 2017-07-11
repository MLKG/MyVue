<template>
  <div>
    <div class="common-status">
      <img class="common-status_img" src="../../../images/ttl/success.png" />   <!-- fail -->
      <div class="font-size-largest">订单支付成功</div>
      <div class="common-status_text">
        您已经成功申购广发天天利产品<br />
        详询广发银行客服4008208003【广发银行】
      </div>
    </div>
  </div>
</template>



<style lang="less" scoped>
   @import "../../../style/variables";

   .common-status {
      background-color: @bg-white;
      text-align: center;
      padding: 0.8rem 0 0.75rem;
      border-bottom: 1px solid @line-color;

      &_img {
        width: 1.2rem;
        padding-bottom: 0.4rem;
      }

      &_text {
        margin-top: 0.4rem;
        width: 6rem;
        display: inline-block;
        line-height: 0.5rem;
      }
   }
</style>
