<template>
  <div>
    <ul class="nav nav-fixed">
      <li :class="{'active': currentNav === 'usable'}" @click="changeNavClick({type: 'usable'})">可使用卡券</li>
      <li :class="{'active': currentNav === 'passed'}" @click="changeNavClick({type: 'passed'})">过往记录</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        currentNav: 'usable'
      }
    },
    methods: {
      changeNavClick (obj) {
        this.currentNav = obj.type
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  .nav {
      display: flex;
      width: 100%;
      // max-width: 1080px;
      font-size: @font-size-medium;
      background-color: @bg-white;
      height: 0.9rem;

      &-fixed {
        position: fixed;
        top: 0;
        z-index: 2;

        > li {
          flex: auto;
          height: 0.88rem;
          line-height: 0.88rem;
          text-align: center;

          &.active {
            border-bottom: 2px solid @font-color-red;
            color: @font-color-red;
          }
        }
      }
    }
</style>
