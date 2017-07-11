<template>
  <div>
    <product-content></product-content>
    <product-footer></product-footer>
  </div>
</template>

<script>
  import ProductContent from './ProductContent'
  import ProductFooter from './ProductFooter'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        productDetail: 'ttl/productDetail/productDetail'
      })
    },
    mounted: function () {
      this.getProductDetail({productId: this.$route.query.productId})
    },
    methods: {
      ...mapActions({
        getProductDetail: 'ttl/productDetail/getProductDetail'
      })
    },
    components: {
      ProductContent,
      ProductFooter
    }
  }
</script>
