<template>
  <div>
    <div class="header">选择投资金额：</div>
    <div class="all-amount">
      <span class="tag">推 荐</span>
      <img class="icon" src="../../../images/puyitou/arrow-icon.png">
      <p class="title">余额全投</p>
      <p>现有账户余额： <span class="red">25,000.00</span> 元</p>
      <p>实际投资时账户余额可能会发生变化</p>
    </div>
    <div class="reserve-amount">
      <div class="bar">设置保留金额 <span class="comment">(为0则为账户余额全投)</span><img class="icon" src="../../../images/puyitou/arrow-down.png"></div>
    </div>
    <div class="reserve-detail">
      <div class="input-amount">
        <input type="number"><span>元</span><img class="del" src="../../../images/puyitou/X.png">
        <div class="line"></div>
      </div>
      <div class="btn">
        <a href="">下一步</a>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import "../../../style/variables";

  * {
    box-sizing: border-box;
  }

  .header {
    padding: .3rem .25rem;
    font-size: @font-size-medium;
  }

  .all-amount {
    background-color: @bg-white;
    padding: .3rem .25rem;
    font-size: @font-size-medium;
    color: @font-color-gray;
    position: relative;
    margin-bottom: .3rem;

    .title {
      font-size: @font-size-larger;
      color: @font-color-base;
      margin-bottom: .2rem;
      margin-top: 0;
    }

    .red {
      color: @font-color-red;
    }

    .tag {
      position: absolute;
      right: 0;
      top: 0;
      color: @font-color-white;
      background-color: @bg-red;
      padding: .05rem .4rem;
      border-bottom-left-radius: 10px;
    }

    .icon {
      position: absolute;
      width: .2rem;
      right: .25rem;
      top: 50%;
    }
  }

  .reserve-amount {
    background-color: @bg-white;

    .bar {
      padding: .3rem .25rem;
      font-size: @font-size-medium;
      position: relative;

      .comment {
        font-size: @font-size-base;
        color: @font-color-gray;
      }

      img {
        position: absolute;
        width: .32rem;
        right: .25rem;
        top: 46%;
      }
    }
  }

  .reserve-detail {
    background-color: @bg-white;

    .input-amount {
      padding: .3rem .25rem;
      position: relative;

      input {
        font-size: @font-size-medium;
        border: 0;
        width: 90%;
      }

      .del {
        width: .25rem;
        position: absolute;
        right: .25rem;
        top: 32%;
      }

      .line {
        height: 1px;
        background-color: @line-color;
        margin-top: .17rem;
      }
    }

    .btn {
      padding: .3rem .25rem;
      width: 100%;

      a {
        background-color: @bg-red;
        color: @font-color-white;
        padding-top: .2rem;
        padding-bottom: .2rem;
        width: 100%;
        display: inline-block;
        font-size: @font-size-medium;
        border-radius: 5px;
      }
    }
  }
</style>
