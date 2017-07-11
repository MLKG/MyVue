<template>
  <div>
    <div class="common-status">
      <img v-show="isSuccess" class="common-status_img" src="../../../images/ttl/success.png" />
      <img v-show="!isSuccess" class="common-status_img" src="../../../images/ttl/fail.png" />
      <div v-show="isSuccess" class="font-size-largest">订单支付成功</div>
      <div v-show="!isSuccess" class="font-size-largest">交易失败</div>
      <div v-show="isSuccess" class="common-status_text">
        您已成功申购广发银行天天利产品<br />
        详询广发银行客服4008308003【广发银行】<br />
      </div>
      <div v-show="!isSuccess" class="common-status_text">
        {{ result.message }}<br/>
      </div>
    </div>
    <div v-show="isSuccess" class="gap"></div>
    <common-list v-if="isSuccess" :premium="this.result.data.payConfirm.premium" :expYield="this.result.data.payConfirm.expYield" :productTime="this.result.data.payConfirm.productTime" :userName="userRealName"></common-list>
    <div class="common-click">
      <a v-show="isSuccess" class="common-click_name" @click="toMyInsurance">查看我的保单</a>
      <a v-show="!isSuccess" class="common-click_name" @click="toProductDetail">完成</a>
    </div>
  </div>
</template>

<script>
  import CommonList from 'page/Ttl/Common/CommonList'

  export default {
    data () {
      return {
        result: JSON.parse(sessionStorage.getItem('payResult')),
        userRealName: sessionStorage.getItem('userRealName')
      }
    },
    computed: {
      isSuccess () {
        return this.result.status === 'success'
      }
    },
    methods: {
      toMyInsurance () {
        this.$router.replace({path: '/ttl/myinsurance'})
      },
      toProductDetail () {
        this.$router.replace({path: '/ttl/productdetail', query: {productId: this.$route.query.productId}})
      }
    },
    components: {
      CommonList
    }
  }
</script>

<style lang="less" scoped>
   @import "../../../style/variables";

   .common-status {
      background-color: @bg-white;
      text-align: center;
      padding: 0.8rem 0 0.75rem;
      border-bottom: 1px solid @line-color;

      &_img {
        width: 1.2rem;
        padding-bottom: 0.4rem;
      }

      &_text {
        margin-top: 0.4rem;
        width: 6rem;
        display: inline-block;
        line-height: 0.5rem;
      }
   }
</style>
