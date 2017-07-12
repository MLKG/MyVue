<template>
  <div>
    <div class="login_background"></div>
    <div class="login">
      <div class="login_logo"><img src="../../../images/dalin/logo.png"></div>
      <form @submit.prevent="loginInClick()">
        <label for="phoneNo">手机号码</label><span class="msg red" v-show="errObj.phoneNotValid">请输入正确的手机号码</span>
        <div class="inputbox">
          <input ref="phoneNo" type="text" v-model="phoneNo" name="phoneNo" id="phoneNo" @blur="checkPhoneNo()">
          <img src="../../../images/dalin/X.png" class="clearPhone" @click="clearPhoneNo()" v-show="phoneNo">
        </div>
        <label for="pwd">登录密码</label><span class="msg blue hide">请输入登录密码</span>
        <div class="inputbox">
          <input ref="pwdInputHide" type="password" name="pwd" id="pwd" v-show="!showPwd" v-model="password">
          <input ref="pwdInputShow" type="text" name="pwd" id="pwd" v-show="showPwd" v-model="password">
          <img src="../../../images/dalin/eye-close.png" class="eye-close" @click="togglePwd()" v-show="!showPwd">
          <img src="../../../images/dalin/eye-open.png" class="eye-open" @click="togglePwd()" v-show="showPwd">
          <img src="../../../images/dalin/X.png" class="clearPwd" @click="clearPwd()" v-show="password">
        </div>
        <button type="submit" class="loginBtn" :disabled="!isDisabled">登&nbsp;录</button>
      </form>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        phoneNo: '',
        password: '',
        showPwd: false,
        errObj: {
          phoneNotValid: false
        }
      }
    },
    computed: {
      isDisabled () {
        return this._validation.isPhone(this.phoneNo) && this.password
      }
    },
    methods: {
      ...mapActions({
        showMsg: 'showMsg',
        login: 'dalin/user/login',
        getUserInfo: 'dalin/user/getUserInfo'
        // loginOut: 'dalin/user/loginOut'
      }),
      clearPhoneNo () {
        this.phoneNo = ''
        this.errObj.phoneNotValid = false
        this.$refs.phoneNo.focus()
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
        if (this._validation.isPhone(this.phoneNo)) {
          this.errObj.phoneNotValid = false
        } else {
          this.errObj.phoneNotValid = true
        }
      },
      loginInClick (e) {
        let o = {name: this.phoneNo, password: this.password}
        this.login(o).then(() => {
          this.getUserInfo()
          this.$router.push({path: '/index'})
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

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
    padding: 0.6rem;
    background-color: #fff;

    &_background {
      background-color: @bg-white;
      position: absolute;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
      z-index: -1;
      margin: 0 auto;
      max-width: 1080px;
    }

    &_logo {
      text-align: center;

      img {
        width: 2.35rem;
        margin-bottom: 0.6rem;
      }
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

        .clearPhone {
          position: absolute;
          right: 0;
          width: .3rem;
          padding: 0.2rem;
          top: 0.2rem;
        }

        .clearPwd {
          position: absolute;
          right: 0.8rem;
          top: 0.2rem;
          width: .3rem;
          padding: 0.2rem;
        }

        input[name="code"] {
          width: 50%;
        }

        .eye-close,
        .eye-open {
          position: absolute;
          right: 0;
          top: 0.25rem;
          width: .4rem;
          padding: 0.2rem;
        }
      }

      .loginBtn {
        border: 0;
        width: 100%;
        background-color: @bg-red;
        color: @font-color-white;
        font-size: @font-size-medium;
        padding-top: .3rem;
        padding-bottom: .3rem;
        border-radius: 5px;
        margin-bottom: .3rem;
        margin-top: 0.5rem;

        &:disabled {
          background-color: @bg-gray;
        }
      }
    }

    .bottom {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1.43rem;
      background-image: url('../../../images/dalin/wave.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
</style>
