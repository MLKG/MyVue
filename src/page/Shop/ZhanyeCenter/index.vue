<template>
  <div class="ZhanyeCenter">
    <zhanye-center-nav></zhanye-center-nav>
    <zhanye-center-info v-if="currentNav === 'infoset'"></zhanye-center-info>
    <zhanye-center-share v-if="currentNav === 'sharelink'"></zhanye-center-share>
    <shop-common-bottom-nav :current="bottomNav"></shop-common-bottom-nav>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import ShopCommonBottomNav from 'page/Shop/Common/ShopCommonBottomNav'
  import ZhanyeCenterNav from './ZhanyeCenterNav'
  import ZhanyeCenterInfo from './ZhanyeCenterInfo'
  import ZhanyeCenterShare from './ZhanyeCenterShare'

  export default {
    name: 'ZhanyeCenter',
    data () {
      return {
        bottomNav: 'center'
      }
    },
    methods: {
      ...mapMutations({
        gteCurrentNav: 'shop/zhanyeCenter/CHANGE_ZYCURRENTNAV'
      })
    },
    computed: {
      ...mapGetters({
        currentNav: 'shop/zhanyeCenter/currentNav'
      })
    },
    mounted () {
      this.gteCurrentNav({type: this.$route.params.from})
    },
    components: {
      ShopCommonBottomNav,
      ZhanyeCenterNav,
      ZhanyeCenterInfo,
      ZhanyeCenterShare
    }
  }
</script>

