<template>
  <div >
    <div class="gap"></div>
    <ul class="home-content">
      <li class="home-content__item">
        <router-link to="/shop/incomemanage">
          <img class="home-content__item_img" src="../../../images/shop/home-detail.png" />
          <div class="home-content__item_title">佣金明细</div>
        </router-link>
      </li>
      <li class="home-content__item">
        <router-link to="/shop/usersearch">
          <img class="home-content__item_img" src="../../../images/shop/home-find.png" />
          <div class="home-content__item_title">查找客户</div>
        </router-link>
      </li>
      <li class="home-content__item">
        <router-link to="/shop/zhanyecenter/infoset">
          <img class="home-content__item_img" src="../../../images/shop/home-setting.png" />
          <div class="home-content__item_title">消息设置</div>
        </router-link>
      </li>
      <li class="home-content__item">
        <router-link to="/shop/ranking">
          <img class="home-content__item_img" src="../../../images/shop/home-ranking.png" />
          <div class="home-content__item_title">排行榜</div>
        </router-link>
      </li>
      <li class="home-content__item">
        <router-link to="/shop/zhanyecenter/sharelink">
          <img class="home-content__item_img" src="../../../images/shop/home-extension.png" />
          <div class="home-content__item_title">推广链接</div>
        </router-link>
      </li>
      <li class="home-content__item">
        <router-link to="/shop/couponhome">
          <img class="home-content__item_img" src="../../../images/shop/home-coupons.png" />
          <div class="home-content__item_title">卡券使用详情</div>
        </router-link>
      </li>
    </ul>
    <div class="home-content_background" v-if="!starStore.isHaveData"></div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        starStore: 'shop/home/starStore'
      })
    }
  }
</script>

<style lang="less">
  @import "../../../style/variables";

  .home-content {
    display: flex;
    width: 100%;
    background-color: @bg-white;
    position: relative;
    z-index: 1;
    flex-wrap: wrap;
    border-top: 1px solid @line-color;

    &__item {
      flex: 0 0 2.5rem;
      text-align: center;
      padding: 0.42rem 0;

      &_img {
        width: 1.4rem;
      }

      &_title {
        font-size: @font-size-small;
      }
    }

    &_background {
      background-color: white;
      position: absolute;
      bottom: 0;
      top: 3.84rem;
      left: 0;
      right: 0;
      z-index: 0;
      margin: 0 auto;
      max-width: 1080px;
    }
  }
</style>
