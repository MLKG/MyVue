<template>
  <div class="login">
    <div class="logo"><img src="../../../images/puyitou/logo.png"></div>
    <form>
      <label for="phoneNoView">手机号码</label><span class="msg red" v-show="errObj.phoneNotValid">请输入正确的手机号码</span>
      <div class="inputbox">
        <input ref="phoneNoView" type="text" v-model="phoneNoView" name="phoneNoView" id="phoneNoView" @keyup="formatPhone($event.target.value)" @blur="checkPhoneNo()">
        <img src="../../../images/puyitou/X.png" class="clearPhone" @click="clearPhoneNo()" v-show="phoneNo">
      </div>
      <label for="pwd">登录密码</label><span class="msg blue hide">请输入登录密码</span>
      <div class="inputbox">
        <input ref="pwdInputHide" type="password" name="pwd" id="pwd" v-show="!showPwd" v-model="password">
        <input ref="pwdInputShow" type="text" name="pwd" id="pwd" v-show="showPwd" v-model="password">
        <img src="../../../images/puyitou/eye-close.png" class="eye-close" @click="togglePwd()" v-show="!showPwd">
        <img src="../../../images/puyitou/eye-open.png" class="eye-open" @click="togglePwd()" v-show="showPwd">
        <img src="../../../images/puyitou/X.png" class="clearPwd" @click="clearPwd()" v-show="password">
      </div>
      <div v-show="showImgCode">
        <label for="imgCode">图形验证码</label><span class="msg blue hide">请输入图形验证码</span>
        <div class="inputbox">
          <input type="text" name="imgCode" id="imgCode" v-model="imgCode">
          <img src="../../../images/puyitou/X.png" class="clearCode" v-show="imgCode" @click="clearCode()">
          <img src="../../../images/puyitou/code.png" class="imgCode">
        </div>
      </div>
      <div class="checkboxBox">
        <input type="checkbox" name="wechatLogin" id="wechatLogin" v-model="wxlogin">
        <div class="point" :class="{red: wxlogin}"><div class="inner"></div></div>
        <label for="wechatLogin" class="wxlogin">下次开启微信免登陆</label>
      </div>
      <button class="loginBtn" :class="{active: btnIsActive}" :disabled="!btnIsActive" @click="login($event)">登&nbsp;录</button>
      <input type="text" name="phoneNo" class="hide" v-model="phoneNo">
    </form>
    <div class="linkBox">
      <router-link to="/register" class="link left">快速注册</router-link><router-link to="/forgetPwd" class="link">忘记密码</router-link>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        phoneNoView: '',
        phoneNo: '',
        password: '',
        imgCode: '',
        showPwd: false,
        pwdType: 'password',
        wxlogin: true,
        showImgCode: false,
        errObj: {
          phoneNotValid: false
        }
      }
    },
    computed: {
      btnIsActive () {
        return this.phoneIsValid && this.password
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
        this.errObj.phoneNotValid = false
        this.$refs.phoneNoView.focus()
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
      clearCode () {
        this.imgCode = ''
      },
      checkPhoneNo () {
        if (!this.phoneIsValid) {
          this.errObj.phoneNotValid = true
        } else {
          this.errObj.phoneNotValid = false
        }
      },
      login (e) {
        e.preventDefault()
      }
    },
    mounted () {

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

  .login {
    padding-top: 1rem;
    padding-left: .6rem;
    padding-right: .6rem;
    background-color: #fff;
  }

  .logo {
    text-align: center;

    img {
      width: 2.35rem;
      margin-bottom: 1.24rem;
    }
  }

  form {
    label {
      font-size: @font-size-medium;
    }

    .wxlogin {
      color: @font-color-gray;
      font-size: @font-size-base;
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

      .clearPhone {
        position: absolute;
        right: 0;
        top: 37%;
        width: .3rem;
      }

      .clearPwd {
        position: absolute;
        right: 10%;
        top: 37%;
        width: .3rem;
      }

      input[name="code"] {
        width: 50%;
      }

      .clearCode {
        position: absolute;
        right: 30%;
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

    .checkboxBox {
      text-align: center;
      margin-bottom: .6rem;

      input {
        visibility: hidden;
      }

      .point {
        position: relative;
        top: 2px;
        display: inline-block;
        border: 1px solid #333;
        border-radius: 3px;
        padding: .03rem;
        width: .28rem;
        height: .28rem;

        .inner {
          height: 100%;
          border-radius: 2px;
        }
      }

      .point.red {
        .inner {
          background-color: @bg-red;
        }
      }
    }

    .loginBtn {
      border: 0;
      width: 100%;
      background-color: #c4c4c4;
      color: #fff;
      font-size: @font-size-medium;
      padding-top: .3rem;
      padding-bottom: .3rem;
      border-radius: 5px;
      margin-bottom: .3rem;
    }

    .loginBtn.active {
      background-color: @bg-red;
    }
  }

  .linkBox {
    text-align: center;

    .link {
      padding-left: .3rem;
      padding-right: .3rem;
    }

    .link.left {
      border-right: 2px solid @line-color;
    }
  }

  .bottom {
    margin-top: 2rem;
    margin-left: -.6rem;
    margin-right: -.6rem;
    height: 1.65rem;
    background-image: url('../../../images/puyitou/wave.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
</style>
