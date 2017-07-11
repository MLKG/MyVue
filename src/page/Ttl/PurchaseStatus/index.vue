<template>
  <div>
    <div class="common-status">
      <img class="common-status_img" src="../../../images/ttl/fail.png" />   <!-- fail -->
      <div class="font-size-largest">核保请求处理失败</div>
      <div class="common-status_text">
        {{errorMsg}}<br />
        可联系客服了解详情<br />
        客服电话：4008308003
      </div>
    </div>
    <div class="common-click">
      <div class="common-click_name" @click="goProductList()">完成</div>
    </div>
  </div>
</template>

<script>
  import CommonList from 'page/Ttl/Common/CommonList'

  export default {
    data () {
      return {
        errorMsg: this.$route.query.errorMsg
      }
    },
    methods: {
      goProductList () {
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
