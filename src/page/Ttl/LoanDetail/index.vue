<template>
  <div>
    <div class="common-detail-list">
      <div class="common-detail-list__item">
        <span class="font-color-gray">申请编号</span>
        <span>{{loanDetail.applyNo}}</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">贷款金额 (元)</span>
        <span>{{loanDetail.businessSum}}</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">发放金额 (元)</span>
        <span>{{loanDetail.putoutAmount}}</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">执行年利率</span>
        <span>{{loanDetail.businessRate}}%</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">申请日期</span>
        <span>{{loanDetail.operateDate}}</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">到期日</span>
        <span>{{loanDetail.maturityDate}}</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">还款方式</span>
        <span>{{loanDetail.returnTypeName}}</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">收款账户</span>
        <span>{{loanDetail.recAccountEncrypted}}</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">申请状态</span>
        <span class="font-color-gray">{{loanDetail.statusName}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loanDetail: {}
      }
    },
    mounted () {
      this.loanDetail = JSON.parse(sessionStorage.getItem('loanDetail'))
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

