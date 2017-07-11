<template>
  <div>
    <user-search-bar
      @userSearchSuggest="userSearchSuggest"
      @getSearchResult="getSearchResult">
    </user-search-bar>
    <user-search-item></user-search-item>
    <div class="user-search-modal" v-show="showModal"></div>
    <div v-show="total > 0">
      <user-search-result></user-search-result>
      <shop-common-user-item
        :users="customerList"
        :no-more-user="lastPageEmpty"
        :is-more="isMore">
      </shop-common-user-item>
    </div>
    <user-search-nothing v-show="!total"></user-search-nothing>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  import ShopCommonUserItem from 'page/Shop/Common/ShopCommonUserItem'
  import UserSearchBar from './UserSearchBar'
  import UserSearchItem from './UserSearchItem'
  import UserSearchResult from './UserSearchResult'
  import UserSearchNothing from './UserSearchNothing'

  export default {
    data () {
      return {
        isEnter: false,
        keyword: ''
      }
    },
    computed: {
      ...mapGetters({
        total: 'shop/customerSearch/total',
        customerList: 'shop/customerSearch/customerList',
        lastPageEmpty: 'shop/customerSearch/lastPageEmpty',
        isMore: 'shop/customerSearch/isMore',
        noMoreFlag: 'shop/customerSearch/noMoreFlag',
        showModal: 'shop/customerSearch/showModal'
      })
    },
    methods: {
      ...mapActions({
        searchCustomer: 'shop/customerSearch/searchCustomer',
        searchSuggest: 'shop/customerSearch/searchSuggest'
      }),
      ...mapMutations({
        clearStore: 'shop/customerSearch/REST_CUSTOMERSEARCH_STORE',
        clearSuggest: 'shop/customerSearch/REST_SEARCHRSUGGEST_STORE',
        setModal: 'shop/customerSearch/SET_SEARCHRSUGGEST_MODAL'
      }),
      handleScroll () {
        if (!this.noMoreFlag && this._scrollToBottom()) {
          window.removeEventListener('scroll', this.handleScroll)
          this.searchCustomer({keyword: this.keyword})
        }
      },
      userSearchSuggest (keyword) {
        if (keyword === '' || this.isEnter) {
          this.isEnter = false
          this.setModal({showModal: false})
          this.clearSuggest()
          return
        }
        this.searchSuggest({ keyword })
      },
      getSearchResult (keyword) {
        this.isEnter = true
        this.setModal({showModal: false})
        this.clearStore()
        this.keyword = keyword
        this.searchCustomer({ keyword })
      }
    },
    components: {
      ShopCommonUserItem,
      UserSearchBar,
      UserSearchItem,
      UserSearchResult,
      UserSearchNothing
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    watch: {
      customerList () {
        window.addEventListener('scroll', this.handleScroll)
      }
    }
  }
</script>

<style lang="less">
  .user-search-modal {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.1;
  }
</style>

