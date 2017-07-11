<template>
  <div id="cgbLoadingPopup" class="popup load hide">
    <div class="popup_content">
      <div class="popup_text">
        <div class="loading-box"><img src="../../images/common/loading.gif"></div>
        <div class="text">正在加载<br>广发银行保险理财</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .loading-box {
    text-align: center;
    margin-top: -30px;

    img {
      width: 56%;
    }
  }
  .popup {
    position: fixed;
    width: 100%;
    height: 100%;
    background:rgba( 0, 0, 0, 0.5);
    top:0;
    left:0;
    z-index: 9997;
    .popup_content {
      background-color: #fff;
      border-radius:5px;
      -moz-border-radius:5px;
      margin: auto;
      max-height: 90%;
      max-width: 90%;
      overflow-y: auto;
    }

    &.load {
      background:rgba( 0, 0, 0, 0);
      .popup_content {
        background:rgba( 45, 45, 46, 0.8);
        width: 150px; height: 125px;
        border-radius:10px;
        -moz-border-radius:10px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }
      .popup_text {
        padding-top: 30px;
      }
      .loading {
       margin:0 auto 20px;
     }
     .text{
      margin-top: -12px;
      font-size: 14px;
      text-align: center;
      color: #fff;
    }
  }

  &.hide {
    display: none;
  }
}
</style>
