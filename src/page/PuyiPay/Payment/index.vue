<template>
  <div>
    <form class="form" @submit.prevent="submit">
      <div class="form-group">
        <div class="payment-amount">
          <p class="payment-amount__title">待支付金额（元）</p>
          <p class="payment-amount__value">{{ payInfo.premium | currency }}</p>
        </div>
      </div>
      <div class="form-gap"></div>
      <div class="form-group text">支付方式</div>
      <div class="form-group">
        <div class="payment-bank">
          <div class="payment-bank__icon">
            <div :class="'bank-icon-' + bankCode"></div>
          </div>
          <div class="payment-bank__name">
            <p class="bank-name">{{ bankNameText }}</p>
            <p class="bank-limit">{{ bankLimitText }}</p>
          </div>
          <label class="radio-icon">
            <input type="radio" value="bank" v-model="payChannel">
            <!-- <img src="../../../images/puyipay/bank-selected-icon.png"> -->
          </label>
        </div>
      </div>
      <!-- <div class="form-group">
        <div class="payment-bank">
          <div class="payment-bank__icon">
            <div class="balance-icon" :class="clsObj"></div>
          </div>
          <div class="payment-bank__name">
            <p class="bank-name" :class="clsObj">广发电子账户{{ balanceNotEnough }}</p>
            <p class="bank-limit">余额￥{{ userBalance.vAccAmt | currency }}</p>
          </div>
          <label class="radio-icon">
            <input type="radio" value="balance" v-model="payChannel" :disabled="balanceDisable">
            <img src="../../../images/puyipay/bank-selected-icon.png">
          </label>
        </div>
      </div> -->
      <div class="form-gap"></div>
      <div class="form-group">
        <label>预留手机号</label>
        <p class="content">{{ phoneNumText }}</p>
      </div>
      <common-sms-input name="payment" :phoneNum="phoneNum" :prodName="productName" @clearErrMsg="clearErrMsg" @setErrMsg="setErrMsg"></common-sms-input>
      <p class="form-info">{{ errMsg || apiErrMsg }}</p>
      <button class="main-button" type="submit" :disabled="isDisabled">下一步</button>
    </form>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  import CommonSmsInput from 'components/Common/CommonSmsInput'

  export default {
    data () {
      return {
        payChannel: 'bank',  // bank or balance
        errMsg: '',
        payInfo: {},
        productName: ''
      }
    },
    computed: {
      ...mapGetters({
        userRealName: 'puyipay/payment/userRealName',
        userBalance: 'puyipay/payment/userBalance',
        paySingleLimit: 'puyipay/payment/paySingleLimit',
        paySingleDaylimit: 'puyipay/payment/paySingleDaylimit',
        phoneNum: 'puyipay/payment/phoneNum',
        bankName: 'puyipay/payment/bankName',
        cardNo: 'puyipay/payment/cardNo',
        bankCode: 'puyipay/payment/bankCode',
        apiErrMsg: 'puyipay/payment/apiErrMsg',
        smsCode: 'smsCode'
      }),
      balanceDisable () {
        return this.payInfo.premium > this.userBalance.vAccAmt
      },
      clsObj () {
        return {
          enable: !this.balanceDisable,
          disable: this.balanceDisable
        }
      },
      balanceNotEnough () {
        return this.balanceDisable ? '（余额不足）' : ''
      },
      isDisabled () {
        return !this.smsCode
      },
      bankNameText () {
        return this.bankName ? this.bankName + '（' + this.cardNo + '）储蓄卡' : ''
      },
      bankLimitText () {
        return this.paySingleLimit ? '单笔限额' + this.paySingleLimit + '万 单日限额' + this.paySingleDaylimit + '万' : ''
      },
      phoneNumText () {
        return this.phoneNum ? this._encrypt.phoneNo(this.phoneNum) : ''
      }
    },
    methods: {
      ...mapActions({
        getBalance: 'puyipay/payment/getBalance',
        payConfirm: 'puyipay/payment/payConfirm',
        isOpenAccount: 'puyipay/home/isOpenAccount'
      }),
      ...mapMutations({
        clearApiErr: 'puyipay/payment/CLEAR_API_ERRORMSG'
      }),
      getPayInfo () {
        this.payInfo = JSON.parse(sessionStorage.getItem('payInfo'))
        this.productName = sessionStorage.getItem('productName')
      },
      submit () {
        const codeSeq = sessionStorage.getItem('smsCodeSeq')
        const verifyCode = this.smsCode
        const applNo = this.payInfo.applNo

        if (!codeSeq) {
          this.errMsg = '请先获取验证码'
          return
        } else {
          this.payConfirm({codeSeq, verifyCode, applNo}).then(res => {
            sessionStorage.setItem('payResult', JSON.stringify(res))
            sessionStorage.setItem('userRealName', this.userRealName)
            this.$router.replace({path: '/ttl/purchaseresult', query: {productId: this.$route.query.productId}})
          })
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
      sessionStorage.removeItem('payResult')
      sessionStorage.removeItem('userRealName')
      this.getBalance()
      this.getPayInfo()
      this.clearErrMsg()
    }
  }
</script>

<style lang="less">
  @import "../../../style/variables";

  .payment-amount {
    padding-left: .3rem;

    &__title {
      margin-top: .4rem;
      margin-bottom: .12rem;
    }

    &__value {
      font-size: @font-size-bigger;
      margin-top: 0;
      margin-bottom: .45rem;
    }
  }

  .payment-bank {
    padding: .3rem;
    width: 100%;
    position: relative;

    &__icon {
      display: inline-block;
      margin-right: .36rem;
      background: transparent;
      width: .7rem;
      height: .7rem;
      text-align: center;
    }

    &__name {
      display: inline-block;

      .bank-name {
        font-weight: bold;
      }

      .bank-name.disable {
        color: @font-color-gray;
      }

      .bank-limit {
        color: @font-color-gray;
      }

      p {
        margin: 0;
      }
    }

    .radio-icon {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: transparent;
      padding: 0;

      input {
        visibility: hidden;
        position: absolute;
        right: .32rem;
        top: 40%;
      }

      input:checked + img {
        display: block;
      }

      img {
        width: .35rem;
        position: absolute;
        display: none;
        right: .32rem;
        top: 40%;
      }
    }
  }

  .balance-icon {
    display: inline-block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;

    &.enable {
      background-image: url(../../../images/puyipay/balance-icon-enable.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }

    &.disable {
      background-image: url(../../../images/puyipay/balance-icon-disable.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
</style>
