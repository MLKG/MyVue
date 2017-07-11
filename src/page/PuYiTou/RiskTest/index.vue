<template>
  <div>
    <div class="header">
      <div class="no">2</div>
      <div class="text">无固定职业大大方方地方，大方地辅导辅导费爽肤水地方第三方，无固定职业大大方方地方，</div>
    </div>
    <div class="item">
      <div class="no">A.</div>
      <div class="text">无固定职业</div>
      <img class="select" src="../../../images/puyitou/select-icon.png">
    </div>
    <div class="item">
      <div class="no">B.</div>
      <div class="text">无固定职业大大方方地方，大方地辅导辅导费爽肤水地方第三方，的沙发凡豆辅导费发</div>
      <img class="select" src="../../../images/puyitou/select-icon.png">
    </div>
    <div class="bottom">
      <div class="prev">
        <a href="" class="btn">上一题</a>
      </div>
      <div class="page">
        <div class="line"><span class="current-no">12</span><span class="next-no">13</span></div>
      </div>
      <div class="next">
        <a href="" class="btn">下一题</a>
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
    background-image: url("../../../images/puyitou/risk-header.png");
    background-size: 100% 100%;
    min-height: 2.5rem;
    padding: .35rem .2rem;
    display: table;
    width: 100%;
    font-size: @font-size-medium;
    color: #fce6e6;

    .no {
      display: table-cell;
      vertical-align: middle;
      font-size: @font-size-max;
      font-style: italic;
      position: relative;
      width: 10%;
    }

    .text {
      display: table-cell;
      vertical-align: middle;
    }
  }

  .item {
    font-size: @font-size-medium;
    background-color: @bg-white;
    padding-top: .6rem;
    padding-bottom: .6rem;
    padding-left: .25rem;
    padding-right: 1.35rem;
    border-bottom: 1px solid @line-color;
    position: relative;
    display: table;
    width: 100%;

    .select {
      position: absolute;
      width: .42rem;
      right: .3rem;
      top: 37%;
    }

    .no {
      width: 7%;
      display: table-cell;
    }

    .text {
      display: table-cell;
      width: 93%;
    }
  }

  .bottom {
    margin-top: .9rem;
    display: table;
    width: 100%;
  }

  .prev, .page, .next {
    display: table-cell;
    text-align: center;
  }

  .prev, .next {
    width: 30%
  }

  .btn {
    font-size: @font-size-medium;
    color: @font-color-blue;
    border: 1px solid @font-color-blue;
    padding: .15rem .3rem;
    border-radius: .6rem;
  }

  .page {
    text-align: center;

    .line {
      position: relative;
      display: inline-block;
      height: 2px;
      width: .9rem;
      background-color: @bg-black;
      transform: rotate(-45deg);

      .current-no {
        position: absolute;
        transform: rotate(45deg);
        top: -.65rem;
        left: .05rem;
        font-size: @font-size-bigger;
        color: @font-color-red;
      }

      .next-no {
        position: absolute;
        top: .1rem;
        left: .3rem;
        font-size: @font-size-medium;
        transform: rotate(45deg);
      }
    }
  }
</style>
