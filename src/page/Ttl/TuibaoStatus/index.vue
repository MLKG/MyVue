<template>
  <div>
    <div class="common-status">
      <img class="common-status_img" src="../../../images/ttl/success.png" v-show="isSuccess" />   <!-- fail -->
      <img class="common-status_img" src="../../../images/ttl/fail.png" v-show="!isSuccess"/>
      <div class="font-size-largest" v-show="isSuccess">申请成功</div>
      <div class="font-size-largest" v-show="!isSuccess">退保失败</div>
      <div class="common-status_text" v-show="isSuccess">
        您的退保申请成功，投保金额将于3个工作日内退回您的钱包银行卡中<br />
      </div>
      <div class="common-status_text" v-show="!isSuccess">
      对不起,您的退保申请未能通过保险公司审核,可联系客服了解详情<br>
      客服电话：4008308003
      </div>
    </div>
    <div class="common-click">
      <div class="common-click_name" @click="gotoMyInsurance()">完成</div>
    </div>
  </div>
</template>

<script>
  import CommonStatus from 'page/Ttl/Common/CommonStatus'
  import CommonList from 'page/Ttl/Common/CommonList'

  export default {
    data () {
      return {
        isSuccess: this.$route.query.status === 'success'
      }
    },
    components: {
      CommonStatus,
      CommonList
    },
    methods: {
      gotoMyInsurance () {
        this.$router.push('/ttl/myInsurance')
      }
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

