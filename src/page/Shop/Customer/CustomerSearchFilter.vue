<template>
  <div>
    <div class="customer-search-bar">
      <div class="customer-search-bar__user" @click="showAll">全部客户 {{ amount.total }}</div>
      <div class="customer-search-bar__search" @click="goUserSearch"><img src="../../../images/shop/search-icon.png"></div>
    </div>
    <div class="customer-search-filter">
      <ul class="customer-search-filter__content">
        <li class="customer-search-filter__item" :class="{current: currents[0]}">
          <a @click.prevent="filterUsers(0)">
            <p class="customer-search-filter__title">本月新增</p>
            <p class="customer-search-filter__title">投资客户</p>
            <p class="customer-search-filter__amount">{{ amount.invest }}</p>
          </a>
        </li>
        <li class="customer-search-filter__item" :class="{current: currents[1]}">
          <a @click.prevent="filterUsers(1)">
            <p class="customer-search-filter__title">本月新增</p>
            <p class="customer-search-filter__title">注册客户</p>
            <p class="customer-search-filter__amount">{{ amount.regist }}</p>
          </a>
        </li>
        <li class="customer-search-filter__item" :class="{current: currents[2]}">
          <a @click.prevent="filterUsers(2)">
            <p class="customer-search-filter__title">未来30天</p>
            <p class="customer-search-filter__title">到期客户</p>
            <p class="customer-search-filter__amount">{{ amount.future }}</p>
          </a>
        </li>
        <li class="customer-search-filter__item" :class="{current: currents[3]}">
          <a @click.prevent="filterUsers(3)">
            <p class="customer-search-filter__title">过去30天已兑</p>
            <p class="customer-search-filter__title">付或转让客户</p>
            <p class="customer-search-filter__amount">{{ amount.past }}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'

  export default {
    data () {
      return {
        currents: [false, false, false, false]
      }
    },
    computed: {
      ...mapGetters({
        amount: 'shop/customer/amount'
      })
    },
    methods: {
      ...mapActions({
        getCustomerList: 'shop/customer/getCustomerList'
      }),
      ...mapMutations({
        resetStore: 'shop/customer/REST_CUSTOMERLIST_STORE'
      }),
      filterUsers (index) {
        this.currents = [false, false, false, false]
        this.currents[index] = true
        let typeMap = {
          0: 2, // 本月新增投资客户
          1: 1, // 本月新增注册客户
          2: 4, // 未来30天到期客户
          3: 3  // 过去30天已兑付或转让客户
        }
        this.resetStore()
        this.getCustomerList({type: typeMap[index]})
      },
      goUserSearch () {
        this.$router.push('/shop/usersearch')
      },
      showAll () {
        this.currents = [false, false, false, false]
        this.resetStore()
        this.getCustomerList({type: 5})
      }
    }
  }
</script>

<style lang="less">
  @import "../../../style/variables";

  .customer-search-bar {
    display: flex;
    width: 100%;
    margin-top: 0.3rem;
    height: 0.9rem;
    color: @font-color-gray;
    border-top: 1px solid @line-color;
    border-bottom: 1px solid @line-color;
    background-color: @bg-white;

    &__user {
      flex: 1;
      width: 88%;
      padding-left: 5%;
      padding-top: 0.3rem;
    }

    &__search {
      display: table-cell;
      width: 12%;
      text-align: center;

      img {
        width: 0.39rem;
        padding-top: 0.3rem;
      }
    }
  }

  .customer-search-filter {
    padding: 0.15rem;
    background-color: @bg-white;
    border-bottom: 1px solid @line-color;

    &__content {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
    }

    &__item {
      flex: 1;
      margin: 0.14rem;
      width: 0;
      overflow: hidden;

      a {
        display: block;
        text-decoration: none;
      }

      &.current {
        color: @font-color-red;
        background-color: @bg-pink;

        .customer-search-filter__title {
          color: @font-color-red;
        }
      }
    }

    &__amount {
      font-size: @font-size-large;
      margin: 0.17rem 0;
    }

    &__title {
      margin: 0;
      font-size: .24rem;
      color: @font-color-gray;
      white-space: nowrap;
    }
  }
</style>
