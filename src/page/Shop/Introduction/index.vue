<template>
  <div>
    <div class="content">
      <p class="red-title">业绩要求</p>
      <table class="graph">
        <tr class="cols">
          <td :class="{ current: rankLevel === 1 }">
            <div class="col col1">
              <div class="icon"><img :src="avatarPath"></div>
            </div>
            <div class="line"></div>
          </td>
          <td :class="{ current: rankLevel === 2 }">
            <div class="col col2">
              <div class="icon"><img :src="avatarPath"></div>
            </div>
            <div class="line"></div>
          </td>
          <td :class="{ current: rankLevel === 3 }">
            <div class="col col3">
              <div class="icon"><img :src="avatarPath"></div>
            </div>
            <div class="line"></div>
          </td>
          <td :class="{ current: rankLevel === 4 }">
            <div class="col col4">
              <div class="icon"><img :src="avatarPath"></div>
            </div>
            <div class="line"></div>
          </td>
          <td :class="{ current: rankLevel === 5 }">
            <div class="col col5">
              <div class="icon"><img :src="avatarPath"></div>
            </div>
            <div class="line"></div>
          </td>
        </tr>
        <tr class="star">
          <td>一星</td>
          <td>二星</td>
          <td>三星</td>
          <td>四星</td>
          <td>五星</td>
        </tr>
        <tr>
          <td>{{ rankList[1].minInvestAmount }}万元</td>
          <td>{{ rankList[2].minInvestAmount }}万元</td>
          <td>{{ rankList[3].minInvestAmount }}万元</td>
          <td>{{ rankList[4].minInvestAmount }}万元</td>
          <td>{{ rankList[5].minInvestAmount }}万元</td>
        </tr>
        <tr>
          <td>{{ rankList[1].minInvestCount }}人</td>
          <td>{{ rankList[2].minInvestCount }}人</td>
          <td>{{ rankList[3].minInvestCount }}人</td>
          <td>{{ rankList[4].minInvestCount }}人</td>
          <td>{{ rankList[5].minInvestCount }}人</td>
        </tr>
      </table>
      <p class="red-title">升星与保星现金奖励</p>
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>升星奖励（仅第一次）</th>
            <th>保星奖励</th>
          </tr>
        </thead>
        <tbody>
          <tr :class="{ current: rankLevel === 1 }">
            <th>一星</th>
            <td>￥{{ rankList[1].upgrade }}</td>
            <td>￥{{ rankList[1].maintain }}</td>
          </tr>
          <tr :class="{ current: rankLevel === 2 }">
            <th>二星</th>
            <td>￥{{ rankList[2].upgrade }}</td>
            <td>￥{{ rankList[2].maintain }}</td>
          </tr>
          <tr :class="{ current: rankLevel === 3 }">
            <th>三星</th>
            <td>￥{{ rankList[3].upgrade }}</td>
            <td>￥{{ rankList[3].maintain }}</td>
          </tr>
          <tr :class="{ current: rankLevel === 4 }">
            <th>四星</th>
            <td>￥{{ rankList[4].upgrade }}</td>
            <td>￥{{ rankList[4].maintain }}</td>
          </tr>
          <tr :class="{ current: rankLevel === 5 }">
            <th>五星</th>
            <td>￥{{ rankList[5].upgrade }}</td>
            <td>￥{{ rankList[5].maintain }}</td>
          </tr>
        </tbody>
      </table>
      <p class="red-title">卡券特权（返现红包）</p>
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th v-for="item in hongbaoTypes">￥{{ item }}</th>
          </tr>
        </thead>
        <tbody>
          <tr :class="{ current: rankLevel === 1 }" v-if="hongbaoList[1]">
            <th>一星</th>
            <td v-for="(item, index) in hongbaoTypes">{{ hongbaoList[1][index] || 0 }}张</td>
          </tr>
          <tr :class="{ current: rankLevel === 2 }" v-if="hongbaoList[2]">
            <th>二星</th>
            <td v-for="(item, index) in hongbaoTypes">{{ hongbaoList[2][index] || 0 }}张</td>
          </tr>
          <tr :class="{ current: rankLevel === 3 }" v-if="hongbaoList[3]">
            <th>三星</th>
            <td v-for="(item, index) in hongbaoTypes">{{ hongbaoList[3][index] || 0 }}张</td>
          </tr>
          <tr :class="{ current: rankLevel === 4 }" v-if="hongbaoList[4]">
            <th>四星</th>
            <td v-for="(item, index) in hongbaoTypes">{{ hongbaoList[4][index] || 0 }}张</td>
          </tr>
          <tr :class="{ current: rankLevel === 5 }" v-if="hongbaoList[5]">
            <th>五星</th>
            <td v-for="(item, index) in hongbaoTypes">{{ hongbaoList[5][index] || 0 }}张</td>
          </tr>
        </tbody>
      </table>
      <p class="red-title">其他特权</p>
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>节假日特权</th>
            <th width="20%">装扮</th>
            <th width="20%">勋章</th>
            <th width="20%">专属客服</th>
          </tr>
        </thead>
        <tbody>
          <tr :class="{ current: rankLevel === 1 }">
            <th>一星</th>
            <td>卡券</td>
            <td>无</td>
            <td>无</td>
            <td>无</td>
          </tr>
          <tr :class="{ current: rankLevel === 2 }">
            <th>二星</th>
            <td>卡券</td>
            <td>白银</td>
            <td>无</td>
            <td>无</td>
          </tr>
          <tr :class="{ current: rankLevel === 3 }">
            <th>三星</th>
            <td>卡券</td>
            <td>黄金</td>
            <td>三星</td>
            <td>无</td>
          </tr>
          <tr :class="{ current: rankLevel === 4 }">
            <th>四星</th>
            <td>卡券</td>
            <td>白金</td>
            <td>四星</td>
            <td>有</td>
          </tr>
          <tr :class="{ current: rankLevel === 5 }">
            <th>五星</th>
            <td>卡券</td>
            <td>钻石</td>
            <td>五星</td>
            <td>有</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="intro">
      <p class="intro-title">- 管理说明 -</p>
      <p>1. 星级理财师体系是为回馈广大平台理财师，同时帮助各理财师进一步发展业务而建立的体系；</p>
      <p>2. 累计投资客户数：理财师名下有真实投资的客户（含理财师本人）；累计标准业绩：前日累计标准业绩+昨日的磐石实际投资金额*磐石折标系数+昨日的众享累计日均余额；</p>
      <p>3. 平台半个自然年度年为一个考核期，并设有考核日，每年6月30日与12月31日为平台考核日；</p>
      <p>4. 理财师的线上网店达到一定的累计投资客户数与累计标准业绩，将可以升星并获得升星奖励，升星后第一个考核日可暂不接受考核，并在第二个考核日之前享受当前星级特权；第二个考核日，理财师将接受平台考核；</p>
      <p>5. 升星奖励仅限领取一次，例：理财师达成三星级并已领取三星级升星奖励，考核后未保星成功降至二星，此后又升至三星级，此时该理财师不再享受升星奖励；</p>
      <p>6. 考核日当日24时对理财师个人网店累计投资客户数与累计标准业绩进行考核，符合当前星级要求则获得保星奖励，下一个考核日前享受当前星级特权；</p>
      <p>7. 若无法达成当前星级网店标准，则会按照考核期结束时实际累计标准业绩与累计投资客户数进行降星，降星时无任何星级奖励，下一考核日前，享受降星后的星级特权；</p>
      <p>8. 每月1日0时，星级网店将收到返现红包，可登陆卡券中心进行查看，当月卡券的到期日为当月月底最后一天23:59:59；</p>
      <p>9. 每年1月1日与7月1日的0时将对网店累计标准业绩进行折半，例：某三星投手累计标准业绩为140万元，将在此时折半为70万元，并以70万元累计标准业绩为起点重新累计；</p>
      <p>10. 其他星级理财师特权敬请期待。</p>
      <p>以上体系解释权归普益投所有，如有疑问请致电4008588588联系客服。</p>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import avatarImg from '../../../images/shop/avatar.png'

  export default {
    computed: {
      ...mapGetters({
        userInfo: 'userInfo',
        starInfo: 'shop/starSystem/starInfo',
        rankList: 'shop/starSystem/rankList',
        hongbaoTypes: 'shop/starSystem/hongbaoTypes',
        hongbaoList: 'shop/starSystem/hongbaoList',
        wechatImg: 'shop/starSystem/wechatImg'
      }),
      rankLevel () {
        return this.$route.query.rankLevel ? Number(this.$route.query.rankLevel) : this.starInfo.rankLevel
      },
      avatarPath () {
        return this.$route.query.avatar ? this.$route.query.avatar : this.wechatImg ? this.wechatImg : avatarImg
      }
    },
    methods: {
      ...mapActions({
        starSystem: 'shop/starSystem/starSystem'
      })
    },
    mounted () {
      this.starSystem()
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  .content {
    padding: .32rem;
    background: @bg-white;
  }

  .intro {
    padding: .32rem;
  }

  .intro-title {
    text-align: center;
    font-size: @font-size-medium;
    font-weight: bold;
  }

  .red-title {
    display: inline-block;
    color: @font-color-white;
    background: @bg-red;
    padding: .12rem .18rem;
    border-radius: 5px;
    font-weight: bold;
    margin-bottom: .2rem;
  }

  table.table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: .6rem;
    border: 1px solid @line-color;

    th {
      font-weight: normal;
    }

    thead > tr > th {
      background: #eee;
    }

    tbody > tr.current {
      box-shadow: 0 0 15px @line-color;
    }

    th,
    td {
      border: 1px solid @line-color;
      border-left: none;
      border-right: none;
      text-align: center;
      padding-top: .15rem;
      padding-bottom: .15rem;
    }
  }

  table.graph {
    border-collapse: collapse;
    width: 100%;
    margin-top: .5rem;
    margin-bottom: .6rem;

    td {
      text-align: center;
    }

    .star {
      font-weight: bold;
      td {
        padding-top: .12rem;
        padding-bottom: .12rem;
      }
    }

    .icon {
      display: none;
    }

    .current {
      .col {
        background: @bg-red;
      }

      .icon {
        display: block;
        top: -1rem;
        left: -.13rem;
        border: 2px solid #c5a16e;
        width: .7rem;
        border-radius: .7rem;
        overflow: hidden;
      }

      img {
        width: .7rem;
        height: .7rem;
      }
    }

    tr.cols {
      vertical-align: bottom;

      td {
        font-size: 0;
      }

      .line {
        width: 105%;
        height: 1px;
        background: #d6d6d6;
      }
    }

    .col {
      background: #d6d6d6;
      display: inline-block;
      text-align: center;
      width: .5rem;
      position: relative;

      .icon {
        position: absolute;
      }
    }

    .col1 {
      height: .3rem;
    }

    .col2 {
      height: .6rem;
    }

    .col3 {
      height: 1.05rem;
    }

    .col4 {
      height: 2.05rem;
    }

    .col5 {
      height: 3.3rem;
    }
  }
</style>
