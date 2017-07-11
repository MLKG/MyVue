<template>
  <div class="youmi">
    <img src="../../../images/ttl/youmi_logo.png">
    <div class="text">
      <p>尊敬的客户，您现在即将离开普益</p>
      <p>投，进入广发直销银行页面</p>
    </div>
  </div>
</template>

<script>
  export default {
    mounted () {
      document.body.style.backgroundColor = '#fff'
      var redirectPath = ''
      if (this.$route.query.path) {
        redirectPath = '/ttl/' + this.$route.query.path
      } else {
        redirectPath = '/ttl/productlist'
      }
      setTimeout(() => {
        this.$router.replace({path: redirectPath})
      }, 2000)
    },
    destroyed () {
      document.body.style.backgroundColor = '#F0EFF5'
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  .youmi {
    padding-left: .95rem;
    padding-top: 4.6rem;

    img {
      width: 1.16rem;
      margin-right: .27rem;
      position: relative;
      top: 10px;
    }

    .text {
      display: inline-block;

      p {
        margin-top: 5px;
        margin-bottom: 5px;
      }
    }
  }
</style>
