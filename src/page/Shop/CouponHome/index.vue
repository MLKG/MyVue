<template>
  <div>
    <div class="coupon">
      <div class="coupon_header">
        <div class="coupon_header_wrap">
          <span class="font-size-big">{{ couponGeneral.cardCount }}</span>
          <span class="float-right">卡券使用率 {{ cardRateInt }}%</span>
        </div>
        <div class="coupon_header_wrap">
          <span>总卡券张数</span>
          <span class="float-right">名下客户卡券总使用张数 <span class="font-size-largest">{{ couponGeneral.cardUsed }}</span></span>
        </div>
      </div>
      <div class="coupon_invest">
        <div class="coupon_header_wrap">
          <span>带来名下客户总投资额　</span>
          <span class="font-size-largest">{{ couponGeneral.investAmount | currency }}</span>
        </div>
      </div>
    </div>
    <div class="coupon-list">
      <div class="coupon-list_title">
        每月卡券使用详情
      </div>
      <div class="coupon-list_wrap">
        <div class="item" v-for="item in couponList">
          <div class="item_title">
            <span>{{ item.year }}年{{ item.month }}月</span>
            <router-link :to="item.url" class="float-right font-color-blue">更多详情</router-link>
          </div>
          <div class="item_detail">
            <div class="item_detail_left">
              <div class="font-size-largest">{{ item.ownCard }}</div>
              <div class="font-color-gray title">所得卡券张数</div>
            </div>
            <div class="item_detail_middle">
              <div><span class="font-size-largest">{{ item.shareCard }}&nbsp;&nbsp;</span><span class="font-color-red">{{ item.cardUsed }}</span>张已使用</div>
              <div class="font-color-gray title">已分享卡券</div>
            </div>
            <div class="item_detail_right">
              <div class="font-size-largest amount">{{ item.investAmount | currency }}</div>
              <div class="font-color-gray title">带来名下客户投资额</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="load-more font-size-large font-color-gray">{{ tip }}</div>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        couponList: 'shop/couponHome/couponList',
        total: 'shop/couponHome/total',
        noMoreFlag: 'shop/couponHome/noMoreFlag',
        couponGeneral: 'shop/couponHome/couponGeneral'
      }),
      tip () {
        return !this.noMoreFlag ? '上拉加载更多' : '没有更多了'
      },
      cardRateInt () {
        return parseInt(this.couponGeneral.cardRate * 100)
      }
    },
    methods: {
      ...mapActions({
        couponsUsedDetail: 'shop/couponHome/couponsUsedDetail',
        couponUsedGeneral: 'shop/couponHome/couponUsedGeneral'
      }),
      ...mapMutations({
        reset: 'shop/couponHome/REST_COUPONSUSEDLIST'
      }),
      handleScroll () {
        if (!this.noMoreFlag && this._scrollToBottom()) {
          window.removeEventListener('scroll', this.handleScroll)
          this.couponsUsedDetail()
        }
      }
    },
    mounted () {
      this.reset()
      this.couponUsedGeneral()
      this.couponsUsedDetail()
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    watch: {
      couponList () {
        window.addEventListener('scroll', this.handleScroll)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  .coupon {
    padding: .3rem;
    background: #ea544a;
    .font-color-white;
    &_header {
      padding-bottom: .3rem;
      border-bottom: 1px solid @line-color;
      &_wrap {
        height: .5rem;
        line-height: .5rem;
      }
    }

    &_invest {
      padding-top: .3rem;
    }
  }

  .coupon-list {
    background: @bg-white;
    &_title {
      padding: .3rem;
      .font-size-large;
      border-bottom: 1px solid @line-color;
    }

    &_wrap {
      padding-left: .3rem;
      border-bottom: 1px solid @line-color;
      .item {
        padding-right: .3rem;
        border-bottom: 1px solid @line-color;

        &:last-child {
          border-bottom: none;
        }

        &_title {
          padding: .3rem 0;
        }

        &_detail {
          display: flex;
          width: 100%;
          padding-bottom: .3rem;
          .title {
            padding-top: .1rem;
            .font-size-smallest;
          }

          &_left {
            flex: 0 0 28%;
            border-right: 1px solid @line-color;
          }

          &_middle {
            flex: 0 0 35%;
            padding-left: .3rem;
          }

          &_right {
            flex: 0 0 auto;

            .amount {
              text-align: right;
            }
          }
        }
      }
    }
  }
</style>
