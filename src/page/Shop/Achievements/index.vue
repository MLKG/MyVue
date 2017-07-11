<template>
  <div>
    <div class="item" v-for="item in list">
      <p class="date">{{ item.startYear }}年{{ item.startMonth }}月至{{ item.endYear }}年{{ item.endMonth }}月</p>
      <div class="top">
        <div class="left">
          <p class="amount">{{ item.totalArchive | currency }}</p>
          <p class="title">考核总累计业绩</p>
        </div>
        <div class="right">
          <p>
            <img v-show="item.starState === 1" class="icon" src="../../../images/shop/shengxing.png">
            <img v-show="item.starState === 2" class="icon" src="../../../images/shop/baoxing.png">
            <img v-show="item.starState === 3" class="icon" src="../../../images/shop/jiangxing.png">
            {{ item.starMsg }}
          </p>
        </div>
      </div>
      <div class="line">
        <div class="empty"></div>
        <div class="dark"></div>
      </div>
      <div class="bottom">
        <div class="left">
          <p class="amount">{{ item.lastRestArchive | currency }}</p>
          <p>上半自然年度剩余</p>
        </div>
        <div class="center">
          <p class="amount">{{ item.halfDhtArchive | currency }}</p>
          <p>定活通累计</p>
        </div>
        <div class="right">
          <p class="amount">{{ item.halfPsArchive | currency }}</p>
          <p>磐石累计</p>
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
        list: 'shop/achievements/achievementList',
        total: 'shop/achievements/total',
        noMoreFlag: 'shop/achievements/noMoreFlag'
      }),
      tip () {
        return !this.noMoreFlag ? '上拉加载更多' : '没有更多了'
      }
    },
    methods: {
      ...mapActions({
        starLevel: 'shop/achievements/starLevel'
      }),
      ...mapMutations({
        reset: 'shop/achievements/REST_ACHIEVEMENTLIST'
      }),
      handleScroll () {
        if (!this.noMoreFlag && this._scrollToBottom()) {
          window.removeEventListener('scroll', this.handleScroll)
          this.starLevel()
        }
      }
    },
    mounted () {
      this.reset()
      this.starLevel()
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    watch: {
      list () {
        window.addEventListener('scroll', this.handleScroll)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  p.date {
    padding-left: .3rem;
  }

  .top {
    padding: .3rem;
    display: table;
    width: 6.9rem;
    border-top: 1px solid @line-color;
    background: @bg-white;

    .left,
    .right {
      display: table-cell;
      width: 50%;
    }

    .right {
      vertical-align: middle;
      text-align: right;
    }

    p.amount {
      font-size: @font-size-large;
      margin-top: 0;
      margin-bottom: .2rem;
    }

    p.title {
      margin: 0;
    }

    .icon {
      margin-right: .13rem;
      vertical-align: middle;
      width: .25rem;
      position: relative;
      bottom: .02rem;
    }
  }

  .line {
    height: 1px;
    display: table;
    width: 100%;

    .empty {
      background: #fff;
      height: 100%;
      display: table-cell;
      width: .3rem;
    }

    .dark {
      background: @line-color;
      height: 90%;
      display: table-cell;
      width: 7.2rem;
    }
  }

  .bottom {
    padding: .3rem;
    display: table;
    width: 6.9rem;
    border-bottom: 1px solid @line-color;
    background: @bg-white;

    .left,
    .center,
    .right {
      display: table-cell;
      color: @font-color-gray;
      font-size: @font-size-smaller;

      p {
        margin: 0;
      }

      p.amount {
        margin-bottom: .15rem;
      }
    }

    .left {
      width: 35%;
    }

    .center {
      text-align: center;
      width: 40%;
    }

    .right {
      text-align: right;
    }
  }
</style>
