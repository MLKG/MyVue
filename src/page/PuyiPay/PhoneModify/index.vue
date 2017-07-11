<template>
  <div>
    <form class="form" @submit.prevent="submit">
      <div class="form-group">
        <label for="phoneNum">新手机号</label>
        <input type="text" id="phoneNum" placeholder="请输入新的银行预留手机号" v-model="phoneNum" @focus="clearErrMsg">
      </div>
      <common-sms-input name="phoneModify" :phoneNum="phoneNum" @setErrMsg="setErrMsg" @clearErrMsg="clearErrMsg"></common-sms-input>
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
        phoneNum: '',
        errMsg: '',
        isSubmit: false
      }
    },
    computed: {
      ...mapGetters({
        modifyOk: 'puyipay/phoneModify/modifyOk',
        apiErrMsg: 'puyipay/phoneModify/apiErrMsg'
      }),
      isDisabled () {
        return !this.phoneNum || !this.smsCode
      },
      smsCode () {
        return this.$store.getters.smsCode
      }
    },
    methods: {
      ...mapActions({
        modifyPhone: 'puyipay/phoneModify/modifyPhone',
        isOpenAccount: 'puyipay/home/isOpenAccount'
      }),
      ...mapMutations({
        reset: 'puyipay/phoneModify/PUYIPAY_REST_MODIFYPHONE',
        clearApiErr: 'puyipay/phoneModify/CLEAR_API_ERRORMSG'
      }),
      submit () {
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
          this.modifyPhone({phoneNo, verifyCode, codeSeq})
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
    }
  }
</script>
