<template>
  <section>
    <div class="gap"></div>
    <form>
      <div class="c-form">
        <label for="idCardNo">身份证号</label><span class="font-color-red">身份证号格式错误</span>
        <div class="inputbox">
          <input ref="pwdInputShow" type="text" name="idCardNo" id="idCardNo" v-model="idCardNo">
          <img src="../../../images/puyitou/X.png" class="clearPwd" @click="idCardNo = ''">
        </div>
      </div>
      <div class="c-form">
        <label for="phonenNo">手机号码</label><span class="font-color-gray">请输入当前交易密码</span>
        <div class="inputbox">
          <input ref="pwdInputShow" type="text" name="phonenNo" id="phonenNo" v-model="phonenNo">
        </div>
        <label for="smsCode">短信验证</label><span class="font-color-gray">请输入手机验证码</span>
        <div class="inputbox">
          <input ref="pwdInputShow" type="text" name="smsCode" id="smsCode" v-model="smsCode">
          <span class="timeout" v-show="isSend">{{ seconds }}s</span>
          <span class="reSend" v-show="!isSend" @click="sendSmsCode()">获取验证码</span>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        idCardNo: '',
        phonenNo: '',
        smsCode: '',
        isSend: false,
        seconds: 60
      }
    },
    methods: {
      sendSmsCode () {
        this.isSend = true
        this.seconds = 60
        this.startTimout()
      },
      startTimout () {
        var n = 60 - 1
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

      input[name="smsCode"] {
        width: 60%;
      }

      input[name="imgCode"] {
        width: 70%;
      }

      .clearPwd {
        position: absolute;
        right: 0;
        top: 37%;
        width: .3rem;
      }

      .reSend {
        position: absolute;
        right: 0;
        top: 29%;
        color: @font-color-blue;
        border: 1px solid @font-color-blue;
        border-radius: 3px;
        padding: .1rem;
      }

      .timeout {
        position: absolute;
        right: 0;
        top: 34%;
        color: @font-color-blue;
      }
    }
  }

</style>
