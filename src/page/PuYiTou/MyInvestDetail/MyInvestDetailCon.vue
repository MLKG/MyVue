<template>
  <section>
    <div class="l-block">
      <div class="c-block__row">
        <span class="font-color-gray">投资份额</span>
        <span>1917份</span>
      </div>
      <div class="c-block__row">
        <span class="font-color-gray">预期年化收益率</span>
        <span>6.6%</span>
      </div>
      <div class="c-block__row">
        <span class="font-color-gray">使用卡券</span>
        <span>曾黎本金￥4000</span>
      </div>
      <div class="c-block__row">
        <span class="font-color-gray">备注</span>
        <span>已含36.23加息收益</span>
      </div>
    </div>
    <!-- <div class="invest-detail-con">
      <div class="detail__row">
        <span class="font-color-gray">转让份额</span>
        <span>1917份</span>
      </div>
      <div class="detail__row">
        <span class="font-color-gray">预期年化收益率</span>
        <span>6.6%</span>
      </div>
      <div class="detail__row">
        <span class="font-color-gray">使用卡券</span>
        <span>曾黎本金￥4000</span>
      </div>
      <div class="detail__row">
        <span class="font-color-gray">派发红包</span>
        <span>￥100.01</span>
      </div>
      <div class="detail__row">
        <span class="font-color-gray">转让手续费</span>
        <span>￥3.00</span>
      </div>
      <div class="detail__row">
        <span class="font-color-gray">备注</span>
        <span>已含36.23加息收益</span>
      </div>
    </div> -->
  </section>
</template>

<style lang="less" scoped>
  @import "../../../style/variables";

  .l-block {
    background: @bg-white;
    margin-bottom: .3rem;
  }

  .c-block {
    &__row {
      display: flex;
      margin-left: .3rem;
      padding: .3rem .3rem .3rem 0;
      justify-content: space-between;
      .font-size-medium;
      border-bottom: 1px solid @line-color;

      &:last-child {
        border-bottom: none;
      }
    }
  }
</style>
