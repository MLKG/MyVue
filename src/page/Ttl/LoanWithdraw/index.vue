<template>
<div>
    <div class="common-detail-list">
      <div class="common-detail-list__item">
        <span class="font-color-gray">保单号</span>
        <span>{{loanDetail.insurOrderNo}}</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">可提款金额 (元)</span>
        <span>{{loanDetail.insurAmount}}</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">本次提款金额 (元)</span>
        <span>{{loanDetail.insurAmount}}</span>
      </div>
    </div>
    <div class="gap"></div>
    <div class="common-detail-list">
      <div class="common-detail-list__item">
        <span class="font-color-gray">贷款申请利率</span>
        <span>{{loanDetail.expYield}}%</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">贷款到期日 </span>
        <span>{{loanDetail.maturityDate}}</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">还款方式</span>
        <span>一次性还本付息</span>
      </div>
      <div class="common-detail-list__item">
        <span class="font-color-gray">收款卡号</span>
        <span>{{loanDetail.cardNoEncrypted}}</span>
      </div>
    </div>
    <div class="gap"></div>
    <form class="form" @submit.prevent="submit">
      <div class="form-group with-link">
        <label>手机号码</label>
        <p class="content">{{loanDetail.mobileNo}}</p>
      </div>
      <common-sms-input name="loan" :phoneNum="phoneNum" @setErrMsg="setErrMsg" @clearErrMsg="clearErrMsg" :prodName="prodName"></common-sms-input>
      <p class="form-info">{{ errMsg || apiErrMsg }}</p>
      <label for="read" class="read">
        <input type="checkbox" id="read" v-model="read">
        我已阅读并同意<span @click="showTerms()"> 服务协议</span>
      </label>
      <p class="form-info hidden">错误信息</p>
      <button class="main-button" type="submit" :disabled="isDisabled">提交申请</button>
    </form>
    <div class="product-purchase">
      <div class="product-purchase_title">
        温馨提示：
      </div>
      <div class="product-purchase_content">
        提款操作当天只能发起一次，如果发起失败需第二天才能重新发起
      </div>
    </div>

    <loan-terms v-show="showTermsTip" @hideTerms="showTerms()" :applNo="$route.query.applNo" :proCode="$route.query.proCode"></loan-terms>
  </div>
</template>

<script>
  import CommonSmsInput from 'components/Common/CommonSmsInput'
  import LoanTerms from 'page/Ttl/LoanWithdraw/loanTerm'
  import { mapActions, mapGetters, mapMutations } from 'vuex'

  export default {
    data () {
      return {
        errMsg: '',
        read: false,
        showTermsTip: false
      }
    },
    mounted () {
      this.getLoanDetail({applNo: this.$route.query.applNo, proCode: this.$route.query.proCode})
    },
    computed: {
      ...mapGetters({
        loanDetail: 'ttl/loan/loanDetail',
        apiErrMsg: 'ttl/loan/apiErrMsg',
        phoneNum: 'ttl/loan/phoneNo',
        prodName: 'ttl/loan/prodName',
        smsCode: 'smsCode'
      }),
      isDisabled () {
        return !this.smsCode || !this.read
      }
    },
    methods: {
      ...mapActions({
        getLoanDetail: 'ttl/loan/getLoanDetail',
        loanSubmit: 'ttl/loan/loanSubmit'
      }),
      ...mapMutations({
        clearApiErr: 'ttl/loan/CLEAR_PHONECODE_ERR'
      }),
      submit () {
        // let insurAmount = this.loanDetail.insurAmount
        let insurorderno = this.loanDetail.insurOrderNo
        let productCode = this.loanDetail.productCode
        // let phoneNo = this.loanDetail.mobileNo
        let verifyCode = this.smsCode
        let codeSeq = sessionStorage.getItem('smsCodeSeq')
        let data = {insurorderno, productCode, verifyCode, codeSeq}

        if (!codeSeq) {
          this.errMsg = '请先获取验证码'
          return
        } else {
          this.errMsg = ''
          this.isSubmit = true
          this.loanSubmit(data).then((res) => {
            this.$router.push({path: '/ttl/drawingstatus', query: {status: res.status}})
          })
        }
      },
      clearErrMsg () {
        this.errMsg = ''
        this.clearApiErr()
      },
      setErrMsg (msg) {
        this.errMsg = msg
      },
      showTerms () {
        this.showTermsTip = !this.showTermsTip
      }
    },
    components: {
      CommonSmsInput,
      LoanTerms
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

  .product-purchase {
    padding: 0.5rem 0.3rem;

    &_title {
      font-weight: 600;
      margin-bottom: 0.2rem;
    }

    &_content {
      line-height: 0.4rem;
    }
  }
</style>
