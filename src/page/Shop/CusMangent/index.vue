<template>
  <div>
    <cus-mangent-header></cus-mangent-header>
    <cus-mangent-nav></cus-mangent-nav>
    <cus-mangent-product v-show="currentType ==='product'"></cus-mangent-product>
    <cus-mangent-coupon v-show="currentType ==='coupon'"></cus-mangent-coupon>
    <cus-mangent-login v-show="currentType ==='login'"></cus-mangent-login>
  </div>
</template>

<script>
  import { mapActions, mapMutations, mapGetters } from 'vuex'
  import CusMangentHeader from './CusMangentHeader'
  import CusMangentNav from './CusMangentNav'
  import CusMangentProduct from './CusMangentProduct'
  import CusMangentCoupon from './CusMangentCoupon'
  import CusMangentLogin from './CusMangentLogin'

  export default {
    data () {
      return {
        productCount: 0,
        couponCount: 0
      }
    },
    computed: {
      ...mapGetters({
        currentType: 'shop/customerDetail/currentType'
      })
    },
    methods: {
      ...mapActions({
        getCustomerInfo: 'shop/customerDetail/getCustomerInfo',
        getCustomerProduct: 'shop/customerDetail/getCustomerProduct',
        getCustomerCoupons: 'shop/customerDetail/getCustomerCoupons',
        getCustomerLoginInfo: 'shop/customerDetail/getCustomerLoginInfo'
      }),
      ...mapMutations({
        reset: 'shop/customerDetail/REST_CUSTOMERINFO'
      })
    },
    mounted () {
      let param = {customerId: this.$route.params.userId}
      this.reset()
      this.getCustomerInfo(param)
      this.getCustomerProduct(param)
      this.getCustomerCoupons(param)
      this.getCustomerLoginInfo(param)
    },
    components: {
      CusMangentHeader,
      CusMangentNav,
      CusMangentProduct,
      CusMangentCoupon,
      CusMangentLogin
    }
  }
</script>
