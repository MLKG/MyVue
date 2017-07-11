<template>
  <div>
    <div class="cus-mangent-header" :class="{'gray': !customerInfo.certification}">  <!-- cus-mangent-header_gray -->
      <div class="cus-mangent-header_table">
        <div class="cus-mangent-header__info" :class="{'cus-mangent-header__info_gray': !customerInfo.certification}">   <!-- cus-mangent-header__info_gray -->
          <div class="cus-mangent-header__info_person" v-show="customerInfo.certification">
            <div class="cus-mangent-header__info_name">{{ customerInfo.realName }}</div>
            <div :class="{'cus-mangent-header__info_man':customerInfo.gender === '男', 'cus-mangent-header__info_women':customerInfo.gender === '女'}"></div>
            <div class="font-size-large">{{ customerInfo.age }}岁</div>
            <div class="cus-mangent-header__info_img" v-if="customerInfo.certification"></div>
          </div>
          <div class="cus-mangent-header__info_phone">{{ customerInfo.phoneNum }}</div>
        </div>
        <div class="cus-mangent-header__share" @click="goMyCoupon(userId)">
          <div class="cus-mangent-header__share_name" v-if="customerInfo.certification && userId !== userInfo.userId">赠送卡券</div>
        </div>
        <img class="cus-mangent-header__share_img" v-if="!customerInfo.certification" src="../../../images/shop/unreal.png" />
      </div>
    </div>
    <div class="cus-mangent-header__amount" v-if="customerInfo.certification">
      <div class="font-color-gray">
        本月新增投资额
      </div>
      <div class="font-size-bigger">
        <span class="font-size-big">&yen;</span>{{ customerInfo.additionalCapital | currency }}
      </div>
      <div class="cus-mangent-header_table">
        <div class="cus-mangent-header__amount_item">
          <div class="font-color-gray">
            闲置资金
          </div>
          <div class="cus-mangent-header__amount_dollor">
            &yen;{{ customerInfo.usableAmount | currency }}
          </div>
        </div>
        <div class="cus-mangent-header__amount_item">
          <div class="font-color-gray">
            累计投资额
          </div>
          <div class="cus-mangent-header__amount_dollor">
            &yen;{{ customerInfo.investSum | currency }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        userId: ''
      }
    },
    computed: {
      ...mapGetters({
        userInfo: 'userInfo',
        customerInfo: 'shop/customerDetail/customerInfo'
      })
    },
    mounted () {
      this.userId = this.$route.params.userId
    },
    methods: {
      goMyCoupon (userId) {
        let userName = this.customerInfo.realName || this.customerInfo.phoneNum
        window.location.href = window.location.origin + window.location.pathname.replace('vue/', '') + '#/my-coupon?userId=' + userId + '&userName=' + userName + '&comeFrom=cusmangent'
      }
    }
  }
</script>

<style lang="less">
  @import "../../../style/variables";

  .cus-mangent-header {
    background-color: @bg-red;
    padding: 0.34rem 0.3rem;
    color: @font-color-white;

    &.gray {
      background-color: @bg-gray;
      color: @font-color-base;
    }

    &_table {
      width: 100%;
      display: flex;
    }

    &__info {
      flex: 0 0 5rem;

      &_gray {
        padding-top: 0.17rem;
        padding-bottom: 0.22rem;
      }

      &_person {
        display: flex;
      }

      &_name {
        font-size: @font-size-large;
        font-weight: 500;
        max-width: 2rem;
        display: inline-flex;
        white-space: nowrap;
        overflow: hidden;
      }

      &_man {
        background: url("../../../images/shop/man.png");
        background-repeat: no-repeat;
        width: 0.42rem;
        background-size: 100% 100%;
        margin-right: 0.2rem;
        margin-left: 0.1rem;
      }

      &_women {
        background: url("../../../images/shop/women.png");
        background-repeat: no-repeat;
        width: 0.42rem;
        background-size: 100% 100%;
        margin-right: 0.2rem;
        margin-left: 0.1rem;
      }

      &_phone {
        padding-top: 0.14rem;
        font-size: @font-size-small;
      }

      &_img {
        background: url("../../../images/shop/real.png");
        background-repeat: no-repeat;
        width: 0.56rem;
        background-size: 100% 100%;
        margin-right: 0.2rem;
        margin-left: 0.2rem;
        height: 0.37rem;
        margin-top: 0.04rem;
      }
    }

    &__share {
      flex: 0 0 1.9rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      &_name {
        padding: 0.08rem 0.15rem;
        background-color: @bg-white;
        border-radius: 3px;
        color: @font-color-red;
      }

      &_img {
        width: 0.56rem;
        position: absolute;
        right: 0.3rem;
        top: 0.6rem;
      }
    }

    &__amount {
      background-color: @bg-light-pink;
      padding: 0.34rem 0.3rem;

      &_item {
        flex: 1;
        width: 50%;
        padding-top: 0.22rem;
      }

      &_dollor {
        font-size: @font-size-largest;
      }
    }
  }

</style>
