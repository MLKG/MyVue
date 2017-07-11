<template>
  <div>
    <div class="cus-mangent-product" v-for="product in customerProducts">
      <div class="cus-mangent-product__title">
        <div class="cus-mangent-product__title_name">
          {{ product.productName }}
        </div>
        <span class="cus-mangent-product__title_amount">{{ product.investAmount | currency }}</span>
      </div>
      <div class="cus-mangent-product__content">
        <div class="cus-mangent-product__content_name">
          <span class="font-color-gray">到期时间：</span><span>{{ product.productDate }}</span>
        </div>
        <div class="cus-mangent-product__content_name" v-show="(product.cardInterestRate && product.cardType === 6) || (product.cardAmount && product.cardType !== 6)">
          <span class="font-color-gray">卡券使用：</span>
          <span v-if="product.cardType === 6">
            <span class="cus-mangent-product__content_weight">{{ product.cardName }}</span>
            <span>{{ product.cardInterestRate }}%</span>
          </span>
          <span v-else>
            <span class="cus-mangent-product__content_weight">{{ product.cardName }}</span>
            <span>{{ product.cardAmount }}元</span>
          </span>
        </div>
      </div>
    </div>
    <div class="load-more font-size-large">{{ tip }}</div>
  </div>

</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        customerProducts: 'shop/customerDetail/customerProducts',
        noMoreFlag: 'shop/customerDetail/noMoreFlag',
        productCount: 'shop/customerDetail/productCount'
      }),
      tip () {
        return !this.productCount ? '无产品信息' : !this.noMoreFlag ? '上拉加载更多' : '没有更多了'
      }
    },
    methods: {
      ...mapActions({
        getCustomerProduct: 'shop/customerDetail/getCustomerProduct'
      }),
      handleScroll () {
        if (!this.noMoreFlag && this._scrollToBottom()) {
          window.removeEventListener('scroll', this.handleScroll)
          this.getCustomerProduct({customerId: this.$route.params.userId})
        }
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    watch: {
      customerProducts () {
        window.addEventListener('scroll', this.handleScroll)
      }
    }
  }
</script>

<style lang="less">
  @import "../../../style/variables";

  .cus-mangent-product {
    background-color: @bg-white;
    border-bottom: 1px solid @line-color;

    &__title {
      font-size: @font-size-larger;
      position: relative;
      padding: 0.3rem;
      font-weight: 500;

      &_amount {
        position: absolute;
        right: 0.3rem;
        top: 0.28rem;
      }
    }

    &__content {
      padding: 0 0.3rem 0.28rem;

      &_name {
        padding-bottom: 0.08rem;
      }

      &_weight {
        font-weight: 500;
      }
    }
  }
</style>
