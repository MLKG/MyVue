<template>
  <div @click="goMyStar()" v-if="starStore.isHaveData">
    <div class="gap"></div>
    <div class="home-general">
      <div class="home-general_title">
        <div class="font-size-medium">星级网店概况</div>
        <div class="font-size-small font-color-blue">查看详情</div>
      </div>
      <div class="home-general__flex">
        <div v-if="starStore.rankLevel === 0">
          <div>下次业绩折半日</div>
          <div class="home-general__flex_value">{{starStore.nextReduceDate}}</div>
        </div>
        <div v-if="starStore.rankLevel > 0">
          <div>下一考核日</div>
          <div class="home-general__flex_value">{{starStore.nextCheckDate}}</div>
        </div>
        <div>
          <div>累计投资客户数 {{starStore.investorCount}}</div>
          <div class="home-general__flex_value font-color-red text-right" v-if="starStore.investorDistance && starStore.flag">(还差{{starStore.investorDistance}}人{{starStore.investorStarName}})</div>
        </div>
      </div>
      <div class="home-general__progress">
        <div class="home-general__progress_img left" :style="{'left': 0.3 + 0.14 + starStore.progressValue + 'rem'}" v-if="starStore.isShowLeft">   <!-- 6.62为基数 -->
          <div class="home-general__progress_amount">{{starStore.totalArchive | currency}}</div>
          <div>当前业绩</div>
        </div>
        <div class="home-general__progress_img text-right right" :style="{'right': 0.3 + 0.14 + 6.62 - starStore.progressValue + 'rem'}" v-if="!starStore.isShowLeft"> <!-- 6.62为基数 -->
          <div class="home-general__progress_amount">{{starStore.totalArchive | currency}}</div>
          <div>当前业绩</div>
        </div>
        <div class="home-general__progress_line">
          <!-- 进度条 total 6.9rem -->
          <div class="home-general__progress_height"></div>
          <div class="home-general__progress_yellow" :style="{'right': 6.62 - starStore.progressValue + 'rem'}"></div>  <!-- 6.62为基数 -->
          <!-- 三角指向的圆点 -->
          <img class="radiu" src="../../../images/shop/home-radiu.png" :style="{'left': -0.14 + starStore.progressValue + 'rem'}" />   <!-- 6.62为基数 -->

          <!-- 中间的五星红旗 -->
          <img class="active" src="../../../images/shop/home-active.png" v-if="starStore.maintainDistance === 0 && starStore.isShowFlag" />
          <img class="active" src="../../../images/shop/home-unactive.png" v-if="starStore.maintainDistance > 0 && starStore.isShowFlag" />

          <!-- 重点的星级显示 -->
          <img class="level" src="../../../images/shop/home-one.png" v-if="starStore.rankLevel === 0" />
          <img class="level" src="../../../images/shop/home-two.png" v-if="starStore.rankLevel === 1" />
          <img class="level" src="../../../images/shop/home-three.png" v-if="starStore.rankLevel === 2" />
          <img class="level" src="../../../images/shop/home-four.png" v-if="starStore.rankLevel === 3" />
          <img class="level" src="../../../images/shop/home-five.png" v-if="starStore.rankLevel === 4 || starStore.rankLevel === 5" />
        </div>
      </div>
      <div class="home-general__flex home-general__flex_center">
        <!-- 上期剩余业绩 -->
        <div>
          <div>{{starStore.lastArchive | currency}}</div>
          <div class="home-general__flex_value">上期剩余业绩</div>
        </div>

        <!-- 保星提示 -->
        <div class="home-general__flex_middle" v-if="starStore.maintainDistance === 0 && starStore.isShowFlag">
          <div class="font-color-red">业绩已达成</div>
        </div>
        <div class="home-general__flex_middle" v-if="starStore.maintainDistance > 0 && starStore.isShowFlag">
          <div>{{ starStore.maintainDistance | currency }}</div>
          <div class="home-general__flex_value">距离保持{{ starStore.rankLevel | turnNum}}星</div>
        </div>

        <!-- 距离升星提示 -->
        <div class="text-right" v-if="starStore.rankLevel !== 5">
          <div>{{ starStore.upgradeDistance | currency }}</div>
          <div class="home-general__flex_value">距离{{ (starStore.rankLevel + 1) | turnNum}}星</div>
        </div>
        <div class="text-right" v-if="starStore.rankLevel === 5 && starStore.flag !== 2">
          <div>已达{{ starStore.rankLevel | turnNum}}星</div>
        </div>
        <div class="text-right" v-if="starStore.rankLevel === 5 && starStore.flag === 2">
          <div>{{ starStore.maintainDistance | currency }}</div>
          <div class="home-general__flex_value">距离保持{{ starStore.rankLevel | turnNum}}星</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        starStore: 'shop/home/starStore'
      })
    },
    methods: {
      goMyStar () {
        this.$router.push({path: '/shop/mystar'})
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  .home-general {
    background-color: @bg-white;
    position: relative;
    border-top: 1px solid @line-color;
    overflow: hidden;

    &_title {
      display: flex;
      justify-content: space-between;
      height: 0.9rem;
      align-items: center;
      padding: 0 0.3rem;
      border-bottom: 1px solid @line-color;
    }

    &__flex {
      display: flex;
      justify-content: space-between;
      padding: 0.3rem;
      height: 0.86rem;

      &_value {
        padding-top: 0.1rem;
      }

      &_center {
        padding-top: 0;
        align-items: center;
      }

      &_middle {
        padding-right: 0.4rem;
        text-align: center;
      }
    }

    &__progress {
      position: relative;
      padding: 0 0.3rem;
      height: 2.1rem;

      &_img {
        width: 2.9rem;
        height: 1.46rem;
        color: @font-color-white;
        position: absolute;
        top: 0;

        &.left{
          background: url('../../../images/shop/home-left.png') no-repeat;
          background-size: 100% 100%;

          div {
            padding-left: 0.15rem;
          }
        }

        &.right{
          background: url('../../../images/shop/home-right.png') no-repeat;
          background-size: 100% 100%;

          div {
            padding-right: 0.15rem;
          }
        }
      }

      &_line {
        position: relative;
        padding: 0.1rem 0;
        top: 1.6rem;
        margin: 0 0.14rem;
      }

      &_height {
        height: 0.14rem;
        background-color: #f6f6f6;
        border-radius: 0.15rem;
        position: absolute;
        left: 0;
        right: 0;
      }

      &_yellow {
        height: 0.14rem;
        background-color: #ff7b08;
        border-radius: 0.15rem;
        position: absolute;
        left: 0;
      }

      & .radiu {
        width: 0.28rem;
        height: 0.28rem;
        position: absolute;
        top: 0.03rem;
      }

      & .active{
        height: 0.36rem;
        width: 0.36rem;
        position: absolute;
        top: 0;
        left: 3.13rem;
      }

      & .level {
        height: 0.48rem;
        width: 0.48rem;
        position: absolute;
        top: -0.1rem;
        right: -0.14rem;
      }

      &_amount {
        padding-top: 0.15rem;
        font-size: @font-size-largest;
      }
    }
  }
</style>
