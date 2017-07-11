<template>
  <div class="weekly-data">
    <div class="gap"></div>
    <div class="no-data" v-show="!cleanList.length">
      <img src="../../../images/shop/no-result.png">
      <p>暂无数据</p>
    </div>
    <div class="wrapper" v-show="cleanList.length">
      <div class="weekly-data_wrap" v-for="item in cleanList" v-show="type === '1'">
        <div class="weekly-data_wrap_title">
          {{item.userName}} {{item.loginName}}
        </div>
        <div class="weekly-data_wrap_detail">
          <div class="item">
            <span class="item_title">投资产品</span>
            <span class="float-right">{{item.productName}}</span>
          </div>
          <div class="item">
            <span class="item_title">投资金额</span>
            <span class="float-right font-color-red">{{item.investAmount | currency}}</span>
          </div>
          <div class="item">
            <span class="item_title">使用卡券</span>
            <span class="float-right ">{{item.cardType | couponName}} {{item.cardAmount}}</span>
          </div>
          <div class="item">
            <span class="item_title">到期时间</span>
            <span class="float-right ">{{item.endTime}}</span>
          </div>
          <div class="item">
            <span class="item_title">清算时间</span>
            <span class="float-right ">{{item.endDate}}</span>
          </div>
        </div>
      </div>
      <div class="weekly-data_wrap" v-for="item in transferList" v-show="type === '3'">
        <div class="weekly-data_wrap_title">
          {{item.userName}} {{item.loginName}}
        </div>
        <div class="weekly-data_wrap_detail">
          <div class="item">
            <span class="item_title">投资产品</span>
            <span class="float-right">{{item.productName}}</span>
          </div>
          <div class="item">
            <span class="item_title">投资金额</span>
            <span class="float-right font-color-red">{{item.investAmount | currency}}</span>
          </div>
           <div class="item" v-show="item.transferTime">
            <span class="item_title">剩余投资金额</span>
            <span class="float-right ">{{item.investAmount | currency}}</span>
          </div>
          <div class="item">
            <span class="item_title">使用卡券</span>
            <span class="float-right ">{{item.cardType | couponName}} {{item.cardAmount}}</span>
          </div>
          <div class="item" v-show="item.transferTime">
            <span class="item_title">转让日期</span>
            <span class="float-right ">{{item.transferTime}}</span>
          </div>
          <div class="item" v-show="!item.transferTime || item.earlyEndTime">
            <span class="item_title">到期时间</span>
            <span class="float-right ">{{item.endDate}}</span>
          </div>
          <div class="item" v-show="!item.transferTime">
            <span class="item_title">清算时间</span>
            <span class="float-right ">{{item.endDate}}</span>
          </div>
          <div class="item" v-show="item.earlyEndTime">
            <span class="item_title">提前清算时间</span>
            <span class="float-right">{{item.earlyEndTime}}</span>
          </div>
        </div>
      </div>
      <div class="gap"></div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return {
        type: 1
      }
    },
    mounted () {
      this.type = this.$route.query.type
      this.getWeeklyCustomer()
    },
    computed: {
      ...mapGetters({
        cleanList: 'shop/weekly/cleanList',
        transferList: 'shop/weekly/transferList'
      })
    },
    methods: {
      ...mapActions({
        getWeeklyCustomer: 'shop/weekly/getCustomer'
      })
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  .no-data {
    text-align: center;
    margin-top: 30%;
  }

  .weekly-data {
    &_wrap {
      background: @bg-white;
      padding-left: .3rem;
      border-top: 1px solid @line-color;
      border-bottom: 1px solid @line-color;

      &_title {
        border-bottom: 1px solid @line-color;
        padding: .3rem 0;
      }

      &_detail {
        padding: .3rem .3rem 0 0;

        .item {
          padding-bottom: .2rem;
          &_title {
            .font-color-gray;
          }
        }
      }
    }
  }
</style>
