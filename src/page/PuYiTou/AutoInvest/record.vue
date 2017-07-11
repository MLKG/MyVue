<template>
  <div class="list">
    <!-- <div class="item">
      <div class="left">
        <p class="title">广金定活通002期</p>
        <p>2017-04-15 12:33:00</p>
      </div>
      <div class="right">
        <p>25,000.00元</p>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <p class="title">广金定活通002期</p>
        <p>2017-04-15 12:33:00</p>
      </div>
      <div class="right">
        <p>25,000.00元</p>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <p class="title">广金定活通002期</p>
        <p>2017-04-15 12:33:00</p>
      </div>
      <div class="right">
        <p>25,000.00元</p>
      </div>
    </div> -->
    <div class="icon">
      <img src="../../../images/puyitou/empty-icon.png">
      <p>暂无自动投资记录</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import "../../../style/variables";

  * {
    box-sizing: border-box;
  }

  .icon {
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
    top: 1.8rem;

    img {
      width: 2.9rem;
    }

    p {
      margin-top: .2rem;
    }
  }

  .list {
    padding-left: .25rem;
    position: relative;
    background-color: @bg-white;
  }

  .item {
    padding: .25rem .25rem .25rem 0;
    display: flex;
    border-bottom: 1px solid @line-color;
  }

  .left {
    flex-grow: 1;
  }

  .right {
    flex-grow: 1;
    align-self: center;
    text-align: right;
    font-size: @font-size-medium;
  }

  .title {
    font-size: @font-size-medium;
  }
</style>
