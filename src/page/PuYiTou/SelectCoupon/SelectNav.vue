<template>
  <div>
    <div class="select-nav">
      <div class="select-nav_item" :class="{'current': currentNav === 'yhq'}" @click="changeNavClick({type: 'yhq'})">优惠券</div>
      <div class="select-nav_item" :class="{'current': currentNav === 'zlbj'}" @click="changeNavClick({type: 'zlbj'})">增利本金</div>
    </div>
    <div class="select-nav_placeholder"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        currentNav: 'yhq'
      }
    },
    methods: {
      changeNavClick (typeObj) {
        this.currentNav = typeObj.type
      }
    }
  }
</script>

<style lang="less" scoped>
   @import "../../../style/variables";

    .select-nav {
      display: flex;
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 2;
      max-width: 1080px;
      font-size: @font-size-medium;
      background-color: @bg-white;
      height: 0.9rem;

      &_item {
        flex: auto;
        height: 0.88rem;
        line-height: 0.88rem;
        text-align: center;

        &.current {
          border-bottom: 2px solid @font-color-red;
          color: @font-color-red;
        }
      }

      &_placeholder {
        height: 0.9rem;
      }
    }
</style>
