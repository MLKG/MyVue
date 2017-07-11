<template>
  <div>
    <home-header v-show="!showUpdate"></home-header>
    <home-general v-show="!showUpdate"></home-general>
    <home-content v-show="!showUpdate"></home-content>
    <transition name="slide-fade">
      <home-update v-show="showUpdate"></home-update>
    </transition>
    <shop-common-bottom-nav :current="home"></shop-common-bottom-nav>
  </div>
</template>

<script>
  import HomeHeader from './HomeHeader'
  import HomeGeneral from './HomeGeneral'
  import HomeContent from './HomeContent'
  import HomeUpdate from './HomeUpdate'
  import ShopCommonBottomNav from 'page/Shop/Common/ShopCommonBottomNav'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        home: 'main'
      }
    },
    computed: {
      ...mapGetters({
        showUpdate: 'shop/home/showUpdate'
      })
    },
    components: {
      HomeHeader,
      HomeGeneral,
      HomeContent,
      HomeUpdate,
      ShopCommonBottomNav
    }
  }
</script>

<style lang="less">
  @import "../../../style/variables";

  .slide-fade {
    &-enter,&-leave-active {
      opacity: 0;
      transform: scale(0,0);
    }

    &-enter-active {
      transition: all 0.3s ease;
      transform: scale(100%, 100%);
    }

    &-leave-active {
      transition: all 0.5s ease;
      transform: scale(100%, 100%);
    }
  }
</style>
