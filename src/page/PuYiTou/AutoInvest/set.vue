<template>
  <div>
    <div class="intro">
      <p class="title">自动投资介绍</p>
      <p class="item">轻松方便<span>让账户闲置余额继续投资生钱</span></p>
      <p class="item">金额自定<span>自主选择需要投资的金额</span></p>
      <p class="item">自主选择<span>自主选择需要投向的产品和收益区间</span></p>
    </div>
    <div class="info-set_block">
      <div class="info-set_block_item">
        <div class="line">
          <div class="float-left">开启自动投资</div>
          <div class="info-set_btn">
            <label class="switch-btn circle-style">
              <input class="checked-switch" type="checkbox"/>
              <span class="text-switch"></span>
              <span class="toggle-btn"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="setting">
      <!-- <p><span class="title">定活通</span><span class="right">请先开启自动投资</span></p> -->
      <p><span class="title">定活通</span><span class="right">修改当前设置 <img src="../../../images/puyitou/arrow-icon.png"></span></p>
      <p class="tlt">预期年化收益率</p>
      <ul class="active"><li>1.5.4%-5.5%</li><li>2.5.4%-5.5%</li><li>3.5.4%-5.5%</li><li>4.5.4%-5.5%</li></ul>
      <p><span>保留金额</span><span class="amount">￥1,200.00</span><span class="right">排队状况 <span class="user-num">12</span></span></p>
    </div>
    <a href="" class="view-btn">查看记录</a>
    <div class="modal hide">
      <div class="box">
        <p class="title">尚未进行风险测评</p>
        <p class="sub-title">开启自动投资前请先完成风险测评</p>
        <div class="btns"><a href="">取消</a><a href="">进行风险测评</a></div>
      </div>
    </div>
  </div>
</template>

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
      z-index: 1000;
      width: 5.4rem;
      margin-left: auto;
      margin-right: auto;
      margin-top: 50%;
      border-radius: 10px;
      font-size: @font-size-medium;

      .title {
        text-align: center;
        margin-bottom: 0;
        padding-top: .35rem;
        padding-bottom: .1rem;
        font-weight: bold;
      }

      .sub-title {
        text-align: center;
        border-bottom: 1px solid @line-color;
        margin-bottom: 0;
        padding-bottom: .25rem;
        font-size: @font-size-base;
      }

      .btns {
        display: flex;

        a {
          flex: 1;
          text-align: center;
          padding-top: .2rem;
          padding-bottom: .15rem;
        }

        a:first-child {
          border-right: 1px solid @line-color;
        }

        a:last-child {
          color: @font-color-blue;
        }
      }
    }
  }

  .intro {
    padding: .35rem .25rem .3rem;
    background-color: @bg-white;
  }

  .title {
    font-size: @font-size-medium;
    margin-bottom: .3rem;
  }

  .view-btn {
    color: @font-color-red;
    font-size: @font-size-medium;
    background-color: @bg-white;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding-top: .3rem;
    padding-bottom: .3rem;
    max-width: 1080px;
  }

  .item {
    margin-top: .2rem;
    margin-bottom: .2rem;

    span {
      color: @font-color-gray;
      margin-left: .2rem;
    }
  }

  .setting {
    margin-top: .3rem;
    padding: .3rem .25rem;
    background-color: @bg-white;
    color: @font-color-gray;

    .title {
      font-size: @font-size-medium;
      color: @font-color-base;
      font-weight: bold;
    }

    .right {
      float: right;

      img {
        width: .15rem;
        position: relative;
        top: .04rem;
      }
    }

    ul {
      padding-left: .6rem;
      padding-right: .6rem;
      font-size: @font-size-big;

      li {
        margin-bottom: .2rem;
      }

      li:nth-child(odd) {
        display: inline-block;
        width: 50%;
      }

      li:nth-child(odd)::after {
        content: ';';
        position: relative;
        top: -.05rem;
      }

      li:nth-child(even) {
        float: right;
      }
    }

    ul.active {
      color: @font-color-red;
    }

    .amount {
      margin-left: .1rem;
      font-size: @font-size-medium;
      color: @font-color-base;
    }

    .user-num {
      font-size: @font-size-medium;
      color: @font-color-base;
    }
  }

  .info-set {
    margin-top: 0.93rem;

    &_gray {
      height: .84rem;
      line-height: .84rem;
      padding-left: .3rem;
      font-size: @font-size-small;
    }

    &_block {
      background-color: @bg-white;
      font-size: @font-size-medium;
      margin-top: .3rem;

      &_item {
        padding-left:.25rem;

        .line {
          border-bottom: 1px solid @line-color;
          height: .98rem;
          line-height: .98rem;

          &:last-child {
            border-bottom: none;
          }
        }
      }

      & .switch-btn {
        position: relative;
        display: block;
        vertical-align: top;
        width: 1rem;
        height: .56rem;
        border-radius: .56rem;
      }

      & .checked-switch {
        position: absolute;
        top: .03rem;
        left: .08rem;
        opacity: 0;

        &:checked ~ .text-switch {
          background-color: #ed5b49;
          border: 1px solid #d2402e;
        }

        &:checked ~ .toggle-btn {
          left: .39rem;
        }
      }

      & .text-switch {
        background-color: #fff;
        border: 1px solid #DDD;
        border-radius: inherit;
        color: #fff;
        display: block;
        height: inherit;
        position: relative;
        text-transform: uppercase;
      }

      & .toggle-btn {
        background: linear-gradient(#fff, #fafafa);
         border-radius: 100%;
         height: .53rem;
         left: 0;
         position: absolute;
         top: .01rem;
         width: .53rem;
         border:1px solid #DDD;
       }

      & .text-switch, .toggle-btn {
        transition: All 0.3s ease;
        -webkit-transition: All 0.3s ease;
         -moz-transition: All 0.3s ease;
         -o-transition: All 0.3s ease;
       }
    }

    &_btn {
      padding-right: .3rem;
      padding-top: 0.2rem;
      float: right;
    }
  }
</style>
