<template>
<div>
  <div class="product-list_block ge-mb-15" v-for="item in loanList">
    <a class="products-list__detail" @click="gotoDetail(item)">
      <div class="product-list_block_title font-color-gray">
        <span class="font-size-medium">保单号: {{item.applyNo}}</span>
        <span class="float-right icon-block border-gray ">{{item.statusName}}</span>
      </div>
      <div class="product-list_block_con">
        <div class="item-block font-color-gray">
          <div class="item-amount">贷款金额 (元)</div>
          <div class="item-date">申请日期</div>
        </div>
        <div class="item-block font-size-large">
          <div class="item-amount">{{item.businessSum}}</div>
          <div class="item-date">{{item.operateDate}}</div>
        </div>
      </div>
    </a>
  </div>
</div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        loanList: 'ttl/myInsurance/loanList',
        loanListTotal: 'ttl/myInsurance/loanListTotal',
        currentNav: 'ttl/myInsurance/selectedNav',
        noMoreFlag: 'ttl/myInsurance/noMoreFlag'
      })
    },
    methods: {
      ...mapActions({
        getLoanList: 'ttl/myInsurance/getLoanList'
      }),
      gotoDetail (item) {
        sessionStorage.setItem('loanDetail', JSON.stringify(item))
        this.$router.push('/ttl/loandetail')
      }
    }
  }
</script>

<style lang="less" scoped>
   @import "../../../style/variables";

   .container {
    padding-bottom: .84rem;
   }

   .ge-ml-15 {
    margin-left: .3rem;
   }

   .ge-mb-15 {
    margin-bottom: .28rem;
   }
   .product-list {
      &_invest {
        display: block;
      }

      &_block {
        background-color: #fff;
        padding: .2rem 0 .3rem .3rem;
        position: relative;
        border-bottom: 1px solid @line-color;
        &_title {
          height: 0.62rem;
          line-height: 0.4rem;
          padding-right: .3rem;
          border-bottom: 1px solid @line-color;
          .recommand-icon {
            border: 1px solid @bg-red;
            border-radius: .1rem;
            padding: .03rem .1rem;
            margin-left: .17rem;
            position: relative;
            bottom: 0.04rem;
          }
        }

        &_con {
          .item-block{
            display: flex;
            width: 100%;
            align-items: center;
            padding-top: .3rem;

            .item-amount {
              flex: 0 0 40%;
            }
            .item-date {
              flex: 0 0 60%;
            }
          }
        }

        & > a[class~="products-list__detail"]{
          &:after {
            top: 70%;
            margin-top: -.2rem;
            right: .3rem;
            border: 1px solid transparent;
            border-top-color: @line-color;
            border-right-color: @line-color;
            content: " ";
            height: .2rem;
            width: .2rem;
            position: absolute;
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
          }
        }
      }
   }
</style>
