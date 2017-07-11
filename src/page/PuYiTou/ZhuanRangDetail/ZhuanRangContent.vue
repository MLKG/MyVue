<template>
  <div>
    <div class="product-detail-nav">
      <div class="product-detail-nav_item" :class="{'current': currentNav === 'intro'}" @click="changeNavClick({type: 'intro'})">产品说明</div>
      <div class="product-detail-nav_item" :class="{'current': currentNav === 'img'}" @click="changeNavClick({type: 'img'})">合同文件</div>
    </div>
    <div>
      <div class="product-detail_html" v-html="666" v-if="false"></div>
      <div class="product-detail_contract">
        <div class="item" v-for="n in 17">
          <img src="../../../images/puyitou/contract.png" />
        </div>
      </div>
    </div>
    <div class="product-detail_background"></div>
    <div class="btn-bottom_placeholder"></div>
    <button class="btn-bottom btn-bottom_red">马上投资</button>
    <div class="product-detail_pact" v-if="false">
      <swiper :options="swiperOptionHeader">
        <swiper-slide>
          <img src="../../../images/puyitou/contract.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../../images/puyitou/contract.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../../images/puyitou/contract.jpg" />
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-black" slot="pagination"></div>
      </swiper>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="tip">长按图片保存</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        currentNav: 'img',
        swiperOptionHeader: {
          pagination: '.swiper-pagination',
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          slidesPerView: 'auto',
          paginationClickable: true,
          loop: true
        }
      }
    },
    methods: {
      changeNavClick (typeObj) {
        this.currentNav = typeObj.type
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";
  .product-detail-nav {
      display: flex;
      width: 100%;
      font-size: @font-size-medium;
      background-color: @bg-white;
      height: 0.9rem;
      border-bottom: 1px solid @line-color;

      &_item {
        flex: auto;
        height: 0.88rem;
        line-height: 0.88rem;
        text-align: center;

        &.current {
          border-bottom: 2px solid @font-color-red;
          color: @font-color-red;
        }
      }

      &_placeholder {
        height: 0.9rem;
      }
   }

   .product-detail {

    &_background {
      background-color: white;
      position: absolute;
      bottom: 0;
      top: 8.16rem;
      left: 0;
      right: 0;
      z-index: 0;
      margin: 0 auto;
      max-width: 1080px;
    }

    &_html {
      position: relative;
      z-index: 1;
      padding: 0 0.15rem 0.3rem;
    }

    &_contract {
      position: relative;
      z-index: 1;
      display: flex;
      flex-wrap: wrap;
      background-color: @bg-white;
      padding: 0 0.15rem 0.3rem;

      & .item {
        flex: 0 0 2.4rem;
        text-align: center;
        margin-top: 0.3rem;

        img {
          width: 2.3rem;
        }
      }
    }

    &_pact {
      & .swiper-container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        max-width: 1080px;
      }

      & .swiper-button-next {
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23808080'%2F%3E%3C%2Fsvg%3E");
      }

      & .swiper-button-prev {
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23808080'%2F%3E%3C%2Fsvg%3E");
      }

      img {
        width: 100%;
        height: 100%;
      }

      & .tip {
        color: #808080;
        position: fixed;
        z-index: 1;
        left: 0;
        right: 0;
        bottom: 0.8rem;
        text-align: center;
        max-width: 1080px;
        margin: 0 auto;
      }
    }
   }
</style>
