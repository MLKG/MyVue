<template>
<section>
  <div class="weekly" v-show="weeklyDetail">
    <div class="weekly-header">
      <div class="weekly-header__title">
        <h2>本周周报</h2>
        <p>{{weeklyDetail.weekTime}}</p>
      </div>
      <div class="weekly-header__con">
        <p>
          <span>{{userName}}</span>
          <span class="weekly-header__con_addr">所在机构　{{weeklyDetail.unitName}}</span>
          <img class="weekly-header__con_icon" src="../../../images/shop/news.png"/>
        </p>
      </div>
    </div>
    <div class="weekly_level">
      <div class="weekly_level_con">
        <span>本周数据</span>
        <div class="text-center">
          <div class="weekly_level_con_mark">{{weeklyDetail.currentArchive | currency}}</div>
          <div>本考核期内总计业绩</div>
          <div class="home-general__progress">
            <div class="home-general__progress_line">
              <div class="home-general__progress_height"></div>
              <div class="home-general__progress_yellow" :style="{'width': weeklyDetail.progress + 'rem'}"></div>
              <img class="radiu" src="../../../images/shop/home-radiu.png" :style="{'left': weeklyDetail.positionRadiu + 'rem'}"/>
              <!-- 中间的五星 -->
              <img class="active" src="../../../images/shop/home-active.png" v-show="weeklyDetail.isShowflag && weeklyDetail.maintainDistance === 0" />
              <img class="active" src="../../../images/shop/home-unactive.png" v-show="weeklyDetail.isShowflag && weeklyDetail.maintainDistance > 0" />
              <img class="level" src="../../../images/shop/home-one.png" v-if="weeklyDetail.rankLevel === 0" />
              <img class="level" src="../../../images/shop/home-two.png" v-if="weeklyDetail.rankLevel === 1" />
              <img class="level" src="../../../images/shop/home-three.png" v-if="weeklyDetail.rankLevel === 2" />
              <img class="level" src="../../../images/shop/home-four.png" v-if="weeklyDetail.rankLevel === 3" />
              <img class="level" src="../../../images/shop/home-five.png" v-if="weeklyDetail.rankLevel === 4" />
            </div>
          </div>
        </div>
        <div class="flex font-color-gray">
          <!-- 上期剩余业绩 -->
          <div class="item">
            <div class="font-size-large">{{weeklyDetail.lastRestArchive | currency}}</div>
            <div>上期剩余业绩</div>
          </div>

          <!-- 中间保星提示 -->
          <div class="item text-center" v-show="weeklyDetail.maintainDistance > 0 && weeklyDetail.isShowflag">
            <div class="font-size-large">{{weeklyDetail.maintainDistance | currency}}</div>
            <div class="font-bold">距离保持{{weeklyDetail.rankLevel | turnNum}}星</div>
          </div>
          <div class="item text-center" v-if="weeklyDetail.maintainDistance === 0 && weeklyDetail.isShowflag">
            <div class="font-bold">业绩已达成</div>
          </div>

          <!-- 右边状态提示 -->
          <div class="item text-right">
            <!-- 距离升星提示 -->
            <div v-if="weeklyDetail.rankLevel !== 5">
              <div>{{weeklyDetail.upgradeDistance | currency}}</div>
              <div>距离{{(weeklyDetail.rankLevel + 1) | turnNum}}星</div>
            </div>
            <div v-if="weeklyDetail.rankLevel === 5 && weeklyDetail.flag !== 2">
              <div>已达{{weeklyDetail.rankLevel | turnNum}}星</div>
            </div>
            <div class="font-size-large" v-if="weeklyDetail.rankLevel === 5 && weeklyDetail.flag === 2">
              <div>{{weeklyDetail.maintainDistance | currency}}</div>
              <div>距离保持{{weeklyDetail.rankLevel | turnNum}}星</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="weekly_amount">
      <div class="weekly_amount_con">
        <div class="mb-36">
          <span class="font-color-gray font-size-medium">新增定活通投资额</span>
          <span class="float-right font-size-large">{{weeklyDetail.dhtTotal}}</span>
        </div>
        <div class="mb-36">
          <span class="font-color-gray font-size-medium">新增磐石投资额</span>
          <span class="float-right font-size-large">{{weeklyDetail.psTotal}}</span>
        </div>
        <div class="mb-36">
          <span class="font-color-gray font-size-medium">上周新增注册客户</span>
          <span class="float-right font-size-large">{{weeklyDetail.register}}</span>
        </div>
        <div class="mb-36">
          <span class="font-color-gray font-size-medium">上周新增投资客户</span>
          <span class="float-right font-size-large">{{weeklyDetail.firstInvest}}</span>
        </div>
      </div>
      <div class="weekly_amount_leave">
        <div>
          <span>累计客户数目 {{weeklyDetail.investCount}}</span>
          <span class="float-right">
            <span v-show="weeklyDetail.rankLevel === 0">下次业绩折半时间</span>
            <span v-show="weeklyDetail.rankLevel === 0" class="font-color-red">{{weeklyDetail.nextReduceDate ? weeklyDetail.nextReduceDate.slice(0, 10) : ''}}</span>
            <span v-show="weeklyDetail.rankLevel > 0">下次考核时间</span>
            <span v-show="weeklyDetail.rankLevel > 0" class="font-color-red">{{weeklyDetail.nextCheckDate ? weeklyDetail.nextCheckDate.slice(0, 10) : ''}}</span>
          </span>
        </div>
        <div v-if="weeklyDetail.investorDistance && weeklyDetail.flag">
          <span class="font-color-red">(差{{weeklyDetail.investorDistance}}个{{weeklyDetail.startName}})</span>
        </div>
      </div>
    </div>
    <div class="gap"></div>
    <div class="weekly_remain">
      <div class="weekly_remain_header">
        客户维护
      </div>
      <div class="weekly_remain_con">
        <div class="weekly_remain_con" v-show="weeklyCustomer.showFlag === '0'">
          <div class="item" @click="gotoDetail('1')">
            <span class="weekly_remain_con_title">本周将所有产品清算客户</span>
            <span class="float-right">{{weeklyCustomer.cleanCount ? weeklyCustomer.cleanCount : 0}}</span>
          </div>
          <div class="item" @click="gotoDetail('2')">
            <span class="weekly_remain_con_title">上上周注册后尚未投资的客户</span>
            <span class="float-right">{{weeklyCustomer.noInvestCount ? weeklyCustomer.noInvestCount : 0}}</span>
          </div>
          <div class="item" @click="gotoDetail('3')">
            <span class="weekly_remain_con_title">上周有转让或产品到期的客户</span>
            <span class="float-right">{{weeklyCustomer.transferCount ? weeklyCustomer.transferCount : 0}}</span>
          </div>
          <div class="item" @click="gotoDetail('4')">
            <span class="weekly_remain_con_title">当前持有卡券</span>
            <span class="float-right">{{weeklyCustomer.cardCount ? weeklyCustomer.cardCount : 0}}</span>
          </div>
        </div>
      </div>
      <router-link to="/shop" class="weekly_old" v-show="weeklyCustomer.showFlag === '1'" >
        请进入网店查看客户数据
      </router-link>
    </div>
    <div class="gap"></div>
    <!-- <div class="weekly_remain">
      <div class="weekly_remain_header">
        活动资讯
      </div>
      <div class="weekly_remain_con">
        <div class="weekly_old" v-show="false">
            暂无活动数据
        </div>
        <div v-show="true">
          <div class="item">
            <div class="font-size-medium">
              <span class="font-color-red">[机构]</span>
              <span>山东机构新活动</span>
            </div>
            <div class="item_tip">5月新投手专项培训</div>
          </div>
          <div class="item">
            <div class="font-size-medium">
              <span class="font-color-red">[平台]</span>
              <span>山东机构新活动</span>
            </div>
            <div class="item_tip">5月新投手专项培训</div>
          </div>
        </div>
      </div>
    </div>
    <div class="gap"></div> -->
  </div>
  <div class="weekly-passed" v-show="!weeklyDetail">
    周报数据仅保留三个月 <br>业绩情况请进入星级网店查看
  </div>
</section>

</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return {
        positionRadiu: -0.14 + 3.45
      }
    },
    mounted () {
      this.getWeeklyDetail({date: this.$route.query.WEEKTIME})
      this.getWeeklyCustomer({date: this.$route.query.WEEKTIME})
    },
    computed: {
      ...mapGetters({
        weeklyDetail: 'shop/weekly/weeklyDetail',
        weeklyCustomer: 'shop/weekly/weeklyCustomer',
        userName: 'shop/weekly/userName'
      })
    },
    methods: {
      ...mapActions({
        getWeeklyDetail: 'shop/weekly/getDetail',
        getWeeklyCustomer: 'shop/weekly/getCustomer'
      }),
      gotoDetail (type) {
        if (type === '4') {
          window.location.href = window.location.origin + window.location.pathname.replace('vue/', '') + '#/my-coupon'
        } else if (type === '2') {
          this.$router.push('/shop/weeklynoinvest')
        } else {
          this.$router.push({path: '/shop/weeklydata', query: {type: type}})
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  .flex {
    display: flex;

    .item {
      flex: 1;
    }
  }

  .home-general {
    &__progress {
      position: relative;
      margin: .5rem 0;
      width: 6.3rem;
      // padding: 0 0.3rem;
      // height: 2.1rem;

      &_line {
        padding: 0.1rem 0;
      }

      &_height {
        height: 0.14rem;
        background-color: #f6f6f6;
        border-radius: 0.36rem;
        position: absolute;
        left: 0;
        right: 0;
      }

      &_yellow {
        height: 0.14rem;
        background-color: #ff7b08;
        border-radius: 0.36rem;
        position: absolute;
        // left: 0;
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
        left: 3.05rem;
      }

      & .level {
        height: 0.48rem;
        width: 0.48rem;
        position: absolute;
        top: -0.1rem;
        right: -.15rem;
      }

      &_amount {
        padding-top: 0.36rem;
        font-size: @font-size-largest;
      }
    }
  }

  .weekly {
    position: relative;
    &_old {
      padding: .8rem 0;
      text-align: center;
      .font-size-medium;
      .font-color-gray;
      display: block;
    }

    &-header {
      padding: 0.34rem 0.3rem 0;
      background-color: #efefef;
      height: 3rem;
      &__title {
        padding-left: .08rem;
        height: 1.3rem;
        h2 {
          margin: 0
        }
        p {
          margin-top: .1rem;
        }
      }

      &__con {
        border-top: 1px solid @line-color;
        padding-left: .05rem;
        position: relative;

        &_addr {
          position: absolute;
          right: 0;
          z-index: 9;
        }

        &_icon {
          position: absolute;
          width: 70%;
          top: -1.66rem;
          right: 0;
        }
      }
    }

    &_level {
      padding: 0 0.19rem;
      position: absolute;
      top: 20%;
      width: 95%;
      &_con{
        border: 1px solid @bg-gray-dark;
        box-shadow:0 0 .3rem #ddd;
        border-radius: 8px;
        padding: .3rem;
        background-color: #fff;

        &_mark {
          .font-color-red;
          .font-size-big;
          height: .6rem;
        }
      }
    }

    &_amount {
      background-color: #fff;
      padding: .34rem 0 0 .3rem;
      padding-top: 3.6rem;
      border-bottom: 1px solid @line-color;

      &_con {
        padding-right: .3rem;
        border-bottom: 1px solid @line-color;
      }

      &_leave {
        padding: .3rem .3rem .3rem 0;

      }
      .mb-36 {
        margin-bottom: 0.36rem;
      }
    }

    &_remain {
      background-color: #fff;
      border-top: 1px solid @line-color;
      border-bottom: 1px solid @line-color;

      &_header {
        padding: .25rem .3rem;
        .font-size-medium;
        border-bottom: 1px solid @line-color;
      }

      &_con {
        padding-left: .3rem;
        &_title {
          .font-color-gray;
          .font-size-medium;
        }

        .item {
          border-bottom: 1px solid @line-color;
          padding: .3rem .7rem .3rem 0;
          position: relative;

          &:after {
            top: 50%;
            margin-top: -.12rem;
            right: .24rem;
            border: 1px solid transparent;
            border-top-color: #ccc;
            border-right-color: #ccc;
            content: " ";
            height: .2rem;
            width: .2rem;
            position: absolute;
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
          }

          &:last-child {
            border-bottom: none;
          }

          &_tip {
            .font-color-gray;
            margin-top: .15rem;
            margin-left: .9rem;
          }
        }
      }
    }
  }

  .weekly-passed {
    padding-top: 3rem;
    text-align: center;
    color: @font-color-gray;
  }
</style>
