<template>
  <div class="result">
    <img src="../../../images/puyitou/risk-result-icon.png">
    <p class="risk-result">评测结果：您是稳健型投资者</p>
    <a href="" class="btn">去投资</a>
    <p class="blue">我要重测</p>
  </div>
</template>

<style lang="less" scoped>
  @import "../../../style/variables";

  * {
    box-sizing: border-box;
  }

  .result {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: @bg-white;
    padding-top: 1.2rem;
    text-align: center;

    img {
      width: 1.9rem;
      margin-bottom: .6rem;
    }

    .risk-result {
      font-size: @font-size-medium;
      margin-bottom: 1.13rem;
    }

    .btn {
      font-size: @font-size-medium;
      color: @font-color-white;
      background-color: @bg-red;
      padding: .3rem 2.4rem;
      border-radius: 5px;
    }

    .blue {
      margin-top: .5rem;
      color: @font-color-blue;
    }
  }
</style>
