<template>
  <div class="zhanye-center">
    <div class="tab-item" :class="{'current': currentNav === 'sharelink'}" @click="changeNav({type: 'sharelink'})">推广链接</div>
    <div class="tab-item" :class="{'current': currentNav === 'infoset'}" @click="changeNav({type: 'infoset'})">消息设置</div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        currentNav: 'shop/zhanyeCenter/currentNav'
      })
    },
    methods: {
      ...mapMutations({
        changeNav: 'shop/zhanyeCenter/CHANGE_ZYCURRENTNAV'
      })
    }
  }
</script>

<style lang="less">
  @import "../../../style/variables";

  .zhanye-center {
    display: flex;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 2;
    max-width: 1080px;

    .tab-item {
      flex: 1;
      text-align: center;
      height: 0.9rem;
      line-height: 0.9rem;
      background-color: @bg-white;
      font-size: @font-size-medium;
      border-bottom: 1px solid @line-color;

      &.current {
        border-bottom: 1px solid @font-color-red;
        color: @font-color-red;
      }
    }
  }
</style>
