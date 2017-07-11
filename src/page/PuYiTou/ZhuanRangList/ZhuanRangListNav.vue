<template>
  <div>
    <div class="product-list-nav">
      <div class="product-list-nav_item">默认</div>
      <div class="product-list-nav_item">收益率<img class="product-list-nav_icon" src="../../../images/puyitou/zhuanrang-down.png" /></div>
      <div class="product-list-nav_item up">剩余期限<img class="product-list-nav_icon" src="../../../images/puyitou/zhuanrang-down.png" /></div>
      <div class="product-list-nav_item current">红包<img class="product-list-nav_icon" src="../../../images/puyitou/zhuanrang-down.png" /></div>
    </div>
    <div class="product-list-nav_placeholder"></div>
  </div>
</template>

<style lang="less" scoped>
   @import "../../../style/variables";

   .product-list-nav {
      display: flex;
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 2;
      max-width: 1080px;
      font-size: @font-size-medium;
      background-color: @bg-white;
      // border-bottom: 1px solid @line-color;

      &_item {
        flex: auto;
        height: 0.9rem;
        line-height: 0.9rem;
        text-align: center;

        &.current {
          color: @font-color-red;

          img {
            display: inline-block;
          }

          &.up {
            img {
              padding-right: 4px;
              transform: rotate(180deg);
            }
          }
        }
      }

      &_icon {
        display: none;
        width: 0.16rem;
        height: 0.30rem;
        position: relative;
        top: 2px;
        padding-left: 4px;
      }

      &_placeholder {
        height: 0.9rem;
      }
   }
</style>
