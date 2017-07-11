<template>
  <section>
    <div class="navs">
      <router-link class="nav" to="/mypyt/modifyloginpwd">修改登陆密码</router-link>
      <router-link class="nav current" to="/mypyt/modifytradepwdstep1">修改交易密码</router-link>
    </div>
    <div class="c-tip">
      为了您的账号安全 请定期更换交易 <br> 密码，并确保交易密码与登陆密码不同
    </div>
    <form class="l-form">
      <div class="c-form">
        <label for="tradePwd">原交易密码</label><span class="font-color-gray">请输入当前交易密码</span>
        <div class="inputbox">
          <input ref="pwdInputHide" type="password" name="tradePwd" id="tradePwd" v-model="tradePwd" v-show="!showPwd">
          <input ref="pwdInputShow" type="text" name="tradePwd" id="tradePwd" v-show="showPwd" v-model="loginPwd">
          <img src="../../../images/puyitou/eye-close.png" class="eye-close" @click="showPwd = !showPwd" v-show="!showPwd">
          <img src="../../../images/puyitou/eye-open.png" class="eye-open" @click="showPwd = !showPwd" v-show="showPwd">
        </div>
      </div>
      <router-link to="/mypyt/modifytradepwdstep2" class="btn-bottom" :class="{'btn-bottom_red': isConfirmed, 'btn-bottom_gray': !isConfirmed}">下一步</router-link>
    </form>
    <div class="text-center">
      <router-link to="/mypyt/findTradepwd" class="font-color-blue">忘记原交易密码</router-link>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        showPwd: false,
        tradePwd: '',
        isConfirmed: true
      }
    },
    methods: {
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

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

  .c-tip {
    text-align: center;
    .font-color-gray;
    margin: .6rem 0;
  }

  .c-form {
    background: #fff;
    padding: .3rem .3rem 0;

    label {
      font-size: @font-size-medium;
      margin-right: .2rem;
    }

    .inputbox {
      padding-top: .3rem;
      padding-bottom: .3rem;
      margin-bottom: .4rem;
      border-bottom: 1px solid @line-color;
      position: relative;

      &:last-child {
        border-bottom: none;
      }

      input {
        font-size: .45rem;
        border: 0;
        outline: none;
        width: 80%;
      }

      .clearPwd {
        position: absolute;
        right: 0;
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
