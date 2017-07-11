<template>
  <div>
    <div class="header">
      <div class="box">
        <div class="banlance">
          <img src="../../../images/puyitou/balance-icon.png">
          <p>账户余额</p>
          <p>21.32元</p>
        </div>
        <div class="arrow">
          <img src="../../../images/puyitou/arrow.png">
        </div>
        <div class="bank">
          <div class="round" name="ICBC"></div>
          <p>工商银行</p>
          <p>(尾号0906)</p>
        </div>
      </div>
    </div>
    <form>
      <div class="inputbox">
        <label for="withdrawValInput">提现金额</label>
        <div class="box">
          <span>￥</span><input ref="withdrawValInput" type="number" id="withdrawValInput" name="withdrawValInput" v-model="withdrawVal">
          <img src="../../../images/puyitou/X.png" class="clearVal" v-show="withdrawVal" @click="clearwithdrawVal()">
        </div>
        <div class="line"></div>
        <div class="bottom">
          <span>手续费 ￥0.00</span><span class="right">实际到账￥0.00</span>
        </div>
      </div>
      <p class="msg">本月还有 <span class="red">1次</span> 免费提现次数</p>
      <button class="btn" :class="{active: btnIsActive}" :disabled="!btnIsActive">提 现</button>
    </form>
    <div class="modal hide">
      <div class="box">
        <p class="title">请输入交易密码</p>
        <div class="center">
          <div class="input-border">
            <input type="password" name="" v-show="!showPwd" v-model="password">
            <input type="text" name="" v-show="showPwd" v-model="password">
            <img src="../../../images/puyitou/eye-close.png" class="eye-close" @click="togglePwd()" v-show="!showPwd">
            <img src="../../../images/puyitou/eye-open.png" class="eye-open" @click="togglePwd()" v-show="showPwd">
          </div>
          <a href="#" class="forget">忘记交易密码？</a>
        </div>
        <div class="btns">
          <a href="#" class="cancel">取消</a>
          <a href="#" class="ok">确定</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        withdrawVal: '',
        showPwd: false,
        password: ''
      }
    },
    computed: {
      btnIsActive () {
        return this.withdrawVal
      }
    },
    methods: {
      clearwithdrawVal () {
        this.withdrawVal = ''
        this.$refs.withdrawValInput.focus()
      },
      togglePwd () {
        this.showPwd = !this.showPwd
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
      width: 5.44rem;
      text-align: center;
      z-index: 1000;
      margin-left: auto;
      margin-right: auto;
      padding-top: .25rem;
      border-radius: 10px;
      margin-top: 3.7rem;
    }

    .title {
      font-size: @font-size-medium;
      margin-bottom: .5rem;
      font-weight: bold;
    }

    .center {
      padding-left: .35rem;
      padding-right: .35rem;
      padding-bottom: .4rem;
      text-align: right;
      border-bottom: 1px solid @line-color;
    }

    .input-border {
      padding: .1rem;
      border: 1px solid @line-color;
      margin-left: auto;
      margin-right: auto;
      border-radius: 5px;
      margin-bottom: .16rem;
      text-align: left;

      input {
        width: 80%;
        font-size: @font-size-medium;
        border: 0;
      }

      .eye-close, .eye-open {
        width: .37rem;
        margin-left: 8%;
      }
    }

    .forget {
      color: @font-color-blue;
    }

    .btns {
      display: flex;

      a {
        flex: 1;
        padding-top: .2rem;
        padding-bottom: .2rem;
      }

      a:first-child {
        border-right: 1px solid @line-color;
      }

      a.ok {
        color: @font-color-blue;
      }
    }
  }

  .header {
    background-color: @bg-red;
    padding-top: .6rem;
    padding-left: .7rem;
    padding-right: .7rem;
    padding-bottom: .4rem;
    color: @font-color-white;
    font-size: @font-size-medium;
    margin-bottom: .3rem;

    .box {
      display: flex;
    }

    .bank, .arrow, .banlance {
      flex: 1;
      text-align: center;
    }

    .round {
      width: .9rem;
      height: .9rem;
      border-radius: .45rem;
      background-color: @bg-white;
      display: inline-block;
    }

    .round[name="ICBC"] {
      background-image: url('../../../images/bankIcon/ICBC.png');
      background-repeat: no-repeat;
      background-size: 100%;
    }

    .banlance img{
      width: .9rem;
    }

    .arrow img {
      width: 1.5rem;
      position: relative;
      top: 17%;
    }

    p {
      margin: 2px;
    }
  }

  .inputbox {
    background-color: @bg-white;
    padding: .25rem;
    padding-bottom: 0;
    font-size: @font-size-medium;
    margin-bottom: .3rem;

    .box {
      font-size: @font-size-max;
      margin-top: .5rem;
      position: relative;

      input {
        font-size: @font-size-max;
        width: 80%;
        border: 0;
      }

      .clearVal {
        position: absolute;
        right: 0;
        top: 35%;
        width: .3rem;
      }
    }

    .line {
      height: 1px;
      background-color: @line-color;
      margin-right: -.25rem;
      margin-left: .8rem;
      margin-top: .2rem;
    }

    .bottom {
      padding-top: .2rem;
      padding-bottom: .2rem;
      padding-left: .8rem;

      .right {
        float: right;
      }
    }
  }

  .btn {
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

  .btn.active {
    background-color: @bg-red;
  }

  .msg {
    position: fixed;
    bottom: 1.3rem;
    width: 100%;
    text-align: center;

    .red {
      color: @font-color-red;
    }
  }
</style>
