<template>
  <div>
    <div class="product-list-nav">
      <div class="product-list-nav_item" :class="{'current': currentNav === 'dht'}" @click="changeNavClick({type: 'dht'})">定活通</div>
      <div class="product-list-nav_item" :class="{'current': currentNav === 'ps'}" @click="changeNavClick({type: 'ps'})">磐石理财</div>
    </div>
    <div class="product-list-nav_placeholder"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        currentNav: 'dht'
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

   .product-list-nav {
      display: flex;
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 2;
      max-width: 1080px;
      font-size: @font-size-medium;
      background-color: @bg-white;
      height: 0.9rem;
      // border-bottom: 1px solid @line-color;

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
