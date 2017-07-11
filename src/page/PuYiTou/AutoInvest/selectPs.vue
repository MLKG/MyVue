<template>
  <div class="container">
    <p class="title">点击选择投资区间 <span>（可多选）</span></p>
    <div class="flex-box">
      <div class="box active">
        <div class="item">
          <p class="per">6.8%</p>
          <p class="day">5万起投</p>
        </div>
      </div>
      <div class="box">
        <div class="item">
          <p class="per">7.0%</p>
          <p class="day">30万起投</p>
        </div>
      </div>
      <div class="box">
        <div class="item">
          <p class="per">7.3%</p>
          <p class="day">50万起投</p>
        </div>
      </div>
    </div>
    <p class="link"><a href="">《自动投资协议》</a></p>
    <a href="" class="btn">同意协议且开启自动投资</a>
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
        showPwd: false,
        password: ''
      }
    },
    methods: {
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

  .container {
    padding: .3rem .25rem;
    background-color: @bg-white;
  }

  .title {
    font-size: @font-size-medium;

    span {
      font-size: @font-size-base;
      color: @font-color-gray;
    }
  }

  .flex-box {
    display: flex;
    flex-wrap: wrap;
    margin-top: .6rem;
    margin-bottom: .6rem;

    .box {
      flex-basis: 33%;
      padding: .1rem;
    }

    .item {
      border: 1px solid @line-color;
      border-radius: 3px;
      padding: .1rem .2rem;

      .per {
        font-size: @font-size-large;
        margin-top: 3px;
      }

      .day {
        font-size: @font-size-base;
        color: @font-color-gray;
        margin-bottom: 3px;
      }
    }

    .box.active {
      .item {
        background-image: url(../../../images/puyitou/selected-box-2.png);
        background-size: 100% 100%;
        border: none;
      }
    }
  }

  .link {
    text-align: center;
    margin-top: .3rem;
    color: @font-color-gray;
  }

  .btn {
    font-size: @font-size-medium;
    color: @font-color-white;
    background-color: @bg-red;
    width: 100%;
    border-radius: 5px;
    padding-top: .2rem;
    padding-bottom: .2rem;
  }
</style>
