<template>
  <div>
    <div class="common-detail-list">
      <div class="common-detail-list__item">
        <span class="font-color-gray">保险公司名称</span>
        <span>{{historyDetail.csvCompanyName}}</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">产品名称</span>
        <span>{{historyDetail.nsurName}}</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">保单号</span>
        <span>{{historyDetail.applNo}}</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">交易时间</span>
        <span>{{historyDetail.busiDate}}</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">投保金额 (元)</span>
        <span>{{historyDetail.premium}}</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">交易状态</span>
        <span class="font-color-gray">{{historyDetail.status}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        historyDetail: {}
      }
    },
    mounted () {
      this.historyDetail = JSON.parse(sessionStorage.getItem('historyDetail'))
    }
  }
</script>

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
