<template>
  <div class="income-detail">
    <div class="income-content">
      <div class="income-content_header">
        <div class="font-size-larger">
          {{ year }}年{{ month }}月投资总览
        </div>
        <img class="icon" src="../../../images/shop/cash-icon.png" />

        <!-- <div class="income-content_header_tip">
          <div class='item'>
            <div>定活通投资金额</div>
            <div class="amount">{{ zxInvestAmount.investAmount | currency }}</div>
          </div>
          <div class='item'>
            <div>磐石投资金额</div>
            <div class="amount">{{ psInvestAmount.investAmount | currency }}</div>
          </div>
        </div> -->
      </div>
    </div>
    <div class="nav-tabs">
      <div class="tab-item" :class="{'current': current === 'DHTDetail'}"  @click="selectedTab('DHTDetail')">
        <p>定活通收入详情</p>
        <p class="font-size-largest">￥{{ zxInvestAmount.investAmount | currency }}</p>
      </div>
      <div class="tab-item" :class="{'current': current === 'PSDetail'}"  @click="selectedTab('PSDetail')">
        <p>磐石收入详情</p>
        <p class="font-size-largest">￥{{ psInvestAmount.investAmount | currency }}</p>
      </div>
    </div>
    <div v-if="current === 'DHTDetail'">
      <div v-for="item in zxInvestList" >
        <div class="income-detail_time">{{item.investTime}}</div>
        <div class="income-detail_block">
          <div class="income-detail_block_con">
            <div class="income-detail_item">
              <div class="item">
                <div class="income-detail_item_name">{{item.userName}} <span class="font-color-gray font-size-small">{{item.phone}}</span></div>
              </div>
              <div class="item text-right">
                <div class="income-detail_item_name">{{item.productName}}</div>
              </div>
            </div>
            <div class="income-detail_item">
              <div class="item">
                <p class="font-color-gray">归属时未结算余额：{{item.unPay}}</p>
              </div>
              <div class="item text-right">
                <p class="font-color-gray">到期日：{{item.endTime}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="current === 'PSDetail'">
      <div v-for="item in psInvestList" >
        <div class="income-detail_time">{{item.investTime}}</div>
        <div class="income-detail_block">
          <div class="income-detail_block_con">
            <div class="income-detail_item">
              <div class="item">
                <div class="income-detail_item_name">{{item.userName}}</div>
              </div>
              <div class="item text-right">
                <div class="income-detail_item_name">{{item.productName}}</div>
              </div>
            </div>
            <div class="income-detail_item">
              <div class="item">
                <span class="font-color-gray font-size-small">{{item.phone}}</span>
                <span class="font-color-gray float-right">到期日：{{item.endTime}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="load-more font-size-large font-color-gray">{{tip}}</div>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex'

  export default {
    data () {
      return {
        dataStr: '',
        PSdataStr: '',
        year: '',
        month: '',
        current: 'DHTDetail'
      }
    },
    computed: {
      ...mapGetters({
        zxInvestAmount: 'shop/incomeDetail/zxInvestAmount',
        psInvestAmount: 'shop/incomeDetail/psInvestAmount',
        zxInvestList: 'shop/incomeDetail/zxInvestList',
        psInvestList: 'shop/incomeDetail/psInvestList',
        noMoreFlag: 'shop/incomeDetail/noMoreFlag',
        total: 'shop/incomeDetail/total'
      }),
      tip () {
        return !this.total ? '无产品信息' : !this.noMoreFlag ? '上拉加载更多' : '没有更多了'
      }
    },
    mounted () {
      this.resetStore()
      let date = this.$route.query.time
      this.year = date.slice(0, 4)
      this.month = parseInt(date.slice(5))
      this.getIncomeDetail({month: date}).then(res => {
        this.dataStr = res.zxInvestAmount.dateStr
        this.PSdataStr = res.psInvestAmount.dateStr
        this.getZxInvestList({date: this.dataStr})
      })
    },
    methods: {
      ...mapActions({
        getIncomeDetail: 'shop/incomeDetail/getIncomeDetail',
        getZxInvestList: 'shop/incomeDetail/getZxInvestList',
        getPsInvestList: 'shop/incomeDetail/getPsInvestList'
      }),
      ...mapMutations({
        resetStore: 'shop/incomeDetail/REST_INCOMEDETAIL_STORE'
      }),
      selectedTab (tab) {
        this.current = tab
        this.resetStore()

        if (tab === 'PSDetail') {
          this.getPsInvestList({date: this.dataStr})
        } else if (tab === 'DHTDetail') {
          this.getZxInvestList({date: this.PSdataStr})
        }
      },
      handleScroll () {
        if (!this.noMoreFlag && this._scrollToBottom()) {
          window.removeEventListener('scroll', this.handleScroll)
          if (this.current === 'DHTDetail') {
            this.getZxInvestList({date: this.dataStr})
          } else if (this.current === 'PSDetail') {
            this.getPsInvestList({date: this.dataStr})
          }
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
      zxInvestList () {
        window.addEventListener('scroll', this.handleScroll)
      },
      psInvestList () {
        window.addEventListener('scroll', this.handleScroll)
      }
    }
  }
</script>

<style lang="less">
  @import "../../../style/variables";

  .income-detail{
    .income-content {
      background-color: #ea544a;
      padding: 0.3rem;
      color: #fff;

      &_header {
        position: relative;

        .icon {
          position: absolute;
          right: -.3rem;
          width: 22%;
          bottom: -.26rem;
        }
      }
    }

    &_title {
      padding: 0.3rem;
      font-size:@font-size-largest;
      background-color: @bg-white;
      border-bottom: 1px solid @line-color;
    }

    &_time {
      padding:0.22rem 0.3rem;
      font-size: @font-size-large;
    }

    &_item {
      display: flex;
      width: 100%;

      &_name {
          font-size: @font-size-large;
          margin-bottom: 0.14rem;
        }
    }

    &_block {
      background-color: @bg-white;
      padding-left: .3rem;

      &_con {
        padding-top: .3rem;
        padding-right: .3rem;
        padding-bottom: .3rem;
        border-bottom: 1px solid @line-color;

        &:last-child {
          border: none;
        }
      }

      &:first-child {
        border-top: 1px solid @line-color;
      }

      &:last-child {
        border-bottom: 1px solid @line-color;
      }

      .item {
        flex: 1;
      }
    }

    p {
      margin: 0;
      padding: 0;
    }

    .nav-tabs {
      display: flex;
      width: 100%;
      line-height: 0.5rem;
      background-color: @bg-white;
      .tab-item {
        flex: 1;
        text-align: center;
        padding: .3rem 0;
        font-size: @font-size-medium;
        border-bottom: 1px solid @line-color;

        &.current {
          border-bottom: 1px solid @font-color-red;
          color: @font-color-red;
        }
      }
    }
  }

</style>
