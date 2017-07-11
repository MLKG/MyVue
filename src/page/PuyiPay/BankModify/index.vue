<template>
  <div>
    <form class="form" @submit.prevent="submit">
      <div class="form-group">
        <label for="bankList">银行</label>
        <select id="bankList" v-model="bankName">
          <option value="0" disabled="disabled">选择银行</option>
          <option v-for="item in bankList" :value="item.bankCode + ',' + item.bankName">{{ item.bankName }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="BankNum">卡号</label>
        <input type="text" id="BankNum" placeholder="仅限借记卡（储蓄卡）" v-model="cardNum" @focus="clearErrMsg">
      </div>
      <div class="form-group">
        <label for="phoneNum">预留手机号</label>
        <input type="text" id="phoneNum" placeholder="请输入银行预留手机号" v-model="phoneNum" @focus="clearErrMsg">
      </div>
      <common-sms-input name="bankModify" :phoneNum="phoneNum" :cardNum="cardNum" @setErrMsg="setErrMsg" @clearErrMsg="clearErrMsg"></common-sms-input>
      <p class="form-info">{{ errMsg || apiErrMsg }}</p>
      <button class="main-button" type="submit" :disabled="isDisabled">完成</button>
    </form>
    <div class="message-box" v-show="isSubmit && modifyOk">
      <div class="message-box__content">
        <p class="message-box__title">修改成功</p>
        <router-link to="/puyipay" class="message-box__button">确定</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  import CommonSmsInput from 'components/Common/CommonSmsInput'

  export default {
    data () {
      return {
        cardNum: '',
        phoneNum: '',
        errMsg: '',
        isSubmit: false,
        bankName: 0
      }
    },
    computed: {
      ...mapGetters({
        modifyOk: 'puyipay/bankModify/modifyOk',
        apiErrMsg: 'puyipay/bankModify/apiErrMsg',
        smsCode: 'smsCode',
        bankList: 'puyipay/register/bankList'
      }),
      isDisabled () {
        return !this.cardNum || !this.phoneNum || !this.smsCode || !this.bankName
      }
    },
    methods: {
      ...mapActions({
        modifyCard: 'puyipay/bankModify/modifyCard',
        isOpenAccount: 'puyipay/home/isOpenAccount',
        getBankList: 'puyipay/register/bankList'
      }),
      ...mapMutations({
        reset: 'puyipay/bankModify/PUYIPAY_REST_MODIFYCARD',
        clearApiErr: 'puyipay/bankModify/CLEAR_API_ERRORMSG'
      }),
      submit () {
        const cardNo = this.cardNum
        const phoneNo = this.phoneNum
        const verifyCode = this.smsCode
        const codeSeq = sessionStorage.getItem('smsCodeSeq')

        if (!this._validation.isPhone(phoneNo)) {
          this.errMsg = '请输入正确的手机号'
          return
        } else if (!codeSeq) {
          this.errMsg = '请先获取验证码'
          return
        } else {
          this.errMsg = ''
          this.isSubmit = true
          this.modifyCard({cardNo, phoneNo, verifyCode, codeSeq})
        }
      },
      clearErrMsg () {
        this.errMsg = ''
        this.clearApiErr()
      },
      setErrMsg (msg) {
        this.errMsg = msg
      }
    },
    components: {
      CommonSmsInput
    },
    mounted () {
      this.isOpenAccount().then((res) => {
        if (!res) {
          this.$router.push('/ttl/myinsurance')
        }
      })
      this.reset()
      this.getBankList()
    }
  }
</script>
