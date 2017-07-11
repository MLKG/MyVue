<template>
<div>
  <div class="product-list_block ge-mb-15" v-for="item in historyList">
    <a class="products-list__detail" @click="gotoDetail(item)">
      <div class="product-list_block_title">
        <span class="font-size-medium">{{item.nsurName}}</span>
        <span class="float-right icon-block border-gray font-color-gray">{{item.status}}</span>
      </div>
      <div class="product-list_block_con">
        <div class="item-block font-color-gray">
          <div class="item-amount">投保金额 (元)</div>
          <div class="item-date">交易时间</div>
        </div>
        <div class="item-block font-size-large">
          <div class="item-amount">{{item.premium}}</div>
          <div class="item-date">{{item.busiDate}}</div>
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
        historyList: 'ttl/myInsurance/historyList',
        historyListTotal: 'ttl/myInsurance/historyListTotal',
        currentNav: 'ttl/myInsurance/selectedNav'
      })
    },
    methods: {
      ...mapActions({
        getHistoryList: 'ttl/myInsurance/getHistoryList'
      }),
      gotoDetail (item) {
        sessionStorage.setItem('historyDetail', JSON.stringify(item))
        this.$router.push('/ttl/historyDetail')
      }
    }
  }
</script>

<style lang="less"  scoped>
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
