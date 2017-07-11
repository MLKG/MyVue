<template>
  <div id="app">
    <router-view></router-view>
    <common-message v-show="popShow"></common-message>
    <common-loading></common-loading>
    <common-loading-tip></common-loading-tip>
  </div>
</template>

<script>
  import CommonMessage from 'components/CommonMessage'
  import CommonLoading from 'components/CommonLoading'
  import CommonLoadingTip from 'components/CommonLoadingTip'

  export default {
    name: 'app',
    components: {
      CommonMessage,
      CommonLoading,
      CommonLoadingTip
    },
    computed: {
      popShow () {
        return this.$store.getters.popShow
      }
    }
  }
</script>

<style lang="less">
  @import "style/base.less";
</style>
