<template>
  <div id="app">
    <router-view></router-view>
    <common-message v-show="popShow"></common-message>
    <common-loading></common-loading>
    <!-- <common-cgb-loading></common-cgb-loading> -->
    <common-loading-tip></common-loading-tip>
  </div>
</template>

<script>
  import CommonMessage from 'components/Common/CommonMessage'
  import CommonLoading from 'components/Common/CommonLoading'
  // import CommonCgbLoading from 'components/Common/CommonCgbLoading'
  import CommonLoadingTip from 'components/Common/CommonLoadingTip'

  export default {
    name: 'app',
    components: {
      CommonMessage,
      CommonLoading,
      // CommonCgbLoading,
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
