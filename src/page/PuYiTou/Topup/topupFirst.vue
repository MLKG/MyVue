<template>
  <div>
    <form>
      <div class="box">
        <label for="phoneNoView">手机号码</label><span class="msg gray" v-show="!errObj.phoneNotValid">输入银行卡预留的手机号码</span><span class="msg red" v-show="errObj.phoneNotValid">请输入正确的手机号码</span>
        <div class="inputbox">
          <input ref="phoneNoView" type="text" name="phoneNoView" id="phoneNoView" v-model="phoneNoView" @keyup="formatPhone($event.target.value)" @blur="checkPhoneNo()">
          <img src="../../../images/puyitou/X.png" class="clearPhone" v-show="phoneNo" @click="clearPhoneNo()">
        </div>
      </div>
      <div class="gap-line"><div class="inner"></div></div>
      <div class="box">
        <label for="smsCode">短信验证</label><span class="msg gray">输入短信验证码</span>
        <div class="inputbox">
          <input ref="smsCodeInput" type="text" name="smsCode" id="smsCode" v-model="smsCode">
          <img src="../../../images/puyitou/X.png" class="clearSmsCode" v-show="smsCode" @click="clearSmsCode()">
          <span class="get-sms-code" v-show="!sendFlg" @click="getSmsCode()">获取验证码</span>
          <span class="sms-code-timeout" v-show="sendFlg">{{ seconds }}s</span>
        </div>
      </div>
      <div class="voice-sms">
        <p v-show="smsTimeout">收不到短信请 <a>语音获取</a></p>
      </div>
      <button class="next-btn" :class="{active: btnIsActive}" :disabled="!btnIsActive">下一步</button>
    </form>
  </div>
</template>

<script>
  const TOTALSECONDS = 10

  export default {
    data () {
      return {
        phoneNoView: '',
        phoneNo: '',
        errObj: {
          phoneNotValid: false
        },
        smsCode: '',
        sendFlg: false,
        seconds: TOTALSECONDS,
        smsTimeout: false
      }
    },
    computed: {
      btnIsActive () {
        return this.phoneIsValid && this.smsCode
      },
      phoneIsValid () {
        return /^1[0-9]{10}$/.test(this.phoneNo)
      }
    },
    methods: {
      formatPhone (val) {
        let ret = this._inputPhoneNo(val)
        this.phoneNoView = ret.phoneNoView
        this.phoneNo = ret.phoneNo
      },
      clearPhoneNo () {
        this.phoneNoView = ''
        this.phoneNo = ''
        this.$refs.phoneNoView.focus()
        this.errObj.phoneNotValid = false
      },
      clearSmsCode () {
        this.smsCode = ''
        this.$refs.smsCodeInput.focus()
      },
      getSmsCode () {
        this.sendFlg = true
        this.seconds = TOTALSECONDS
        this.startTimout()
      },
      startTimout () {
        var n = TOTALSECONDS - 1
        var flg = setInterval(() => {
          if (!n) {
            clearInterval(flg)
            this.sendFlg = false
            this.smsTimeout = true
            return
          }
          this.seconds = n--
        }, 1000)
      },
      checkPhoneNo () {
        if (!this.phoneIsValid) {
          this.errObj.phoneNotValid = true
        } else {
          this.errObj.phoneNotValid = false
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  * {
    box-sizing: border-box;
  }

  .msg {
    margin-left: .3rem;

    &.red {
      color: @font-color-red;
    }

    &.blue {
      color: @font-color-blue;
    }

    &.gray {
      color: @font-color-gray;
    }
  }

  form {
    margin-top: .3rem;

    label {
      font-size: @font-size-medium;
    }

    .box {
      background-color: @bg-white;
      padding-top: .37rem;
      padding-left: .25rem;
      padding-right: .25rem;
    }

    .gap-line {
      padding-left: .25rem;
      background-color: @bg-white;
      .inner {
        height: 1px;
        background-color: @line-color;
      }
    }

    .voice-sms {
      height: .95rem;
      padding-top: .2rem;

      p {
        text-align: center;
      }

      a {
        color: @font-color-blue;
      }
    }

    .next-btn {
      font-size: @font-size-medium;
      background-color: @bg-gray;
      color: @font-color-white;
      border: 0;
      width: 100%;
      padding-top: .3rem;
      padding-bottom: .3rem;
      font-weight: bold;
      position: fixed;
      bottom: 0;
    }

    .next-btn.active {
      background-color: @bg-red;
    }

    .inputbox {
      padding-top: .3rem;
      padding-bottom: .3rem;
      position: relative;

      input {
        font-size: .45rem;
        border: 0;
        outline: none;
        width: 80%;
      }

      input[name="smsCode"] {
        width: 60%;
      }

      .clearPhone, .clearIdCard {
        position: absolute;
        right: 0;
        top: 37%;
        width: .3rem;
      }

      .clearSmsCode {
        position: absolute;
        right: 25%;
        top: 37%;
        width: .3rem;
      }

      .get-sms-code {
        position: absolute;
        right: 0;
        top: 25%;
        color: @font-color-blue;
        font-size: @font-size-smaller;
        border: 1px solid @font-color-blue;
        border-radius: 3px;
        padding: .15rem .1rem;
        line-height: 1;
      }

      .sms-code-timeout {
        position: absolute;
        right: 0;
        top: 25%;
        color: @font-color-blue;
        font-size: @font-size-smaller;
        border: 1px solid @font-color-blue;
        border-radius: 3px;
        padding: .15rem .1rem;
        line-height: 1;
      }

      .clearPwd {
        position: absolute;
        right: 10%;
        top: 37%;
        width: .3rem;
      }

      .eye-close,
      .eye-open {
        position: absolute;
        right: 0;
        top: 40%;
        width: .4rem;
      }
    }
  }
</style>
