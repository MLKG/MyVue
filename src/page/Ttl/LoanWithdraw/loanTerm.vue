<template>
  <div>
    <div class="product-terms">
      <div class="product-terms_shadow"></div>
        <ul class="product-terms__ul">
          <li class="product-terms__ul_item" @click="goTerms('TTLCYWFWXY.pdf')">
            <span>产品服务协议</span>
          </li>
          <li class="product-terms__ul_item" @click="getloanTerms()">
            <span>贷款合同书</span>
          </li>
          <li class="product-terms__ul_item" @click="goTerms('ZXSQS.pdf')">
            <span>征信授权书</span>
          </li>
          <li class="product-terms__ul_item" @click="goTerms('DKYTSMS.pdf')">
            <span>贷款用途声明</span>
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
  import { mapActions, mapGetters } from 'vuex'

  export default {
    props: ['applNo', 'proCode'],
    computed: {
      ...mapGetters({
        loanTermsAddr: 'ttl/loan/loanTermsAddr'
      })
    },
    methods: {
      ...mapActions({
        loanTerms: 'ttl/loan/loanTerms'
      }),
      hideTerms () {
        this.$emit('hideTerms')
      },
      goTerms (value) {
        window.location.href = 'https://www.puyitou.com/ContractTemplate/' + value
      },
      getloanTerms () {
        this.loanTerms({applNo: this.applNo, proCode: this.proCode}).then((res) => {
          if (res.status === 'success') {
            window.location.href = 'https://www.puyitou.com' + res.data.addr
          }
          // window.location.href = 'https://www.puyitou.com/ContractTemplate/' + res.data.addr
          // window.location.href = 'http://10.88.2.58:1337' + res.data.addr
        })
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
