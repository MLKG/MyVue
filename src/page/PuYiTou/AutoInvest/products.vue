<template>
  <div>
    <div class="header">选择需要开启自动投资的产品：</div>
    <div class="box">
      <p><span class="title">定活通</span><span class="sub-title">(1,000或5,000起投)</span></p>
      <div class="container">
        <div class="left">
          <p class="number">5.6% - 6.4%</p>
          <p class="text">预期年化收益率</p>
        </div>
        <div class="center">
          <p>30天后可转让</p>
          <p>支持部分转让</p>
        </div>
        <div class="right">
          <a href="" class="btn">开通</a>
        </div>
      </div>
    </div>
    <div class="box">
      <p><span class="title">磐石理财</span><span class="sub-title">(5万起投)</span></p>
      <div class="container">
        <div class="left">
          <p class="number">6.8% - 7.3%</p>
          <p class="text">预期年化收益率</p>
        </div>
        <div class="center">
          <p>该产品不可转让</p>
          <p>不可变现</p>
        </div>
        <div class="right">
          <a href="" class="btn">开通</a>
        </div>
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

  .box {
    background-color: @bg-white;
    padding: .3rem .25rem;
    margin-bottom: .3rem;

    .title {
      font-size: @font-size-large;
    }

    .sub-title {
      margin-left: .2rem;
      color: @font-color-gray;
    }
  }

  .container {
    display: flex;

    .left {
      flex-basis: 45%;
      text-align: center;

      .number {
        color: @font-color-red;
        font-size: @font-size-big;
      }

      .text {
        color: @font-color-gray;
      }
    }

    .center {
      flex-basis: 35%;
      text-align: center;
      align-self: center;
      color: @font-color-gray;
      border-left: 1px solid @line-color;
    }

    .right {
      flex-basis: 20%;
      align-self: center;
      text-align: right;

      .btn {
        background-color: @bg-red;
        color: @font-color-white;
        padding: .1rem .25rem;
        font-size: @font-size-medium;
        border-radius: 5px;
      }
    }
  }
</style>
