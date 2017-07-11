<template>
  <div class="form-group with-link">
    <label for="smsCode">短信验证码</label>
    <input type="text" id="smsCode" placeholder="请输入手机短信验证码" :value="smsCode" @input="inputEvent($event.target.value)" @focus="clearErrMsg">
    <a v-show="!isSend" class="blue-link" @click="getSmsCode">获取验证码</a>
    <a v-show="isSend" class="gray-link">剩余{{ second }}秒</a>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      phoneNum: {
        type: String,
        required: true
      },
      cardNum: {
        type: String
      },
      prodName: {
        type: String
      },
      certNo: {
        type: String
      }
    },
    data () {
      return {
        smsCode: this.$store.getters.smsCode,
        isSend: false,
        second: 60
      }
    },
    methods: {
      ...mapActions({
        phoneModify: 'puyipay/phoneModify/phoneCodeForPhone',
        bankModify: 'puyipay/bankModify/phoneCodeForCard',
        withdraw: 'puyipay/withdraw/phoneCodeForWithdraw',
        payment: 'puyipay/payment/phoneCodeForPayment',
        loan: 'ttl/loan/phoneCodeForLoan',
        register: 'puyipay/register/phoneCodeForRegister',
        surrender: 'ttl/cancelInsurance/phoneCode'
      }),
      getSmsCode () {
        // 校验手机号
        if (!this.phoneNum) {
          this.$emit('setErrMsg', '手机号不能为空')
          return
        } else if (!this._validation.isPhone(this.phoneNum)) {
          this.$emit('setErrMsg', '请输入正确的手机号')
          return
        }

        this.smsCode = ''
        this.$store.commit('CLEAR_SMSCODE')
        this.isSend = true

        this[this.name]({phoneNo: this.phoneNum, cardNo: this.cardNum, prodName: this.prodName, certNo: this.certNo})

        // 倒计时
        let t = setInterval(() => {
          if (this.second > 1) {
            this.second--
          } else {
            this.isSend = false
            this.second = 60
            clearInterval(t)
          }
        }, 1000)
      },
      clearErrMsg () {
        this.$emit('clearErrMsg')
      },
      inputEvent (value) {
        this.smsCode = value
        this.$store.commit('SET_SMSCODE', {smsCode: value})
      }
    },
    mounted () {
      this.smsCode = ''
      this.$store.commit('CLEAR_SMSCODE')
    }
  }
</script>
