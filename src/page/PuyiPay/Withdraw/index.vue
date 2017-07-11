<template>
  <div>
    <form class="form" @submit.prevent="submit">
      <div class="form-group">
        <label>可提金额</label>
        <p class="content">{{ userBalance.vAccTotalAmt | currency }} 元</p>
      </div>
      <div class="form-group">
        <label for="withdrawAmount">提现金额</label>
        <input type="number" id="withdrawAmount" placeholder="请输入提现金额" v-model="withdrawAmount" @focus="clearErrMsg">
      </div>
      <div class="form-gap"></div>
      <div class="form-group">
        <label>所在银行</label>
        <p class="content">{{ userInfo.bankName }}</p>
      </div>
      <div class="form-group">
        <label>卡号</label>
        <p class="content">{{ userInfo.cardNo }}</p>
      </div>
      <div class="form-group with-link">
        <label>预留手机</label>
        <p class="content">{{ userInfo.phoneNo }}</p>
        <router-link to="/puyipay/phonemodify" class="blue-link">修改手机号</router-link>
      </div>
      <common-sms-input name="withdraw" :phoneNum="phoneNum" @setErrMsg="setErrMsg" @clearErrMsg="clearErrMsg"></common-sms-input>
      <p class="form-info">{{ errMsg || apiErrMsg }}</p>
      <button class="main-button" type="submit" :disabled="isDisabled">完成</button>
      <p class="reminder title">温馨提示</p>
      <p class="reminder">单笔提现金额T+1日到账</p>
    </form>
    <div class="message-box" v-show="isSubmit && modifyOk">
      <div class="message-box__content">
        <p class="message-box__title">提现申请成功</p>
        <router-link to="/ttl/myinsurance" class="message-box__button">确定</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  import CommonSmsInput from 'components/Common/CommonSmsInput'

  export default {
    data () {
      return {
        withdrawAmount: '',
        errMsg: '',
        isSubmit: false
      }
    },
    computed: {
      ...mapGetters({
        userBalance: 'puyipay/withdraw/userBalance',
        userInfo: 'puyipay/withdraw/userInfo',
        phoneNum: 'puyipay/withdraw/phoneNum',
        modifyOk: 'puyipay/withdraw/modifyOk',
        apiErrMsg: 'puyipay/withdraw/apiErrMsg',
        smsCode: 'smsCode'
      }),
      isDisabled () {
        return !this.withdrawAmount || !this.smsCode
      }
    },
    methods: {
      ...mapActions({
        getBalance: 'puyipay/withdraw/getBalance',
        withdrawSubmit: 'puyipay/withdraw/withdrawSubmit'
      }),
      ...mapMutations({
        reset: 'puyipay/withdraw/PUYIPAY_REST_WITHDRAWSUBMIT',
        clearApiErr: 'puyipay/withdraw/CLEAR_WITHDRAWSUBMIT_ERR'
      }),
      clearErrMsg () {
        this.errMsg = ''
        this.clearApiErr()
      },
      setErrMsg (msg) {
        this.errMsg = msg
      },
      submit () {
        const codeSeq = sessionStorage.getItem('smsCodeSeq')
        const payAmount = this.withdrawAmount
        const recAccount = this.userInfo.cardNo
        const verifyCode = this.smsCode
        const maxAmount = this.userBalance.vAccTotalAmt
        if (!codeSeq) {
          this.errMsg = '请先获取验证码'
          return
        } else if (payAmount > maxAmount) {
          this.errMsg = '提现金额不能超过可提金额'
          return
        } else {
          this.errMsg = ''
          this.isSubmit = true
          this.withdrawSubmit({codeSeq, payAmount, recAccount, verifyCode})
        }
      }
    },
    components: {
      CommonSmsInput
    },
    mounted () {
      this.reset()
      this.getBalance()
    }
  }
</script>
