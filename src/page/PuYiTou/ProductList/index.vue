<template>
  <div>
    <product-list-nav></product-list-nav>
    <product-list-dht v-if="false"></product-list-dht>
    <product-list-ps></product-list-ps>
    <common-bottom-nav :current="home"></common-bottom-nav>
  </div>
</template>

<script>
  import ProductListNav from './ProductListNav'
  import ProductListDht from './ProductListDht'
  import ProductListPs from './ProductListPs'
  import CommonBottomNav from 'page/PuYiTou/Common/CommonBottomNav'

  export default {
    data () {
      return {
        home: 'isProduct'
      }
    },
    components: {
      ProductListNav,
      ProductListDht,
      ProductListPs,
      CommonBottomNav
    }
  }
</script>
