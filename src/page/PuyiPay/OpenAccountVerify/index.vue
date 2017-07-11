<template>
  <div>
    <form class="form" @submit.prevent="submit">
      <div class="form-group">
        <label for="userName">真实姓名</label>
        <p class="content">{{ userInfo.cusName }}</p>
      </div>
      <div class="form-group">
        <label for="userIdentityCode">身份证号</label>
        <p class="content">{{ certNoEncrypted }}</p>
      </div>
      <div class="form-gap"></div>
      <div class="form-group">
        <div class="payment-bank">
          <div class="payment-bank__icon">
            <div :class="'bank-icon-' + bankCode"></div>
          </div>
          <div class="payment-bank__name">
            <p class="bank-name">{{ bankName }}</p>
            <p>{{ cardNoEncrypted }}</p>
          </div>
        </div>
        <!-- <label for="userIdentityCode">卡号</label>
        <p class="content">{{ cardNoEncrypted }}</p> -->
      </div>
      <div class="form-group with-link">
        <label for="phoneNum">预留手机号</label>
        <p v-show="userInfo.isIdentityUser && !modifyStatus" class="content">{{ userInfo.bankPhoneEncrypted }}</p>
        <a v-show="userInfo.isIdentityUser && !modifyStatus" class="blue-link" @click="modifyPhone">修改手机号</a>
        <input v-show="!userInfo.isIdentityUser || modifyStatus" type="text" id="phoneNum" placeholder="请输入银行预留手机号" v-model="phoneNum" @focus="clearErrMsg">
      </div>
      <common-sms-input name="register" :phoneNum="bankPhoneNum" :certNo="userInfo.certNo" :cardNum="userInfo.cardNo" @clearErrMsg="clearErrMsg" @setErrMsg="setErrMsg"></common-sms-input>
      <label for="read" class="read">
        <input type="checkbox" id="read" v-model="read">
        我已阅读并同意<span><a href="http://www.puyitou.com/ContractTemplate/GFYHDZZHFWXY.pdf">《广发电子账户开户协议》</a></span>
      </label>
      <p class="form-info">{{ errMsg || apiErrMsg }}</p>
      <button class="main-button" type="submit" :disabled="isDisabled">下一步</button>
    </form>
    <div class="message-box" v-show="openStatus">
      <div class="message-box__content">
        <p class="message-box__title">开户成功</p>
        <!-- <router-link to="/ttl/productdetail" class="message-box__button">确定</router-link> -->
        <a class="message-box__button" @click="routeBack">确定</a>
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
        userInfo: {},
        uploadInfo: {},
        phoneNum: '',
        certNoEncrypted: '',
        cardNoEncrypted: '',
        modifyStatus: false,
        errMsg: '',
        read: false,
        openStatus: false
      }
    },
    computed: {
      ...mapGetters({
        apiErrMsg: 'puyipay/register/apiErrMsg',
        smsCode: 'smsCode'
      }),
      bankPhoneNum () {
        return this.userInfo.isIdentityUser && !this.modifyStatus ? this.userInfo.bankPhone : this.phoneNum
      },
      isDisabled () {
        if (this.userInfo.isIdentityUser && !this.modifyStatus) {
          return !this.smsCode || !this.read
        } else {
          return !this.smsCode || !this.phoneNum || !this.read
        }
      },
      bankName () {
        return this.userInfo.bankInfo ? this.userInfo.bankInfo.name : ''
      },
      bankCode () {
        return this.userInfo.bankInfo ? this.userInfo.bankInfo.code : ''
      }
    },
    methods: {
      ...mapActions({
        openAccount: 'puyipay/register/openAccount'
      }),
      ...mapMutations({
        clearApiErr: 'puyipay/register/CLEAR_API_ERRORMSG'
      }),
      modifyPhone () {
        this.modifyStatus = true
      },
      clearErrMsg () {
        this.errMsg = ''
        this.clearApiErr()
      },
      setErrMsg (msg) {
        this.errMsg = msg
      },
      submit () {
        const cusName = this.userInfo.cusName
        const certNo = this.userInfo.certNo
        const cardNo = this.userInfo.cardNo
        const phoneNo = this.bankPhoneNum
        const verifyCode = this.smsCode
        const codeSeq = sessionStorage.getItem('smsCodeSeq')
        const imageFront = this.uploadInfo.imageFront
        const imageBack = this.uploadInfo.imageBack
        const imagePath1 = this.uploadInfo.imagePath1
        const imagePath2 = this.uploadInfo.imagePath2

        if (!codeSeq) {
          this.errMsg = '请先获取验证码'
          return
        }

        this.openAccount({cusName, certNo, cardNo, phoneNo, verifyCode, codeSeq, imageFront, imageBack, imagePath1, imagePath2}).then((res) => {
          if (res.status === 'success') {
            this.openStatus = true
            sessionStorage.removeItem('openAccountInfo')
            sessionStorage.removeItem('openAccountUpload')
          }
        })
      },
      routeBack () {
        let backUrl = this.$route.query.backUrl
        if (backUrl === 'productdetail') {
          let productId = this.$route.query.productId
          this.$router.replace({path: '/ttl/productdetail', query: {productId: productId}})
        } else if (backUrl === 'myinsurance') {
          this.$router.replace({path: '/ttl/myinsurance'})
        }
      }
    },
    components: {
      CommonSmsInput
    },
    mounted () {
      this.userInfo = JSON.parse(sessionStorage.getItem('openAccountInfo'))
      this.uploadInfo = JSON.parse(sessionStorage.getItem('openAccountUpload'))
      this.certNoEncrypted = this._encrypt.certNo(this.userInfo.certNo)
      this.cardNoEncrypted = this._encrypt.cardNo(this.userInfo.cardNo)
      this.clearErrMsg()
    }
  }
</script>
