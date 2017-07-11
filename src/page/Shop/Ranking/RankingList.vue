<template>
  <div class="ranking-list">
    <div class="ranking-list__item" v-for="ranking in rankingList">
      <div class="ranking-list__item_ranking gray" :class="{'red': ranking.isMyself || ranking.rowNumber == 1, 'orange': ranking.rowNumber == 2, 'yellowish': ranking.rowNumber == 3}">
        {{ranking.rowNumber}}
      </div>
      <div class="ranking-list__item_name">{{ranking.mangerName}}</div>
      <div class="ranking-list__item_amount">{{ranking.amount | currency}}</div>
      <div class="ranking-list__item_shadow" v-if="ranking.isMyself"></div>
    </div>
    <div class="ranking-list_background"></div>
    <div class="ranking-list_background load-more font-size-large hide">{{tip}}</div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        tip: ''
      }
    },
    computed: {
      ...mapGetters({
        rankingList: 'shop/rank/rankingList'
      })
    },
    mounted () {
      if (this.rankingList && this.rankingList.length === 0) {
        this.tip = '无相关数据'
      }
    }
  }
</script>

<style lang="less">
  @import "../../../style/variables";

  .ranking-list {
    margin-top: .28rem;
    border-top: 1px solid @line-color;
    font-size: @font-size-medium;

    &__item {
      background-color: @bg-white;
      position: relative;
      z-index: 1;
      padding: .28rem;

      &_ranking {
        color: @font-color-white;
        min-width: .42rem;
        height: .448rem;
        display: inline-block;
        text-align: center;
        border-radius: .056rem;
        padding: 0 .028rem;

        &.red {
          background-color: @bg-red !important;
        }

        &.orange {
          background-color: @bg-orange !important;
        }

        &.yellowish {
          background-color: @bg-yellowish !important;
        }

        &.gray {
          background-color: @bg-gray;
        }
      }

      &_name {
        display: inline-block;
        margin-left: .112rem;
      }

      &_amount {
        position: absolute;
        right: .28rem;
        top: .28rem;
      }

      &_shadow {
        position: absolute;
        left: .14rem;
        right: .14rem;
        top: .07rem;
        bottom: .14rem;
        box-shadow: 0 .056rem .14rem .056rem @bg-gray;
      }
    }

    &_background {
      background-color: white;
      position: absolute;
      bottom: 0;
      top: 1.68rem;
      left: 0;
      right: 0;
      z-index: 0;
      max-width: 1080px;
      margin: 0 auto;
    }
  }
</style>
