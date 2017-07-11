<template>
  <section>
    <my-pyt-header></my-pyt-header>
    <my-pyt-content></my-pyt-content>
    <common-bottom-nav :current="home"></common-bottom-nav>
  </section>
</template>

<script>
  import CommonBottomNav from 'page/PuYiTou/Common/CommonBottomNav'
  import MyPytHeader from './MyPytHeader'
  import MyPytContent from './MyPytContent'

  export default {
    data () {
      return {
        home: 'isMyPYT'
      }
    },
    components: {CommonBottomNav, MyPytHeader, MyPytContent}
  }
</script>

<style lang="less">
  p {
    margin: 0.1rem 0;
  }
</style>
