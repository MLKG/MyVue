<template>
  <ul class="cus-mangent-nav">
    <li class="cus-mangent-nav_item" :class="{'current': currentType === 'product'}" @click="selectedType('product')">持有产品({{ productCount }})</li>
    <li class="cus-mangent-nav_item" :class="{'current': currentType === 'coupon'}" @click="selectedType('coupon')">持有卡券({{ couponCount }})</li>
    <li class="cus-mangent-nav_item" :class="{'current': currentType === 'login'}" @click="selectedType('login')">登录信息</li>
  </ul>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        productCount: 'shop/customerDetail/productCount',
        couponCount: 'shop/customerDetail/couponCount',
        currentType: 'shop/customerDetail/currentType'
      })
    },
    methods: {
      ...mapMutations({
        changeType: 'shop/customerDetail/CHANGE_CURRENTTYPE'
      }),
      selectedType: function (type) {
        this.changeType({ type })
      }
    }
  }
</script>

<style lang="less">
  @import "../../../style/variables";

  .cus-mangent-nav {
    bottom: 0;
    margin: 0;
    padding: 0;
    display: flex;
    width: 100%;
    list-style: none;
    font-size: @font-size-medium;
    background-color: @bg-white;

    &_item {
      flex: 1;
      height: 0.9rem;
      line-height: 0.9rem;
      text-align: center;
      border-bottom: 1px solid @line-color;

      &.current {
        border-bottom: 1px solid @font-color-red;
        color: @font-color-red;
      }
    }
  }
</style>
