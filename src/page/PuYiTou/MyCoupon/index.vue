<template>
  <section>
    <my-coupon-nav></my-coupon-nav>
    <my-coupon-use></my-coupon-use>
    <my-coupon-passed v-if="false"></my-coupon-passed>
  </section>
</template>

<script>
  import MyCouponNav from './MyCouponNav'
  import MyCouponUse from './MyCouponUse'
  import MyCouponPassed from './MyCouponPassed'

  export default {
    components: {
      MyCouponNav,
      MyCouponUse,
      MyCouponPassed
    }
  }
</script>

