<template>
  <div class="pypay-home">
    <div class="pypay-home__bank">
      <div class="pypay-home__bank_icon">
        <div :class="'bank-icon-' + userInfo.bankCode"></div>
      </div>
      <span class="pypay-home__bank_name">{{ userInfo.bankName }}</span>
      <span class="pypay-home__bank_no">{{ userInfo.cardNoEncrypted }}</span>
      <router-link to="/puyipay/phonemodify" class="pypay-home__bank_link">修改银行预留手机</router-link>
    </div>
    <router-link to="/puyipay/bankmodify" class="main-button">更换银行卡</router-link>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        userInfo: 'puyipay/home/userInfo'
      })
    },
    methods: {
      ...mapActions({
        getUserInfo: 'puyipay/home/getUserInfo',
        isOpenAccount: 'puyipay/home/isOpenAccount'
      })
    },
    mounted () {
      this.isOpenAccount().then((res) => {
        if (!res) {
          this.$router.push('/ttl/myinsurance')
        }
      })
      this.getUserInfo()
    }
  }
</script>

<style lang="less">
  @import "../../../style/variables";
  @import "../../../style/common";
  @import "../../../style/form";

  .pypay-home {
    margin: .32rem;

    &__bank {
      position: relative;
      border: 1px solid @line-color;
      border-radius: 5px;
      height: 1.73rem;
      background: url("../../../images/puyipay/bank-card-background.png");
      background-size: 140% 335%;
      background-position: -100px -80px;
      margin-bottom: .8rem;

      &_link {
        font-size: @font-size-smaller;
        color: @font-color-blue;
        position: absolute;
        top: .7rem;
        right: .3rem;
      }

      &_icon {
        background: transparent;
        width: .7rem;
        height: .7rem;
        position: absolute;
        top: .5rem;
        left: .4rem;
        text-align: center;
      }

      &_name {
        position: absolute;
        top: .48rem;
        left: 1.5rem;
        font-weight: bold;
      }

      &_no {
        position: absolute;
        top: .9rem;
        left: 1.5rem;
        font-weight: bold;
      }
    }
  }
</style>
