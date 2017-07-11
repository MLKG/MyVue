<template>
  <div>
    <div class="invest-record">
      <div class="invest-record__nav">
        <div class="invest-record__nav_item">投资人</div>
        <div class="invest-record__nav_item">投资金额(￥)</div>
        <div class="invest-record__nav_item">投资时间</div>
      </div>
      <div class="invest-record_placeholder"></div>
      <div class="invest-record__list" v-for="n in 20">
        <div class="invest-record__list_item">152****2390</div>
        <div class="invest-record__list_item">5000.00</div>
        <div class="invest-record__list_item">
          <div>2016.06.01</div>
          <div>09:10:15</div>
          <div>
            <div class="invest-record__list_icon"></div>
            <div class="invest-record__list_name">自动</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import "../../../style/variables";

  .invest-record {
    &__nav {
      position: fixed;
      top: 0;
      width: 100%;
      height: 0.9rem;
      background-color: @bg-white;
      display: flex;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      max-width: 1080px;
      font-size: @font-size-small;
      border-bottom: 1px solid @line-color;
      z-index: 1;

      &_item {
        flex: 0 0 2.4rem;

        &:last-child {
          flex: 0 0 2.7rem;
        }
      }
    }

    &_placeholder {
      height: 0.9rem;
    }

    &__list {
      height: 1.28rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      font-size: @font-size-small;
      border-bottom: 1px solid @line-color;
      background-color: @bg-white;
      position: relative;
      overflow: hidden;

      &_item {
        flex: 0 0 2.4rem;

        &:last-child {
          flex: 0 0 2.7rem;
        }
      }

      &_icon {
        position: absolute;
        top: 0;
        right: 0;
        width: 0;
        height: 0;
        line-height: 0;
        border-width: 0.4rem 0.4rem;
        border-style: solid solid dashed dashed;
        border-color: @bg-red @bg-red transparent transparent;
      }

      &_name {
        position: absolute;
        top: 0.25rem;
        right: 0;
        color: @font-color-white;
        font-size: @font-size-smaller;
        transform: rotate(45deg);
        line-height: 0;
      }
    }
  }
</style>
