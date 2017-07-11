<template>
  <div>
    <div class="header">
      <div class="avatar-box">
        <img class="avatar" src="../../../images/puyitou/avatar.png">
      </div>
      <div class="info">
        <p class="name">张小明 <img src="../../../images/puyitou/real.png"></p>
        <P class="level">安全等级：中</P>
      </div>
    </div>
    <div class="phone">
      <div class="icon cell"><img class="icon" src="../../../images/puyitou/phone-icon.png"></div>
      <div class="title cell">绑定手机</div>
      <div class="no cell">135****5896</div>
      <div class="arrow cell"><img src="../../../images/puyitou/arrow-icon.png"></div>
    </div>
    <div class="phone auto-invest">
      <div class="icon cell"><img class="icon" src="../../../images/puyitou/target-icon.png"></div>
      <div class="title cell">自动投资</div>
      <div class="no cell">未开启</div>
      <div class="arrow cell"><img src="../../../images/puyitou/arrow-icon.png"></div>
    </div>
    <div class="gap"><div class="inner"></div></div>
    <div class="phone">
      <div class="icon cell"><img class="icon" src="../../../images/puyitou/document-icon.png"></div>
      <div class="title cell">风险测评</div>
      <div class="no cell">平衡型</div>
      <div class="arrow cell"><img src="../../../images/puyitou/arrow-icon.png"></div>
    </div>
    <div class="red-btn">开启微信免登陆</div>
    <div class="red-btn">安全退出</div>
  </div>
</template>

<style lang="less" scoped>
  @import "../../../style/variables";

  * {
    box-sizing: border-box;
  }

  .header {
    background-color: @bg-white;
    padding: .5rem .25rem;
    display: flex;
    margin-bottom: .3rem;

    .avatar-box {
      flex-basis: 20%;

      .avatar {
        width: 1rem;
        height: 1rem;
      }
    }

    .info {
      flex-basis: 80%;

      .name {
        font-size: @font-size-large;
        margin-top: 0;
      }

      .level {
        color: @font-color-gray;
        margin-bottom: 0;
      }

      img {
        width: .35rem;
      }
    }
  }

  .phone {
    background-color: @bg-white;
    padding: .3rem .25rem;
    display: table;
    width: 100%;
    font-size: @font-size-medium;
    margin-bottom: .3rem;

    .cell {
      display: table-cell;
      vertical-align: middle;
    }

    .icon, .arrow {
      width: 7%;
    }

    .icon img {
      width: .3rem;
    }

    .title {
      line-height: 1;
    }

    .no {
      text-align: right;
      color: @font-color-gray;
    }

    .arrow {
      text-align: right;
      img {
        width: .2rem;
      }
    }
  }

  .auto-invest {
    margin-bottom: 0;
  }

  .gap {
    background-color: @bg-white;
    padding-left: .3rem;
    height: 1px;

    .inner {
      height: 1px;
      background-color: @line-color;
    }
  }

  .red-btn {
    background-color: @bg-white;
    font-size: @font-size-medium;
    padding-top: .35rem;
    padding-bottom: .35rem;
    color: @font-color-red;
    text-align: center;
    margin-bottom: .3rem;
  }
</style>
