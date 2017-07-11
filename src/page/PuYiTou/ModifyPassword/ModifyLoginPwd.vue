<template>
  <section>
    <div class="navs">
      <router-link class="nav current" to="/mypyt/modifyloginpwd">修改登陆密码</router-link>
      <router-link class="nav" to="/mypyt/modifytradepwdstep1">修改交易密码</router-link>
    </div>
    <div class="c-tip">
      为了您的账号安全 请定期更换登陆 <br> 密码，并确保交易密码与登陆密码不同
    </div>
    <form class="l-form">
      <div class="c-form">
        <label for="loginPwd">原登陆密码</label><span class="font-color-gray">请输入当前登录密码</span>
        <div class="inputbox">
          <input type="password" name="loginPwd" id="" v-model="loginPwd">
          <img src="../../../images/puyitou/X.png" class="clearPwd" @click="loginPwd = ''" v-show="loginPwd">
        </div>
      </div>
      <div class="c-form">
        <label for="loginPwd">新登陆密码</label><span class="font-color-gray">密码为6-16位，须为字母加数字或符号</span>
        <div class="inputbox">
          <input type="password" name="loginPwd" id="" v-model="loginPwd">
          <img src="../../../images/puyitou/X.png" class="clearPwd" @click="loginPwd = ''" v-show="loginPwd">
        </div>
        <label for="loginPwd">再次确认</label><span class="font-color-gray">再次输入新的登录密码</span>
        <div class="inputbox">
          <input type="password" name="loginPwd" id="" v-model="loginPwd">
          <img src="../../../images/puyitou/X.png" class="clearPwd" @click="loginPwd = ''" v-show="loginPwd">
        </div>
      </div>
      <!-- <label for="tradingPwd">交易密码</label><span class="font-color-gray">6-16位，须为字母加数字或符号</span>
      <div class="inputbox">
        <input type="password" name="tradingPwd" id="tradingPwd" v-model="tradingPwd">
        <img src="../../../images/puyitou/X.png" class="clearPwd" @click="tradingPwd = ''" v-show="tradingPwd">
      </div>
      <label for="tradingPwdConfirm">再次确认</label><span class="font-color-gray">再次输入交易密码</span>
      <div class="inputbox">
        <input type="password" name="tradingPwdConfirm" id="tradingPwdConfirm" v-model="tradingPwdConfirm">
        <img src="../../../images/puyitou/X.png" class="clearPwd" @click="tradingPwdConfirm = ''" v-show="tradingPwdConfirm">
      </div> -->
      <button type="button" class="btn-bottom" :class="{'btn-bottom_red': isConfirmed, 'btn-bottom_gray': !isConfirmed}">确 认</button>
    </form>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        loginPwd: '',
        isConfirmed: false
      }
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
    }
  }
</style>
