<template>
  <div>
    <coupon-usage-nav></coupon-usage-nav>
    <coupon-is-used v-if="currentNav === 'used'"></coupon-is-used>
    <coupon-not-used v-if="currentNav === 'notUsed'"></coupon-not-used>
    <div class="load-more font-size-small" v-if="total === 0">无相关数据</div>
  </div>
</template>

<script>
  import CouponUsageNav from './CouponUsageNav'
  import CouponIsUsed from './CouponIsUsed'
  import CouponNotUsed from './CouponNotUsed'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        currentNav: 'shop/couponUsage/currentNav',
        noMoreFlag: 'shop/couponUsage/noMoreFlag',
        total: 'shop/couponUsage/total'
      })
    },
    methods: {
      ...mapActions({
        getCouponsUsed: 'shop/couponUsage/getCouponsUsed',
        getCouponsNotUsed: 'shop/couponUsage/getCouponsNotUsed'
      }),
      handleScroll () {
        if (!this.noMoreFlag && this._scrollToBottom()) {
          window.removeEventListener('scroll', this.handleScroll)
          if (this.currentNav === 'used') {
            this.getCouponsUsed({date: this.$route.query.date})
          } else if (this.current === 'notUsed') {
            this.getCouponsNotUsed({date: this.$route.query.date})
          }
        }
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    components: {
      CouponUsageNav,
      CouponIsUsed,
      CouponNotUsed
    }
  }
</script>
