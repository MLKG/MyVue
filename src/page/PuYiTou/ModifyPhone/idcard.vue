<template>
  <div>
    <div class="navs">
      <router-link class="nav" to="/modifyPhoneByPhoneNo">验证原手机</router-link>
      <router-link class="nav current" to="/modifyPhoneByIdCard">验证身份证</router-link>
    </div>
    <form v-show="!finishStepOne">
      <div class="box">
        <label for="idcard">身份证号</label><span class="msg gray">输入身份证号码</span>
        <div class="inputbox">
          <input ref="idcardInput" type="text" name="idcard" id="idcard" v-model="idcardNo">
          <img src="../../../images/puyitou/X.png" class="clearIdCard" v-show="idcardNo" @click="clearIdCardNo()">
        </div>
      </div>
      <div class="gap-line"><div class="inner"></div></div>
      <div class="box">
        <label for="pwd">交易密码</label><span class="msg gray">输入交易密码</span>
        <div class="inputbox">
          <input ref="pwdInputHide" type="password" name="pwd" id="pwd" v-show="!showPwd" v-model="transPwd">
          <input ref="pwdInputShow" type="text" name="pwd" id="pwd" v-show="showPwd" v-model="transPwd">
          <img src="../../../images/puyitou/X.png" class="clearPwd" v-show="transPwd" @click="clearPwd()">
          <img src="../../../images/puyitou/eye-close.png" class="eye-close" @click="togglePwd()" v-show="!showPwd">
          <img src="../../../images/puyitou/eye-open.png" class="eye-open" @click="togglePwd()" v-show="showPwd">
        </div>
      </div>
      <button class="next-btn" :class="{active: btnIsActive}" :disabled="!btnIsActive" @click="nextStep($event)">下一步</button>
    </form>
    <form v-show="finishStepOne">
      <div class="box">
        <label for="newPhoneNoView">新手机号</label><span class="msg gray" v-show="!errObj.newPhoneNotValid">输入绑定手机号码</span><span class="msg red" v-show="errObj.newPhoneNotValid">请输入正确的手机号码</span>
        <div class="inputbox">
          <input ref="newPhoneNoView" type="text" name="newPhoneNoView" id="newPhoneNoView" v-model="newPhoneNoView" @keyup="formatNewPhone($event.target.value)" @blur="checkNewPhoneNo()">
          <img src="../../../images/puyitou/X.png" class="clearPhone" v-show="newPhoneNo" @click="clearNewPhoneNo()">
        </div>
      </div>
      <div class="gap-line"><div class="inner"></div></div>
      <div class="box">
        <label for="smsCodeNewPhone">短信验证</label><span class="msg gray">输入短信验证码</span>
        <div class="inputbox">
          <input ref="smsCodeNewPhoneInput" type="text" name="smsCodeNewPhone" id="smsCodeNewPhone" v-model="smsCodeNewPhone">
          <img src="../../../images/puyitou/X.png" class="clearSmsCode" @click="clearSmsCodeNewPhone()" v-show="smsCodeNewPhone">
          <span class="get-sms-code" v-show="!n_sendFlg" @click="getNextSmsCode()">获取验证码</span>
          <span class="sms-code-timeout" v-show="n_sendFlg">{{ n_seconds }}s</span>
        </div>
      </div>
      <div class="voice-sms">
        <p v-show="n_smsTimeout">收不到短信请 <a>语音获取</a></p>
      </div>
      <button class="next-btn" :class="{active: nextBtnIsActive}" :disabled="!nextBtnIsActive">下一步</button>
    </form>
    <div class="modal hide">
      <div class="box hide">
        <p class="title">修改手机需先设置交易密码</p>
        <div class="btns"><a href="">取消</a><a href="">去设置</a></div>
      </div>
      <div class="box">
        <p class="title">请先进行实名认证</p>
        <div class="btns"><a href="">取消</a><a href="">确定</a></div>
      </div>
    </div>
  </div>
</template>

<script>
  const TOTALSECONDS = 10

  export default {
    data () {
      return {
        newPhoneNoView: '',
        newPhoneNo: '',
        transPwd: '',
        showPwd: false,
        finishStepOne: false,
        idcardNo: '',
        smsCodeNewPhone: '',
        n_sendFlg: false,
        n_seconds: TOTALSECONDS,
        n_smsTimeout: false,
        errObj: {
          newPhoneNotValid: false
        }
      }
    },
    computed: {
      btnIsActive () {
        return this.idcardNo && this.transPwd
      },
      nextBtnIsActive () {
        return this.newPhoneIsValid && this.smsCodeNewPhone
      },
      newPhoneIsValid () {
        return /^1[0-9]{10}$/.test(this.newPhoneNo)
      }
    },
    methods: {
      formatNewPhone (val) {
        let ret = this._inputPhoneNo(val)
        this.newPhoneNoView = ret.phoneNoView
        this.newPhoneNo = ret.phoneNo
      },
      clearNewPhoneNo () {
        this.newPhoneNoView = ''
        this.newPhoneNo = ''
        this.$refs.newPhoneNoView.focus()
        this.errObj.newPhoneNotValid = false
      },
      clearPwd () {
        this.transPwd = ''
        if (this.showPwd) {
          this.$refs.pwdInputShow.focus()
        } else {
          this.$refs.pwdInputHide.focus()
        }
      },
      togglePwd () {
        this.showPwd = !this.showPwd
      },
      nextStep (e) {
        e.preventDefault()
        this.finishStepOne = true
      },
      clearIdCardNo () {
        this.idcardNo = ''
        this.$refs.idcardInput.focus()
      },
      clearSmsCodeNewPhone () {
        this.smsCodeNewPhone = ''
        this.$refs.smsCodeNewPhoneInput.focus()
      },
      getNextSmsCode () {
        this.n_sendFlg = true
        this.n_seconds = TOTALSECONDS
        this.startNextTimout()
      },
      startNextTimout () {
        var n = TOTALSECONDS - 1
        var flg = setInterval(() => {
          if (!n) {
            clearInterval(flg)
            this.n_sendFlg = false
            this.n_smsTimeout = true
            return
          }
          this.n_seconds = n--
        }, 1000)
      },
      checkNewPhoneNo () {
        if (!this.newPhoneIsValid) {
          this.errObj.newPhoneNotValid = true
        } else {
          this.errObj.newPhoneNotValid = false
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

  .modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 999;

    .box {
      background-color: @bg-white;
      z-index: 1000;
      width: 5.4rem;
      margin-left: auto;
      margin-right: auto;
      margin-top: 50%;
      border-radius: 5px;
      font-size: @font-size-medium;

      .title {
        text-align: center;
        border-bottom: 1px solid @line-color;
        margin-bottom: 0;
        padding-top: .35rem;
        padding-bottom: .35rem;
        font-weight: bold;
      }

      .btns {
        display: flex;

        a {
          flex: 1;
          text-align: center;
          padding-top: .2rem;
          padding-bottom: .15rem;
        }

        a:first-child {
          border-right: 1px solid @line-color;
        }

        a:last-child {
          color: @font-color-blue;
        }
      }
    }
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

  .navs {
    display: flex;
    background-color: @bg-white;
    margin-bottom: .3rem;

    .nav {
      flex: 1;
      text-align: center;
      font-size: @font-size-medium;
      padding-top: .25rem;
      padding-bottom: .25rem;
    }

    .nav.current {
      color: @font-color-red;
      border-bottom: 2px solid @font-color-red;
    }
  }

  form {
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
