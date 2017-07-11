<template>
  <div>
    <home-header></home-header>
    <!-- <home-product></home-product>
    <common-bottom-nav :current="home"></common-bottom-nav> -->
  </div>
</template>

<script>
  import HomeHeader from './HomeHeader'
  // import HomeProduct from './HomeProduct'
  // import CommonBottomNav from 'page/PuYiTou/Common/CommonBottomNav'

  export default {
    data () {
      return {
        home: 'isIndex'
      }
    },
    components: {
      HomeHeader
      // HomeProduct,
      // CommonBottomNav
    }
  }
</script>
