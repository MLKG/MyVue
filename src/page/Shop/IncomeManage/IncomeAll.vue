<template>
<div class="income">
  <div v-if="total > 0">
    <div class="income-content">
      <div class="income-content_header">
        <div class="font-size-larger">
          佣金计算方式
        </div>
        <div class="income-content_header_tip">
          <div>广金定活通 (税前) : 日均余额*佣金率*当月天数/365</div>
          <div>广金磐石 (税前) : 磐石折标额*佣金率</div>
          <img class="icon" src="../../../images/shop/calcular.png" />
        </div>
      </div>
    </div>
    <div class="income-content_list">
      <div class="income-content_list-title">
        业绩详情 <!-- <span class="font-size-base">(*佣金于每月15日后3个工作日内发放)</span> -->
      </div>
      <div class="income-content_list-con" v-for="item in lists">
        <div class="list-item">
          <div class="list-item_title">
            <span>{{ item.year }}年{{ item.month }}月总佣金收入 <span class="font-size-largest font-color-red">{{ item.commision | currency }}</span></span>
            <span class="list-item_link"><router-link :to="'/shop/incomedetail?time=' + item.timeStr">查看详情</router-link></span>
          </div>
          <div class="list-item_con list-item_con_title">
            <div class="list-item_con_item">月度投资总额</div>
            <div class="list-item_con_item text-center">定活通日均余额</div>
            <div class="list-item_con_item text-center">磐石折标金额</div>
          </div>
          <div class="list-item_con">
            <div class="list-item_con_item amount">{{ item.investAmount | currency }}</div>
            <div class="list-item_con_item amount text-center">{{ item.dhtBalance | currency }}</div>
            <div class="list-item_con_item amount text-center">{{ item.psBalance | currency }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="load-more font-size-large font-color-gray">{{ tip }}</div>
  </div>
  <div class="user-search-nothing"  v-if="total === 0">
    <div class="user-search-nothing__image-wrapper">
      <img src="../../../images/shop/no-result.png" class="user-search-nothing__image">
    </div>
    <div class="user-search-nothing__text-wrapper">
      <div class="font-size-big">暂无数据</div>
    </div>
  </div>
</div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        lists: 'shop/income/incomeList',
        total: 'shop/income/total',
        noMoreFlag: 'shop/income/noMoreFlag'
      }),
      tip () {
        return !this.noMoreFlag ? '上拉加载更多' : '没有更多了'
      }
    },
    mounted: function () {
      this.reset()
      this.getIncomeList()
    },
    methods: {
      ...mapActions({
        getIncomeList: 'shop/income/getIncomeList'
      }),
      ...mapMutations({
        reset: 'shop/income/REST_INCOMELIST'
      }),
      handleScroll () {
        if (!this.noMoreFlag && this._scrollToBottom()) {
          window.removeEventListener('scroll', this.handleScroll)
          this.getIncomeList()
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
      lists () {
        window.addEventListener('scroll', this.handleScroll)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  .income{
    .income-content {
      height: 2rem;
      padding: 0.3rem;
      background-color: #ea544a;
      color: #fff;
      &_header {
        position: relative;

        &_tip {
          margin-top: 0.3rem;
          line-height: 0.56rem;
          position: absolute;
          z-index: 99;

          .icon {
            position: absolute;
            right: -45px;
            bottom: -20px;
            width: 25%;
            z-index: -1;
          }
        }

        .item-title {
          margin-bottom: 0.08rem;

          &_margin {
            margin-top: 0.25rem;
          }
        }

        .item-amount {
          font-size: @font-size-largest;
          color:@font-color-gray;
        }
      }

      &_list {
        background-color: @bg-white;

        &-title {
          font-size: @font-size-larger;
          padding: 0.3rem;
          border-bottom: 1px solid @line-color;
        }

        &-con {
          display: table;
          width: 100%;
          .list-item {
            clear:both;
            border-bottom: 1px solid @line-color;
            padding: 0.28rem 0.3rem 0.14rem;

            &_link {
              text-decoration: underline;
              color: @font-color-blue;
              float: right;
              margin-top: 0.06rem;
            }

            &_con {
              display: flex;
              width: 100%;
              margin-bottom: 0.22rem;
              &_title {
                margin-top: 0.42rem;
                color: @font-color-gray;
              }

              &_item {
                flex: 1;
              }

              .amount {
                font-size: @font-size-large;
              }
            }
          }
        }
      }
    }
    .user-search-nothing {
        text-align: center;
        padding-top: 25%;

        &__image-wrapper {
          margin-bottom: 0.84rem;
        }

        &__image {
          width: 2.8rem;
        }

        &__text-wrapper {
          color: @font-color-gray;
        }
      }
  }
</style>
