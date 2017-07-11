<template>
  <div>
    <div class="common-bottom-nav__top"></div>
    <ul class="common-bottom-nav">
      <li class="common-bottom-nav__item" :class="{ current: isMain }">
        <router-link to="/shop">
          <span class="common-bottom-nav__item_img common-bottom-nav__item_shop" :class="{ current: isMain }"></span>
          <span>首页</span>
        </router-link>
      </li>
      <li class="common-bottom-nav__item" :class="{ current: isIncome }">
        <router-link to="/shop/incomemanage">
          <span class="common-bottom-nav__item_img common-bottom-nav__item_income" :class="{ current: isIncome }"></span>
          <span>收入</span>
        </router-link>
      </li>
      <li class="common-bottom-nav__item" :class="{ current: isCustomer }">
        <router-link to="/shop/customer">
          <span class="common-bottom-nav__item_img common-bottom-nav__item_customer" :class="{ current: isCustomer }"></span>
          <span>客户</span>
        </router-link>
      </li>
      <li class="common-bottom-nav__item" :class="{ current: isCenter }">
        <router-link to="/shop/zhanyecenter/sharelink">
          <span class="common-bottom-nav__item_img common-bottom-nav__item_zhanye" :class="{ current: isCenter }"></span>
          <span>展业</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      current: {
        type: String,
        required: true
      }
    },
    computed: {
      isMain: function () {
        return this.current === 'main'
      },
      isIncome: function () {
        return this.current === 'income'
      },
      isCustomer: function () {
        return this.current === 'customer'
      },
      isCenter: function () {
        return this.current === 'center'
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  .common-bottom-nav {
    position: fixed;
    bottom: 0;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    border-top: 1px solid #ddd;
    width: 100%;
    background: #fff;
    font-size: @font-size-medium;
    z-index: 2;
    max-width: 1080px;

    &__item {
      border-right: 1px solid #ddd;
      height: 1rem;
      flex: 1;

      &.current {
        color: @font-color-red;
      }

      &:last-child {
        border: 0;
      }

      a {
        text-decoration: none;
        display: flex;
        text-align: center;
        line-height: 1rem;
        justify-content: center;
        align-items: center;
      }

      &_img {
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 0.4rem;
        height: 0.4rem;
        margin-right: 0.1rem;
      }

      &_shop {
        background-image: url(../../../images/common/shop.png);

        &.current {
          background-image: url(../../../images/common/shop-active.png);
        }
      }

      &_income {
        background-image: url(../../../images/common/income.png);

        &.current {
          background-image: url(../../../images/common/income-active.png);
        }
      }

      &_customer {
        background-image: url(../../../images/common/customer.png);

        &.current {
          background-image: url(../../../images/common/customer-active.png);
        }
      }

      &_zhanye {
        background-image: url(../../../images/common/zhanye.png);

        &.current {
          background-image: url(../../../images/common/zhanye-active.png);
        }
      }
    }

    &__top {
      height: 1rem;
      width: 100%;
    }
  }
</style>
