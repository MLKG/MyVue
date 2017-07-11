<template>
  <div>
    <div class="product-list" v-for="(product, index) in productList" @click="toProductDetail(product.productId)">
      <div class="product-list__title">
        <span class="product-list__title_name">{{product.productName}}</span><!-- <span class="recommend" v-if="!index">热荐</span> -->
        <span class="product-list__title_right"><!-- <span class="font-color-red">{{product.minOrder}}元 </span>起投 --></span>
      </div>
      <div class="product-list__content">
        <div class="product-list__content_title">
          <div class="item1">历史年化结算利率</div>
          <div class="item2">起点金额</div>
          <div class="item3">投资期限</div>
        </div>
        <div class="product-list__content_rate">
          <div class="item1 font-color-red"><span class="font-size-big">{{product.expYield | rateFormat}}</span>%</div>
          <div class="item2">{{product.minOrder | currency(true)}}元</div>
          <div class="item3">5年后可免手续费领取</div>
        </div>
      </div>
      <div class="product-list__button">
        <button type="button" class="product-list__button_click">立即购买</button>
      </div>
    </div>
    <div class="load-more font-size-large" v-show="total === 0">无产品信息</div>
    <div class="product-list_placeholder"></div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        productList: 'ttl/productList/productList',
        total: 'ttl/productList/total'
      })
    },
    mounted: function () {
      this.getProductList()
    },
    methods: {
      ...mapActions({
        getProductList: 'ttl/productList/getProductList'
      }),
      toProductDetail (productId) {
        this.$router.push({path: '/ttl/productdetail', query: {productId: productId}})
      }
    }
  }
</script>

<style lang="less" scoped>
   @import "../../../style/variables";

   .product-list {
      margin-top: 0.3rem;
      border-top: 1px solid @line-color;
      border-bottom: 1px solid @line-color;
      padding-left: 0.3rem;
      background-color: @bg-white;
      position: relative;

      &__title {
        height: 0.88rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid @line-color;

        .recommend{
          border: 1px solid @font-color-red;
          border-radius: 2px;
          color: @font-color-red;
          font-size: @font-size-smallest;
          padding: 0 0.1rem;
          margin-left: 0.1rem;
        }

        &_name {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          width: 7.0rem;
          font-size: @font-size-large;
        }

        &_right{
          position: absolute;
          right: 0.3rem;
          top: 0.3rem;
          font-size: @font-size-smallest;
        }
      }

      &__content {
        &_title {
          display: flex;
          font-size: @font-size-smallest;
          color: @font-color-gray;
          height: 0.8rem;
          align-items: center;
        }

        &_rate {
          display: flex;
          font-size: @font-size-base;
          align-items: flex-end;
          margin-bottom: 0.3rem;
        }

        .item1 {
          flex: 0 0 2.4rem;
        }

        .item2 {
          flex: 0 0 1.7rem;
        }

        .item3 {
          flex: 0 0 2.8rem;
        }
      }

      &__button {
        padding-right: 0.3rem;
        margin-bottom: 0.3rem;

        &_click {
          display: inline-block;
          width: 100%;
          border: none;
          background-color: @bg-red;
          color: @font-color-white;
          height: 0.72rem;
          font-size: @font-size-medium;
          border-radius: 3px;

          &:disabled {
            background-color: @bg-gray;
          }
        }

      }

      &:after {
            top: 48%;
            right: 0.3rem;
            border: 1px solid transparent;
            border-top-color: @line-color;
            border-right-color: @line-color;
            content: " ";
            height: 0.2rem;
            width: 0.2rem;
            position: absolute;
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
      }

      &_placeholder {
        height: 0.3rem;
      }
   }
</style>
