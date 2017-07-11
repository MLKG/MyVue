<template>
  <div class="register">
    <div class="logo" v-show="!regSucess">
      <img src="../../../images/puyitou/logo.png">
      <p v-show="reSendFlg">收不到短信请 <a href="">语音获取</a></p>
    </div>
    <form v-show="!regSucess">
      <div v-show="!flg">
        <label for="phoneNoView">手机号码</label><span class="msg gray" v-show="!errObj.phoneNotValid">请输入11位数手机号</span><span class="msg red" v-show="errObj.phoneNotValid">请输入正确的手机号码</span>
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
        <button class="nextBtn" :class="{active: nextBtnIsActive}" :disabled="!nextBtnIsActive" @click="nextStep($event)">获取验证码</button>
        <div class="link"><router-link to="/login">已有账号？去登录</router-link></div>
      </div>
      <div v-show="flg">
        <label for="smsCode">短信验证</label><span class="msg gray">请输入手机短信验证码</span>
        <div class="inputbox">
          <input ref="smsCodeInput" type="text" name="smsCode" id="smsCode" v-model="smsCode">
          <img src="../../../images/puyitou/X.png" class="clearSmsCode" @click="clearSmsCode()" v-show="smsCode">
          <span class="timeout" v-show="!reSendFlg">{{ seconds }}s</span>
          <span class="reSend" v-show="reSendFlg" @click="resend()">重新发送</span>
        </div>
        <label for="pwd">登陆密码</label><span class="msg gray">密码为6-16位，须字母加数字或符号</span>
        <div class="inputbox">
          <input ref="pwdInputHide" type="password" name="pwd" id="pwd" v-show="!showPwd" v-model="password">
          <input ref="pwdInputShow" type="text" name="pwd" id="pwd" v-show="showPwd" v-model="password">
          <img src="../../../images/puyitou/X.png" class="clearPwd" @click="clearPwd()" v-show="password">
          <img src="../../../images/puyitou/eye-close.png" class="eye-close" @click="togglePwd()" v-show="!showPwd">
          <img src="../../../images/puyitou/eye-open.png" class="eye-open" @click="togglePwd()" v-show="showPwd">
        </div>
        <label for="ownerPhoneView">推荐人手机号</label><span class="msg gray">选填项</span>
        <div class="inputbox">
          <input ref="ownerPhoneInput" type="text" name="ownerPhoneView" id="ownerPhoneView" v-model="ownerPhoneView" @keyup="formatOwnerPhone($event.target.value)">
          <img src="../../../images/puyitou/X.png" class="clearOwnerPhone" v-show="ownerPhone" @click="clearOwnerPhoneNo()">
        </div>
        <button class="regBtn" :class="{active: regBtnIsActive}" :disabled="!regBtnIsActive" @click="register">注&nbsp;册</button>
      </div>
    </form>
    <div class="reg-success" v-show="regSucess">
      <img src="../../../images/puyitou/reg-success.png">
      <p>恭喜你 注册成功</p>
      <a href="" class="btn red">立即绑卡</a>
      <a href="" class="btn white">先看看</a>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
  const TOTALSECONDS = 120

  export default {
    data () {
      return {
        phoneNoView: '',
        phoneNo: '',
        imgCode: '',
        flg: false,
        smsCode: '',
        password: '',
        showPwd: false,
        ownerPhoneView: '',
        ownerPhone: '',
        errObj: {
          phoneNotValid: false
        },
        seconds: TOTALSECONDS,
        reSendFlg: false,
        regSucess: false
      }
    },
    computed: {
      nextBtnIsActive () {
        return this.phoneIsValid && this.imgCode
      },
      regBtnIsActive () {
        return this.smsCode && this.password
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
      formatOwnerPhone (val) {
        let ret = this._inputPhoneNo(val)
        this.ownerPhoneView = ret.phoneNoView
        this.ownerPhone = ret.phoneNo
      },
      clearPhoneNo () {
        this.phoneNoView = ''
        this.phoneNo = ''
        this.errObj.phoneNotValid = false
        this.$refs.phoneNoView.focus()
      },
      clearOwnerPhoneNo () {
        this.ownerPhoneView = ''
        this.ownerPhone = ''
        this.$refs.ownerPhoneInput.focus()
      },
      clearImgCode () {
        this.imgCode = ''
        this.$refs.imgCodeInput.focus()
      },
      nextStep (e) {
        e.preventDefault()
        this.flg = true
        this.startTimout()
      },
      clearSmsCode () {
        this.smsCode = ''
        this.$refs.smsCodeInput.focus()
      },
      clearPwd () {
        this.password = ''
        if (this.showPwd) {
          this.$refs.pwdInputShow.focus()
        } else {
          this.$refs.pwdInputHide.focus()
        }
      },
      togglePwd () {
        this.showPwd = !this.showPwd
      },
      checkPhoneNo () {
        if (!this.phoneIsValid) {
          this.errObj.phoneNotValid = true
        } else {
          this.errObj.phoneNotValid = false
        }
      },
      startTimout () {
        var n = TOTALSECONDS - 1
        var flg = setInterval(() => {
          if (!n) {
            clearInterval(flg)
            this.reSendFlg = true
            return
          }
          this.seconds = n--
        }, 1000)
      },
      resend () {
        this.reSendFlg = false
        this.seconds = TOTALSECONDS
        this.startTimout()
      },
      register (e) {
        e.preventDefault()
        this.regSucess = true
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

  .register {
    padding-top: 1rem;
    padding-left: .6rem;
    padding-right: .6rem;
    background-color: #fff;
  }

  .logo {
    text-align: center;
    position: relative;

    img {
      width: 2.35rem;
      margin-bottom: 1.24rem;
    }

    p {
      position: absolute;
      width: 100%;
      top: .8rem;
      font-size: @font-size-medium;
      color: @font-color-gray;

      a {
        color: @font-color-red;
        text-decoration: underline;
      }
    }
  }

  .link {
    text-align: center;
    margin-bottom: 2.1rem;
  }

  .bottom {
    margin-left: -.6rem;
    margin-right: -.6rem;
    height: 1.65rem;
    background-image: url('../../../images/puyitou/wave.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  form {
    label {
      font-size: @font-size-medium;
    }

    .inputbox {
      padding-top: .3rem;
      padding-bottom: .3rem;
      margin-bottom: .45rem;
      border-bottom: 1px solid @line-color;
      position: relative;

      input {
        font-size: .45rem;
        border: 0;
        outline: none;
        width: 80%;
      }

      .clearPhone, .clearOwnerPhone {
        position: absolute;
        right: 0;
        top: 37%;
        width: .3rem;
      }

      .clearSmsCode {
        position: absolute;
        right: 19%;
        top: 37%;
        width: .3rem;
      }

      .timeout {
        position: absolute;
        right: 0;
        top: 37%;
        color: @font-color-red;
      }

      .reSend {
        position: absolute;
        right: 0;
        top: 31%;
        color: @font-color-red;
      }

      input[name="code"] {
        width: 50%;
      }

      .clearImgCode {
        position: absolute;
        right: 30%;
        top: 37%;
        width: .3rem;
      }

      .clearPwd {
        position: absolute;
        right: 10%;
        top: 37%;
        width: .3rem;
      }

      .imgCode {
        position: absolute;
        top: 30%;
        right: 0;
        width: 1.6rem;
      }

      .eye-close,
      .eye-open {
        position: absolute;
        right: 0;
        top: 40%;
        width: .4rem;
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
      margin-top: .9rem;
      margin-bottom: .3rem;
    }

    .nextBtn.active {
      background-color: @bg-red;
    }

    .regBtn {
      border: 0;
      width: 100%;
      background-color: #c4c4c4;
      color: #fff;
      font-size: @font-size-medium;
      padding-top: .3rem;
      padding-bottom: .3rem;
      border-radius: 5px;
      margin-top: .7rem;
      margin-bottom: .95rem;
    }

    .regBtn.active {
      background-color: @bg-red;
    }
  }

  .reg-success {
    padding-top: 1rem;
    text-align: center;

    img {
      width: 1.35rem;
    }

    p {
      font-size: @font-size-bigger;
      margin-bottom: 1.5rem;
    }

    .btn {
      width: 4.2rem;
      font-size: @font-size-big;
      padding-top: .15rem;
      padding-bottom: .15rem;
      display: inline-block;
      border: 1px solid #e84642;
      border-radius: 5px;
      margin-bottom: .5rem;
    }

    .btn.red {
      color: @font-color-white;
      background-color: #e84642;
    }

    .btn.white {
      color: #e84642;
      margin-bottom: 3.4rem;
    }
  }
</style>
