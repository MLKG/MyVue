<template>
  <div>
    <div class="baodan-detail">
      <div class="baodan-detail_title">{{baodanDetail.nsurName}}</div>
      <div class="font-color-gray">历史年化结算利率<span class="font-color-red"> {{baodanDetail.expYield}}%</span></div>
    </div>
    <div class="gap"></div>
    <div class="common-detail-list">
      <div class="common-detail-list__item">
        <span class="font-color-gray">保险公司名称</span>
        <span>{{baodanDetail.csvCompanyName}}</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">产品名称</span>
        <span>{{baodanDetail.nsurName}}</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">保单号</span>
        <span>{{baodanDetail.applNo}}</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">投保日期</span>
        <span>{{baodanDetail.busiDate}}</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">保费(元)</span>
        <span>{{baodanDetail.premium}}</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">保险年期</span>
        <span>{{baodanDetail.chargeYear}}</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">订单状态</span>
        <span class="font-color-red">{{baodanDetail.statusName}}</span>
      </div>
    </div>
    <div class="baodan-detail__button">
      <div class="baodan-detail__button_item gray" @click="gotoLoanWithdraw()" v-show="errorStatus === 'error'">质押取现</div>
       <div class="baodan-detail__button_item" :class="{red: baodanDetail.loanFlag === '1', gray: baodanDetail.loanFlag === '0'}" @click="gotoLoanWithdraw()" v-show="errorStatus !== 'error'">质押取现</div>
      <div class="baodan-detail__button_item" :class="{gray: errorStatus === 'error', white: errorStatus !== 'error'}" @click="gotoSurrender()">退保申请</div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex'

  export default {
    data () {
      return {
        baodanDetail: {}
      }
    },
    mounted () {
      this.baodanDetail = JSON.parse(sessionStorage.getItem('baodanDetail'))
      if (this.baodanDetail) {
        this.getSurrenderDetail({applno: this.baodanDetail.applNo, bxgsdm: this.baodanDetail.insurCode})
      } else {
        this.$router.replace('/ttl/myInsurance')
      }
    },
    computed: {
      ...mapGetters({
        apiErrMsg: 'ttl/loan/apiErrMsg',
        errorStatus: 'ttl/cancelInsurance/errorStatus'
      })
    },
    methods: {
      ...mapActions({
        getSurrenderDetail: 'ttl/cancelInsurance/getSurrenderDetail'
      }),
      ...mapMutations({
        clearApiErr: 'ttl/loan/CLEAR_PHONECODE_ERR'
      }),
      gotoLoanWithdraw () {
        // this.$router.push({path: '/ttl/loanwithdraw', query: {applNo: this.baodanDetail.applNo, proCode: this.baodanDetail.proCode}})
        if (this.errorStatus !== 'error' && this.baodanDetail.loanFlag === '1') {
          this.$router.push({path: '/ttl/loanwithdraw', query: {applNo: this.baodanDetail.applNo, proCode: this.baodanDetail.proCode}})
        }
      },
      gotoSurrender () {
        if (this.errorStatus !== 'error') {
          this.$router.push({path: '/ttl/cancelinsurance', query: {orderId: this.baodanDetail.applNo, insurCode: this.baodanDetail.insurCode}})
        }
      }
    }
  }
</script>

<style lang="less" scoped>
   @import "../../../style/variables";

   .baodan-detail {
      background-color: @bg-white;
      height: 1.6rem;
      padding: 0.5rem 0.3rem 0;
      position: relative;
      border-bottom: 1px solid @line-color;

      &_title {
        font-size: @font-size-larger;
        padding-bottom: 0.15rem;
      }

      /*&:after {
        top: 48%;
        right: 0.3rem;
        border: 1px solid transparent;
        border-top-color: @line-color;
        border-right-color: @line-color;
        content: " ";
        height: 0.2rem;
        width: 0.2rem;
        position: absolute;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
      }*/

      &__button {
        margin-top: 0.3rem;
        display: flex;
        padding: 0 0.3rem;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.3rem;

        &_item {
          flex: 0 0 3.2rem;
          height: 0.76rem;
          line-height: 0.76rem;
          text-align: center;
          font-size: @font-size-medium;
          border-radius: 3px;
          width: 40%;

          &.red {
            background-color: @bg-red;
            color: @font-color-white;
            margin: 0 auto;
          }

          &.gray {
            background-color: @bg-gray;
            color: @font-color-white;
            margin: 0 auto;
          }

          &.white {
            background-color: @bg-white;
            color: @font-color-red;
            border: 1px solid @font-color-red;
          }
        }
      }
   }

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

