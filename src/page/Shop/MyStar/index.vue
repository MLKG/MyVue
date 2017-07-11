<template>
  <div>
    <div class="bg" :class="bgClass">
      <div class="avatar">
        <div class="avatar-in">
          <img :src="avatarPath">
        </div>
      </div>
      <div class="title-bg" :class="titleClass"></div>
      <p class="name">{{ userInfo.displayName }}</p>
    </div>
    <div class="info">
      <div class="counter">
        <p class="total">{{ starInfo.totalArchive | currency }}</p>
        <p>本考核期内总业绩（{{ startDate }} - {{ endDate }}）= </p>
        <table>
          <tr>
            <td class="bold" width="34%">{{ starInfo.lastArchive | currency }}</td>
            <td></td>
            <td class="bold" width="26%">{{ starInfo.dhtArchive | currency }}</td>
            <td></td>
            <td class="bold">{{ starInfo.psArchive | currency }}</td>
          </tr>
          <tr>
            <td>上期剩余业绩</td>
            <td>+</td>
            <td>定活通累计</td>
            <td>+</td>
            <td>磐石累计</td>
          </tr>
        </table>
      </div>
      <div class="list">
        <p><span>距离下一星级所需业绩</span><span class="number">{{ starInfo.upgradeDistance | currency }}</span></p>
        <p v-show="starInfo.rankLevel > 0"><span>距离保星所需业绩</span><span class="number">{{ starInfo.maintainDistance | currency }}</span></p>
        <p><span>累计投资客户数</span><span class="number">{{ starInfo.investorCount }}<span v-show="localFlag && localInvestorDistance" class="red">&nbsp;(还差{{ localInvestorDistance }}人{{ starState }}星)</span></span></p>
      </div>
    </div>
    <div class="view-history">
      <router-link to="/shop/achievements"><p>查看过往业绩</p></router-link>
    </div>
    <div class="gap"></div>
    <div class="coupons">
      <p>当前卡券使用状况</p>
      <p v-show="starInfo.rankLevel === 0" class="no-coupons">您尚未成为星级理财师，暂无卡券</p>
      <table v-show="starInfo.rankLevel > 0">
        <tr>
          <td class="number">{{ couponInfo.currentCount }}</td>
          <td class="number">{{ couponInfo.shareCount }}</td>
        </tr>
        <tr>
          <td class="title">当前持有星级专享卡券</td>
          <td class="title">已分享未使用卡券</td>
        </tr>
      </table>
    </div>
    <div class="buttons" v-show="starInfo.rankLevel > 0">
      <a v-if="couponInfo.currentCount > 0" @click="shareCoupon()" class="share-btn">分享卡券</a>
      <a v-else class="share-btn disabled">分享卡券</a>
      <router-link to="/shop/couponhome" class="view-btn">查看使用状况</router-link>
    </div>
    <div class="gap"></div>
    <div class="prerogatives">
      <p class="title">- 星级特权 -</p>
      <div class="item">
        <div class="icon">
          <img v-if="starInfo.cardPrivilege === 1" src="../../../images/shop/prerogative-coupon-light.png">
          <img v-else src="../../../images/shop/prerogative-coupon-dark.png">
        </div>
        <div class="content">
          <p class="tle">卡券特权<span v-show="starInfo.cardPrivilege === 0">（一星解锁）</span></p>
          <p class="des">获返现红包，赚额外收益</p>
        </div>
        <div v-show="starInfo.cardPrivilege === 0" class="lock">
          <img src="../../../images/shop/lock.png">
        </div>
      </div>
      <div class="item">
        <div class="icon">
          <img v-if="starInfo.holidayPrivilege === 1" src="../../../images/shop/prerogative-holiday-light.png">
          <img v-else src="../../../images/shop/prerogative-holiday-dark.png">
        </div>
        <div class="content">
          <p class="tle">节假日特权<span v-show="starInfo.holidayPrivilege === 0">（二星解锁）</span></p>
          <p class="des">缤纷实用礼，钱包不休假</p>
        </div>
        <div v-show="starInfo.holidayPrivilege === 0" class="lock">
          <img src="../../../images/shop/lock.png">
        </div>
      </div>
      <div class="item">
        <div class="icon">
          <img v-if="starInfo.dressUpPrivilege === 1" src="../../../images/shop/prerogative-dress-light.png">
          <img v-else src="../../../images/shop/prerogative-dress-dark.png">
        </div>
        <div class="content">
          <p class="tle">装扮特权<span v-show="starInfo.dressUpPrivilege === 0">（三星解锁）</span></p>
          <p class="des">装扮精彩网店，彰显尊贵身份</p>
        </div>
        <div v-show="starInfo.dressUpPrivilege === 0" class="lock">
          <img src="../../../images/shop/lock.png">
        </div>
      </div>
      <div class="item">
        <div class="icon">
          <img v-if="starInfo.servicePrivilege === 1" src="../../../images/shop/prerogative-customer-light.png">
          <img v-else src="../../../images/shop/prerogative-customer-dark.png">
        </div>
        <div class="content">
          <p class="tle">客服特权<span v-show="starInfo.servicePrivilege === 0">（四星解锁）</span></p>
          <p class="des">专属贴心客服，便捷优质服务</p>
        </div>
        <div v-show="starInfo.servicePrivilege === 0" class="lock">
          <img src="../../../images/shop/lock.png">
        </div>
      </div>
      <router-link to="/starSystem"><p class="instruction">星级特权体系说明</p></router-link>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import avatarImg from '../../../images/shop/avatar.png'

  export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters({
        userInfo: 'userInfo',
        starInfo: 'shop/myStar/starInfo',
        couponInfo: 'shop/myStar/couponInfo',
        wechatImg: 'shop/myStar/wechatImg'
      }),
      localFlag () {
        if (this.starInfo.totalArchive < this.starInfo.minInvestAmount || this.starInfo.investorCount < this.starInfo.investorMin) {
          return 2
        } else {
          return this.starInfo.flag
        }
      },
      localInvestorDistance () {
        if (this.starInfo.totalArchive < this.starInfo.minInvestAmount || this.starInfo.investorCount < this.starInfo.investorMin) {
          return (this.starInfo.investorMin - this.starInfo.investorCount) > 0 ? (this.starInfo.investorMin - this.starInfo.investorCount) : 0
        } else {
          return this.starInfo.investorDistance
        }
      },
      bgClass () {
        if (this.starInfo.rankLevel === 0 || this.starInfo.rankLevel === 1) {
          return 'level1'
        } else {
          return 'level' + this.starInfo.rankLevel
        }
      },
      titleClass () {
        if (this.starInfo.rankLevel === 0) {
          if (this.starInfo.investorCount < 2) {
            return 'level00'
          } else {
            return 'level0'
          }
        } else {
          return 'level' + this.starInfo.rankLevel
        }
      },
      startDate () {
        if (this.starInfo.checkStartDate) {
          var arr = this.starInfo.checkStartDate.split('-')
          return arr[0] + '/' + arr[1]
        } else {
          return ''
        }
      },
      endDate () {
        if (this.starInfo.checkStartDate) {
          var arr = this.starInfo.checkEndDate.split('-')
          return arr[0] + '/' + arr[1]
        } else {
          return ''
        }
      },
      starState () {
        if (this.localFlag === 1 || this.starInfo.rankLevel === 0) {
          return '升'
        } else if (this.localFlag === 2) {
          return '保'
        }
      },
      avatarPath () {
        return this.wechatImg ? this.wechatImg : avatarImg
      }
    },
    methods: {
      ...mapActions({
        getGeneral: 'shop/myStar/general'
      }),
      shareCoupon () {
        window.location.href = window.location.origin + window.location.pathname.replace('vue/', '') + '#/my-coupon'
      }
    },
    mounted () {
      this.getGeneral()
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  .bg {
    height: 3.5rem;
    padding-top: .5rem;
  }

  .bg.level1 {
    background-image: url(../../../images/shop/bg-star-1.png);
    background-size: 100% 100%;
  }

  .bg.level2 {
    background-image: url(../../../images/shop/bg-star-2.png);
    background-size: 100% 100%;
  }

  .bg.level3 {
    background-image: url(../../../images/shop/bg-star-3.png);
    background-size: 100% 100%;
  }

  .bg.level4 {
    background-image: url(../../../images/shop/bg-star-4.png);
    background-size: 100% 100%;
  }

  .bg.level5 {
    background-image: url(../../../images/shop/bg-star-5.png);
    background-size: 100% 100%;
  }

  .avatar {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 1.6rem;
    margin: auto;
    background: #fff;

    .avatar-in {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 1.5rem;
      margin: auto;
      position: relative;
      top: .05rem;
      overflow: hidden;

      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }

  .title-bg {
    width: 3rem;
    height: 1.1rem;
    margin: -.5rem auto 0;
    position: relative;
  }

  .title-bg.level00 {
    background-image: url('../../../images/shop/star-title-00.png');
    background-size: 100% 100%;
  }

  .title-bg.level0 {
    background-image: url('../../../images/shop/star-title-0.png');
    background-size: 100% 100%;
  }

  .title-bg.level1 {
    background-image: url('../../../images/shop/star-title-1.png');
    background-size: 100% 100%;
  }

  .title-bg.level2 {
    background-image: url('../../../images/shop/star-title-2.png');
    background-size: 100% 100%;
  }

  .title-bg.level3 {
    background-image: url('../../../images/shop/star-title-3.png');
    background-size: 100% 100%;
  }

  .title-bg.level4 {
    background-image: url('../../../images/shop/star-title-4.png');
    background-size: 100% 100%;
  }

  .title-bg.level5 {
    background-image: url('../../../images/shop/star-title-5.png');
    background-size: 100% 100%;
  }

  .name {
    text-align: center;
    color: #fff;
    font-size: @font-size-large;
    font-weight: bold;
    margin-top: 0;
    margin-top: -.17rem;
  }

  .info {
    background: @bg-white;
    padding-top: 2.2rem;
    position: relative;

    .counter {
      position: absolute;
      width: 6.58rem;
      top: -.8rem;
      left: .11rem;
      background: @bg-white;
      border-radius: 5px;
      box-shadow: 0 0 10px #ccc;
      padding: .35rem;

      .total {
        font-size: @font-size-larger;
        color: @font-color-red;
        margin: 0;
      }

      .bold {
        font-weight: bold;
      }

      table {
        width: 100%;
      }
    }

    .list {
      padding: .3rem;

      .number {
        float: right;
      }

      .red {
        color: @font-color-red;
      }
    }
  }

  .view-history {
    background: @bg-white;
    text-align: center;
    padding: .3rem;
    border-top: 1px solid @line-color;
    border-bottom: 1px solid @line-color;

    p {
      margin: 0;
      font-size: @font-size-medium;
    }
  }

  .coupons {
    background: @bg-white;
    padding: .3rem;
    border-top: 1px solid @line-color;
    border-bottom: 1px solid @line-color;

    .no-coupons {
      text-align: center;
      font-size: @font-size-medium;
      color: @font-color-gray;
    }

    table {
      width: 100%;

      .number {
        width: 33%;
        font-size: @font-size-largest;
      }

      .title {
        color: @font-color-gray;
      }
    }
  }

  .buttons {
    display: table;
    width: 100%;
    background: @bg-white;

    .share-btn,
    .view-btn {
      display: table-cell;
      text-align: center;
      padding: .25rem;
      width: 50%;
      font-size: @font-size-medium;
      border-bottom: 1px solid @line-color;
    }

    .share-btn {
      border-right: 1px solid @line-color;
      color: @font-color-red;
    }

    .share-btn.disabled {
      color: @font-color-gray;
    }
  }

  .prerogatives {
    background: @bg-white;
    border-top: 1px solid @line-color;

    .title {
      margin: 0;
      padding: .3rem;
      text-align: center;
      font-size: @font-size-medium;
    }

    .instruction {
      margin: 0;
      padding: .3rem;
      text-align: center;
      color: @font-color-blue;
      border-top: 1px solid @line-color;
    }

    .item {
      border-top: 1px solid @line-color;
      display: table;
      width: 100%;

      .icon,
      .context,
      .lock {
        display: table-cell;
      }

      .icon,
      .lock {
        width: 1.5rem;
        text-align: center;
        vertical-align: middle;

        img {
          width: .7rem;
        }
      }

      .content {
        .tle {
          font-size: @font-size-medium;
          margin-bottom: 0;
        }

        .des {
          margin-top: .1rem;
          color: @font-color-gray;
        }
      }
    }
  }
</style>
