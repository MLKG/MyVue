<template>
  <div>
    <div class="no-data" v-show="!noInvestList.length">
      <img src="../../../images/shop/no-result.png">
      <p>暂无数据</p>
    </div>
    <div class="no-invest" v-show="noInvestList.length">
      <div class="wrap">
        <div class="left">姓名</div>
        <div class="middle"></div>
        <div class="right">手机号码</div>
      </div>
      <div class="content" v-for="item in noInvestList">
        <div class="wrap">
          <div class="left">{{item.userName}}</div>
          <div class="middle"></div>
          <div class="right">{{item.managerUserId}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    mounted () {
      this.getWeeklyCustomer()
    },
    computed: {
      ...mapGetters({
        noInvestList: 'shop/weekly/noInvestList'
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

  .no-invest {
    background: @bg-white;
    .wrap {
      display: flex;
      //width: 100%;
      padding: .2rem .6rem;
      border-bottom: 1px solid @line-color;
    }

    .left {
      flex: 0 0 20%;
      text-align: center;
    }

    .middle {
      flex: 0 0 50%
    }

    .right {
      text-align: center;
      flex: 0 0 30%;
    }
  }
</style>
