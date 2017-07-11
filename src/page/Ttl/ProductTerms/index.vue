<template>
  <div>
    <div class="product-terms">
      <div class="product-terms_shadow"></div>
        <ul class="product-terms__ul">
          <li class="product-terms__ul_item" @click="goTerms('CPSMS.pdf')">
            <span>产品说明书</span>
          </li>
          <li class="product-terms__ul_item" @click="goTerms('HKHLYHTK.pdf')">
            <span>保险协议</span>
          </li>
          <li class="product-terms__ul_item" @click="goTerms('RSBXTBTSS.pdf')">
            <span>投保提示书及声明</span>
          </li>
          <li class="product-terms__ul_item" @click="goTerms('JKGZ.pdf')">
            <span>健康告知及重要告知</span>
          </li>
          <li class="product-terms__ul_item" @click="goTerms('TTLCYWFWXY.pdf')">
            <span>天天利产品及服务协议</span>
          </li>
          <li class="product-terms__ul_item" @click="hideTerms()">
            <span>取消</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      hideTerms () {
        this.$emit('hideTerms')
      },
      goTerms (value) {
        window.location.href = 'https://www.puyitou.com/ContractTemplate/' + value
      }
    }
  }
</script>

<style lang="less">
   @import "../../../style/variables";

   .product-terms {
      &_shadow {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: @bg-black;
        z-index: 1;
        opacity: 0.4;
      }

      &__ul {
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
        z-index: 2;
        background-color: @bg-white;

        &_item {
          height: 0.9rem;
          line-height: 0.9rem;
          border-bottom: 1px solid @line-color;
          font-size: @font-size-small;
          color: @font-color-blue;

          &:last-child {
            border-bottom: none;
            color: @font-color-base;
          }
        }
      }
   }
</style>
