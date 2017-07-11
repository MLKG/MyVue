<template>
  <div>
    <customer-search-filter></customer-search-filter>
    <shop-common-user-item
      :type="itemType"
      :users="users"
      :no-user="firstPageEmpty"
      :no-more-user="lastPageEmpty"
      :is-more="isMore">
    </shop-common-user-item>
    <shop-common-bottom-nav :current="bottomNav"></shop-common-bottom-nav>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  import ShopCommonBottomNav from 'page/Shop/Common/ShopCommonBottomNav'
  import ShopCommonUserItem from 'page/Shop/Common/ShopCommonUserItem'
  import CustomerSearchFilter from './CustomerSearchFilter'

  export default {
    data () {
      return {
        bottomNav: 'customer'
      }
    },
    computed: {
      ...mapGetters({
        users: 'shop/customer/users',
        total: 'shop/customer/total',
        itemType: 'shop/customer/itemType',
        noMoreFlag: 'shop/customer/noMoreFlag',
        lastPageEmpty: 'shop/customer/lastPageEmpty',
        isMore: 'shop/customer/isMore'
      }),
      firstPageEmpty () {
        return !this.total
      }
    },
    methods: {
      ...mapActions({
        getCustomerList: 'shop/customer/getCustomerList'
      }),
      ...mapMutations({
        resetStore: 'shop/customer/REST_CUSTOMERLIST_STORE'
      }),
      handleScroll () {
        if (!this.noMoreFlag && this._scrollToBottom()) {
          window.removeEventListener('scroll', this.handleScroll)
          this.getCustomerList({type: this.itemType})
        }
      }
    },
    watch: {
      users () {
        window.addEventListener('scroll', this.handleScroll)
      }
    },
    components: {
      ShopCommonBottomNav,
      ShopCommonUserItem,
      CustomerSearchFilter
    },
    mounted () {
      this.resetStore()
      this.getCustomerList({type: 5})
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="less">

</style>

