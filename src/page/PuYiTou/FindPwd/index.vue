<template>
  <div class="findpwd">
    <form>
      <label for="phoneNoView">手机号码</label><span class="msg gray" v-show="!errObj.phoneNotValid">请输入注册手机号</span><span class="msg red" v-show="errObj.phoneNotValid">请输入正确的手机号码</span>
      <div class="inputbox">
        <input ref="phoneNoView" type="text" v-model="phoneNoView" name="phoneNoView" id="phoneNoView" @keyup="formatPhone($event.target.value)" @blur="checkPhoneNo()">
        <img src="../../../images/puyitou/X.png" class="clearPhone" @click="clearPhoneNo()" v-show="phoneNo">
      </div>
      <label for="imgCode">图形验证码</label><span class="msg gray">字母不区分大小写</span>
      <div class="inputbox">
        <input ref="imgCodeInput" type="text" name="imgCode" id="imgCode" v-model="imgCode">
        <img src="../../../images/puyitou/X.png" class="clearImgCode" v-show="imgCode" @click="clearImgCode()">
        <img src="../../../images/puyitou/code.png" class="imgCode">
      </div>
      <label for="smsCode">短信验证</label><span class="msg gray">请输入手机短信验证码</span>
      <div class="inputbox">
        <input ref="smsCodeInput" type="text" name="smsCode" id="smsCode" v-model="smsCode">
        <img src="../../../images/puyitou/X.png" class="clearSmsCode" @click="clearSmsCode()" v-show="smsCode">
        <span class="timeout" v-show="isSend">{{ seconds }}s</span>
        <span class="reSend" v-show="!isSend" @click="sendSmsCode()">获取验证码</span>
      </div>
      <button class="nextBtn" :class="{active: btnIsActive}" :disabled="!btnIsActive">下一步</button>
    </form>
    <p class="info">若您手机号码已失效或遗失，请拨打客服热线</p>
    <p class="info"><span class="phone">4008 588 588</span> 我们会协助您找回密码</p>
    <div class="bottom"></div>
  </div>
</template>

<script>
  const TOTALSECONDS = 10

  export default {
    data () {
      return {
        phoneNoView: '',
        phoneNo: '',
        imgCode: '',
        smsCode: '',
        isSend: false,
        seconds: TOTALSECONDS,
        errObj: {
          phoneNotValid: false
        }
      }
    },
    computed: {
      btnIsActive () {
        return this.phoneIsValid && this.imgCode && this.smsCode
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
      checkPhoneNo () {
        if (!this.phoneIsValid) {
          this.errObj.phoneNotValid = true
        } else {
          this.errObj.phoneNotValid = false
        }
      },
      clearPhoneNo () {
        this.phoneNoView = ''
        this.phoneNo = ''
        this.$refs.phoneNoView.focus()
        this.errObj.phoneNotValid = false
      },
      clearImgCode () {
        this.imgCode = ''
        this.$refs.imgCodeInput.focus()
      },
      clearSmsCode () {
        this.smsCode = ''
        this.$refs.smsCodeInput.focus()
      },
      sendSmsCode () {
        this.isSend = true
        this.seconds = TOTALSECONDS
        this.startTimout()
      },
      startTimout () {
        var n = TOTALSECONDS - 1
        var flg = setInterval(() => {
          if (!n) {
            clearInterval(flg)
            this.isSend = false
            return
          }
          this.seconds = n--
        }, 1000)
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

  p.info {
    text-align: center;
    color: @font-color-gray;

    .phone {
      color: @font-color-red;
      text-decoration: underline;
    }
  }

  .bottom {
    margin-top: 1.3rem;
    margin-left: -.6rem;
    margin-right: -.6rem;
    height: 1.65rem;
    background-image: url('../../../images/puyitou/wave.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .findpwd {
    padding-top: 1.3rem;
    padding-left: .6rem;
    padding-right: .6rem;
    background-color: #fff;
  }

  form {
    label {
      font-size: @font-size-medium;
    }

    .inputbox {
      padding-top: .3rem;
      padding-bottom: .3rem;
      margin-bottom: .4rem;
      border-bottom: 1px solid @line-color;
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

      input[name="imgCode"] {
        width: 70%;
      }

      .clearPhone {
        position: absolute;
        right: 0;
        top: 37%;
        width: .3rem;
      }

      .imgCode {
        position: absolute;
        top: 30%;
        right: 0;
        width: 1.6rem;
      }

      .clearImgCode {
        position: absolute;
        right: 30%;
        top: 37%;
        width: .3rem;
      }

      .clearSmsCode {
        position: absolute;
        right: 27%;
        top: 37%;
        width: .3rem;
      }

      .reSend {
        position: absolute;
        right: 0;
        top: 29%;
        color: @font-color-red;
        font-size: @font-size-medium;
      }

      .timeout {
        position: absolute;
        right: 0;
        top: 34%;
        color: @font-color-red;
        font-size: @font-size-medium;
      }
    }

    .nextBtn {
      border: 0;
      width: 100%;
      background-color: #c4c4c4;
      color: #fff;
      font-size: @font-size-medium;
      padding-top: .3rem;
      padding-bottom: .3rem;
      border-radius: 5px;
      margin-bottom: .3rem;
      margin-top: .52rem;
    }

    .nextBtn.active {
      background-color: @bg-red;
    }
  }
</style>
