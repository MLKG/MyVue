<template>
  <div>
    <div class="header">
      <div class="box">
        <div class="bank">
          <div class="round" name="ICBC">
            <!-- <div class="bank-icon"></div> -->
          </div>
          <p>工商银行</p>
          <p>(尾号0906)</p>
        </div>
        <div class="arrow">
          <img src="../../../images/puyitou/arrow.png">
        </div>
        <div class="banlance">
          <img src="../../../images/puyitou/balance-icon.png">
          <p>账户余额</p>
          <p>21.32元</p>
        </div>
      </div>
    </div>
    <form>
      <div class="inputbox">
        <label for="topUpValInput">充值金额</label>
        <div class="box">
          <span>￥</span><input ref="topUpValInput" type="number" id="topUpValInput" name="topUpValInput" v-model="topUpVal">
          <img src="../../../images/puyitou/X.png" class="clearVal" v-show="topUpVal" @click="clearTopupVal()">
        </div>
        <div class="line"></div>
        <div class="bottom">
          <span>手续费 ￥0.00</span><span class="right">实际到账￥0.00</span>
        </div>
      </div>
      <div class="topup-channel">
        <div class="title">请选择充值渠道</div>
        <div class="list">
          <label for="lianlian">
            <img v-if="channel === 'lianlian'" class="channel-icon" src="../../../images/puyitou/lian-lian.png">
            <img v-else class="channel-icon" src="../../../images/puyitou/lian-lian_unavailabe.png">
            <p class="desc">单笔50万，单月200万，3笔/天，5笔/天</p>
            <input type="radio" name="channelName" id="lianlian" value="lianlian" v-model="channel">
            <img class="select-icon" src="../../../images/puyitou/select-icon.png" v-show="channel === 'lianlian'">
          </label>
          <div class="gap"></div>
          <label for="caifutong">
            <img v-if="channel === 'caifutong'" class="channel-icon" src="../../../images/puyitou/cai-fu-tong.png">
            <img v-else class="channel-icon" src="../../../images/puyitou/cai-fu-tong_unavailable.png">
            <p class="desc">单笔50万，单月200万，3笔/天，5笔/天</p>
            <input type="radio" name="channelName" id="caifutong" value="caifutong" v-model="channel">
            <img class="select-icon" src="../../../images/puyitou/select-icon.png" v-show="channel === 'caifutong'">
          </label>
          <div class="gap"></div>
          <label for="baofu">
            <img v-if="channel === 'baofu'" class="channel-icon" src="../../../images/puyitou/bao-fu.png">
            <img v-else class="channel-icon" src="../../../images/puyitou/bao-fu_unavailable.png">
            <p class="desc">单笔50万，单月200万，3笔/天，5笔/天</p>
            <input type="radio" name="channelName" id="baofu" value="baofu" v-model="channel">
            <img class="select-icon" src="../../../images/puyitou/select-icon.png" v-show="channel === 'baofu'">
          </label>
        </div>
      </div>
      <button class="btn" :class="{active: btnIsActive}" :disabled="!btnIsActive">充 值</button>
    </form>
    <div class="modal">
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
        topUpVal: '',
        channel: 'lianlian',
        showPwd: false,
        password: ''
      }
    },
    computed: {
      btnIsActive () {
        return this.topUpVal
      }
    },
    methods: {
      clearTopupVal () {
        this.topUpVal = ''
        this.$refs.topUpValInput.focus()
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

  .topup-channel {
    background-color: @bg-white;

    .title {
      font-size: @font-size-medium;
      padding: .25rem;
      border-bottom: 1px solid @line-color;
    }

    .list {
      padding: .25rem;

      .gap {
        height: 1px;
        background-color: @line-color;
        margin-right: -.25rem;
        margin-top: .25rem;
        margin-bottom: .25rem;
      }
    }

    label {
      display: inline-block;
      width: 100%;
      position: relative;

      .desc {
        display: inline-block;
        width: 62%;
        margin-left: .4rem;
        color: @font-color-gray;
      }

      input {
        visibility: hidden;
      }

      .select-icon {
        position: absolute;
        right: 0;
        top: 30%;
        width: .35rem;
      }
    }

    .channel-icon {
      width: 1.65rem;
      height: .4rem;
      position: relative;
      top: -7px;
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
    margin-top: 1.3rem;
  }

  .btn.active {
    background-color: @bg-red;
  }
</style>
