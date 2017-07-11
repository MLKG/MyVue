<template>
  <div>
    <form class="form" @submit.prevent="submit">
      <div class="form-group">
        <label>保费</label>
        <p class="content">{{surrenderDetail.backAmount}} 元</p>
      </div>
      <div class="form-group">
        <label>退保手续费</label>
        <p class="content">{{surrenderDetail.backFee}} 元</p>
      </div>
      <div class="form-gap"></div>
      <div class="form-group">
        <label>所在银行</label>
        <p class="content">{{cgbUser.bankName}}</p>
      </div>
      <div class="form-group">
        <label>卡号</label>
        <p class="content">{{cgbUser.cardNoEncrypted}}</p>
      </div>
      <div class="form-group with-link">
        <label>预留手机</label>
        <p class="content">{{cgbUser.phoneNo}}</p>
      </div>
      <common-sms-input  name="surrender" :phoneNum="phoneNo" @setErrMsg="setErrMsg" @clearErrMsg="clearErrMsg"></common-sms-input>
      <p class="form-info">{{ errMsg || apiErrMsg }}</p>
      <button class="main-button" type="submit" :disabled="isDisabled">提交</button>
    </form>
  </div>
</template>

<script>
  import CommonSmsInput from 'components/Common/CommonSmsInput'
  import { mapActions, mapGetters, mapMutations } from 'vuex'

  export default {
    data () {
      return {
        errMsg: ''
      }
    },
    mounted () {
      this.getSurrenderDetail({applno: this.$route.query.orderId, bxgsdm: this.$route.query.insurCode})
    },
    computed: {
      ...mapGetters({
        surrenderDetail: 'ttl/cancelInsurance/surrenderDetail',
        cgbUser: 'ttl/cancelInsurance/cgbUser',
        apiErrMsg: 'ttl/cancelInsurance/apiErrMsg',
        phoneNo: 'ttl/cancelInsurance/phoneNo',
        smsCode: 'smsCode',
        modifyOk: 'ttl/cancelInsurance/modifyOk'
      }),
      ...mapMutations({
        clearApiErr: 'ttl/cancelInsurance/CLEAR_MODIFYPHONE_ERR'
      }),
      isDisabled () {
        return !this.smsCode
      }
    },
    methods: {
      ...mapActions({
        getSurrenderDetail: 'ttl/cancelInsurance/getSurrenderDetail',
        surrenderSubmit: 'ttl/cancelInsurance/surrenderSubmit'
      }),
      submit () {
        let orderId = this.surrenderDetail.orderId
        let insurCode = this.surrenderDetail.bxgsdm
        let verifyCode = this.smsCode
        let codeSeq = sessionStorage.getItem('smsCodeSeq')
        let data = {orderId, insurCode, verifyCode}
        if (!codeSeq) {
          this.errMsg = '请先获取验证码'
        } else {
          this.errMsg = ''
          this.isSubmit = true
          this.surrenderSubmit(data).then((res) => {
            this.$router.push({path: '/ttl/tuibaostatus', query: {status: res.status}})
          })
        }
      },
      clearErrMsg () {
        this.errMsg = ''
        // this.clearApiErr()
      },
      setErrMsg (msg) {
        this.errMsg = msg
      }
    },
    components: {
      CommonSmsInput
    }
  }
</script>
