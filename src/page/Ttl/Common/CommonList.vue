<template>
  <div>
    <div class="common-list">
      <div class="common-list__item">
        <span>保费金额(元)</span>
        <span>{{ premium | currency }}</span>
      </div>
      <div class="common-list__item">
        <span>历史年化结算利率</span>
        <span>{{ expYield }}%</span>
      </div>
      <div class="common-list__item">
        <span>保险期限(年)</span>
        <span>{{ productTime }}</span>
      </div>
      <div class="common-list__item">
        <span>投保人/受益人</span>
        <span>{{ userName }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['premium', 'expYield', 'productTime', 'userName']
  }
</script>

<style lang="less" scoped>
   @import "../../../style/variables";

   .common-list {
      display: flex;
      align-content: space-between;
      flex-wrap: wrap;
      padding: 0.05rem 0.3rem;
      background-color: @bg-white;
      border-bottom: 1px solid @line-color;
      border-top: 1px solid @line-color;

      &__item {
        display: flex;
        flex-basis: 100%;
        justify-content: space-between;
        height: 0.65rem;
        align-items: center;
      }
   }
</style>
