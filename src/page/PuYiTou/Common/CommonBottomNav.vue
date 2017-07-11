<template>
  <div>
    <div class="common-bottom-nav__top"></div>
    <ul class="common-bottom-nav">
      <li class="common-bottom-nav__item" :class="{ current: isIndex }">
        <router-link to="/index">
          <span class="common-bottom-nav__item_img common-bottom-nav__item_index" :class="{ current: isIndex }"></span>
          <span>投资</span>
        </router-link>
      </li>
      <li class="common-bottom-nav__item" :class="{ current: isProduct }">
        <router-link to="/productlist">
          <span class="common-bottom-nav__item_img common-bottom-nav__item_product" :class="{ current: isProduct }"></span>
          <span>产品</span>
        </router-link>
      </li>
      <li class="common-bottom-nav__item" :class="{ current: isZhuanRang }">
        <router-link to="/zhuanranglist">
          <span class="common-bottom-nav__item_img common-bottom-nav__item_zhuanrang" :class="{ current: isZhuanRang }"></span>
          <span>转让</span>
        </router-link>
      </li>
      <li class="common-bottom-nav__item" :class="{ current: isMyPYT }">
        <router-link to="/mypyt">
          <span class="common-bottom-nav__item_img common-bottom-nav__item_mypyt" :class="{ current: isMyPYT }"></span>
          <span>我的</span>
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
      isIndex: function () {
        return this.current === 'isIndex'
      },
      isProduct: function () {
        return this.current === 'isProduct'
      },
      isZhuanRang: function () {
        return this.current === 'isZhuanRang'
      },
      isMyPYT: function () {
        return this.current === 'isMyPYT'
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
      // border-right: 1px solid #ddd;
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

      &_index {
        background-image: url(../../../images/common/home-index.png);

        &.current {
          background-image: url(../../../images/common/home-index-active.png);
        }
      }

      &_product {
        background-image: url(../../../images/common/home-product.png);

        &.current {
          background-image: url(../../../images/common/home-product-active.png);
        }
      }

      &_zhuanrang {
        background-image: url(../../../images/common/home-zhuanrang.png);

        &.current {
          background-image: url(../../../images/common/home-zhuanrang-active.png);
        }
      }

      &_mypyt {
        background-image: url(../../../images/common/home-mypyt.png);

        &.current {
          background-image: url(../../../images/common/home-mypyt-active.png);
        }
      }
    }

    &__top {
      height: 1rem;
      width: 100%;
    }
  }
</style>
