<template>
  <div class="common-loading-tip hide" id="commonLoadingTip">
    <div class="common-loading-tip__cell">
      <span class="common-loading-tip__text">网络出错啦~</span>
    </div>
  </div>
</template>

<style lang="less">
  .common-loading-tip {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    bottom: 0;
    right: 0;

    &__cell {
      position: fixed;
      text-align: center;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 3rem;
    }

    &__text {
      background: rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      color: #fff;
      padding: .2rem .4rem;
    }
  }
</style>
