<template>
  <div>
    <div class="common-detail-list">
      <div class="common-detail-list__item">
        <span class="font-color-gray">保险公司名称</span>
        <span>XXXXXX</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">产品名称</span>
        <span>详详细细嘻嘻嘻</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">保单号</span>
        <span>10222222222</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">投保日期</span>
        <span>2016-15-15 18:45:62</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">保费(元)</span>
        <span>1000.00</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">保险年期</span>
        <span>10</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">订单状态</span>
        <span class="font-color-red">出单成功</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
   @import "../../../style/variables";

   .common-detail-list {
      display: flex;
      align-content: space-between;
      flex-wrap: wrap;
      background-color: @bg-white;
      border-bottom: 1px solid @line-color;
      border-top: 1px solid @line-color;

      &__item {
        display: flex;
        flex-basis: 100%;
        justify-content: space-between;
        height: 0.65rem;
        align-items: center;
        padding: 0.05rem 0.3rem;
        height: 0.9rem;
        border-bottom: 1px solid @line-color;

        &:last-child {
          border-bottom: none;
        }
      }
   }
</style>
