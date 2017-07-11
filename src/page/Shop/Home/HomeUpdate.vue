<template>
  <div class="home-update">
    <div class="home-update__tip"><div class="home-update__tip_name" v-show="starStore.isFirstPromote">现金奖励将在下一工作日内发放至普益投账户</div></div>
    <div class="home-update__icon">
      <img class="home-update__icon_img" src="../../../images/shop/home-update-one.png" v-if="starStore.rankLevel === 1" />
      <img class="home-update__icon_img" src="../../../images/shop/home-update-two.png" v-if="starStore.rankLevel === 2" />
      <img class="home-update__icon_img" src="../../../images/shop/home-update-three.png" v-if="starStore.rankLevel === 3" />
      <img class="home-update__icon_img" src="../../../images/shop/home-update-four.png" v-if="starStore.rankLevel === 4" />
      <img class="home-update__icon_img" src="../../../images/shop/home-update-five.png" v-if="starStore.rankLevel === 5" />
      <!-- <br />
      <img class="home-update__icon_star" src="../../../images/shop/home-star.png" v-for="n in starStore.rankLevel" v-if="starStore.rankLevel === 5" /> -->
    </div>
    <div class="font-size-medium">{{ userInfo.displayName }}</div>
    <div class="home-update_give">恭喜你升级为{{ starStore.rankName }}理财师</div>
    <div>从此您享有以下尊贵特权</div>
    <div class="home-update_linear"></div>
    <div class="home-update__privilege">
      <div class="home-update__privilege_item" v-if="starStore.cardPrivilege">
        <img class="home-update__privilege_img" src="../../../images/shop/home-update-coupon.png" />
        <div class="home-update__privilege_name">卡券特权</div>
      </div>
      <div class="home-update__privilege_item" v-if="starStore.holidayPrivilege">
        <img class="home-update__privilege_img" src="../../../images/shop/home-update-holiday.png" />
        <div class="home-update__privilege_name">节假日特权</div>
      </div>
      <div class="home-update__privilege_item" v-if="starStore.dressUpPrivilege">
        <img class="home-update__privilege_img" src="../../../images/shop/home-update-dress.png" />
        <div class="home-update__privilege_name">装扮特权</div>
      </div>
      <div class="home-update__privilege_item" v-if="starStore.servicePrivilege">
        <img class="home-update__privilege_img" src="../../../images/shop/home-update-customer.png" />
        <div class="home-update__privilege_name">专属客服</div>
      </div>
    </div>
    <div class="font-size-small font-color-gray">下一考核期为：<span class="font-color-red">{{ starStore.nextCheckDate | dateTime }}</span></div>
    <div class="home-update_button" @click="iKnow({'status': false})">进入我的网店</div>
    <div class="font-size-small font-color-blue">
      <router-link to="/starSystem">星级特权体系说明</router-link>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        userInfo: 'userInfo',
        showUpdate: 'shop/home/showUpdate',
        starStore: 'shop/home/starStore'
      })
    },
    methods: {
      ...mapMutations({
        iKnow: 'shop/home/RECEIVE_IKNOW'
      })
    }
  }
</script>

<style lang="less">
  @import "../../../style/variables";

  .home-update {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: @bg-white;
    z-index: 3;
    text-align: center;
    max-width: 1080px;
    margin: 0 auto;

    &__tip {
      height: 0.65rem;
      line-height: 0.65rem;

      &_name {
        background-color: #ffecea;
        color: @font-color-red;
        font-size: @font-size-small;
      }
    }

    &__icon {
      height: 3.8rem;

      &_img {
        width: 3.4rem;
      }

      &_star {
        width: 0.3rem;
        margin: 0 0.02rem;
      }
    }

    &_give {
      font-size: @font-size-medium;
      margin-top: 0.1rem;
      margin-bottom: 0.2rem;
    }

    &_linear {
      height: 0.03rem;
      margin-top: 0.4rem;
      width: 6.9rem;
      display: inline-block;
      border-radius: 50%;
      background: -webkit-linear-gradient(left, white, #c5a16e, white);
      background: -o-linear-gradient(right, white, #c5a16e, white);
      background: -moz-linear-gradient(right, white, #c5a16e, white);
      background: linear-gradient(right, white, #c5a16e, white);
    }

    &__privilege {
      margin-top: 0.4rem;
      margin-bottom: 0.4rem;
      color: @font-color-gray;

      &_item {
        display: inline-block;
        font-size: @font-size-smaller;
        margin: 0 0.2rem;
      }

      &_img {
        width: 0.84rem;
      }

    }

    &_button {
      height: 0.85rem;
      line-height: 0.85rem;
      width: 5rem;
      background-color: @bg-red;
      display: inline-block;
      color: @font-color-white;
      margin-top: 0.3rem;
      margin-bottom: 0.28rem;
      border-radius: 0.1rem;
      font-size: @font-size-medium;
    }
  }
</style>
