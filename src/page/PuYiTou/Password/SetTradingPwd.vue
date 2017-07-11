<template>
  <section>
    <div class="c-tip">
      为了您的资金安全 <br>交易密码与登陆密码不可一致
    </div>
    <form>
      <label for="tradingPwd">交易密码</label><span class="font-color-gray">6-16位，须为字母加数字或符号</span>
      <div class="inputbox">
        <input type="password" name="tradingPwd" id="tradingPwd" v-model="tradingPwd">
        <img src="../../../images/puyitou/X.png" class="clearPwd" @click="tradingPwd = ''" v-show="tradingPwd">
      </div>
      <label for="tradingPwdConfirm">再次确认</label><span class="font-color-gray">再次输入交易密码</span>
      <div class="inputbox">
        <input type="password" name="tradingPwdConfirm" id="tradingPwdConfirm" v-model="tradingPwdConfirm">
        <img src="../../../images/puyitou/X.png" class="clearPwd" @click="tradingPwdConfirm = ''" v-show="tradingPwdConfirm">
      </div>
      <button type="button" class="btn-bottom" :class="{'btn-bottom_red': isConfirmed, 'btn-bottom_gray': !isConfirmed}">提 交</button>
    </form>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        tradingPwd: '',
        tradingPwdConfirm: '',
        isConfirmed: false
      }
    },
    computed: {
      isConfirmed () {
        return this.tradingPwd && this.tradingPwdConfirm
      }
    }
  }

</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  .c-tip {
    text-align: center;
    .font-color-gray;
    margin: .6rem 0;
  }
  form {
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
