<template>
  <div class="home-header">
    <swiper :options="swiperOptionHeader">
      <swiper-slide>
        <img src="https://www.puyitou.com/banner/11/9/D51EB8D056BBA472E64BABD48DD35065.jpg" class="home-header_img" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://www.puyitou.com/banner/12/0/4B260F87BD15BC274C55A6416D9214D2.jpg" class="home-header_img" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://www.puyitou.com/banner/12/5/8026F78EE665AE090D91AAEE5CBE339A.jpg" class="home-header_img" />
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-black" slot="pagination"></div>
    </swiper>
    <div class="home-header__notice font-size-small">
      <div class="home-header__notice_img">
        <img src="../../../images/puyitou/home-notice.png" />
      </div>
      <div class="home-header__notice_text">{{ userInfo.bankName }}</div>
      <div class="home-header__notice_time">-2017.5.23</div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        swiperOptionHeader: {
          autoplay: 3000,
          pagination: '.swiper-pagination',
          slidesPerView: 'auto',
          paginationClickable: true,
          loop: true
        }
      }
    },
    computed: {
      ...mapGetters({
        userInfo: 'userInfo'
      })
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  .swiper-slide {
    height: 3.4722rem;
    color: white;
  }

  .home-header {
    &_img {
      width: 100%;
    }

    &__notice {
      height: 0.9rem;
      display: flex;
      align-items: center;
      background-color: @bg-white;

      &_img {
        flex: 0 0 1.1rem;

        img {
          width: 0.6rem;
          padding-left: 0.2rem;
          padding-top: 0.05rem;
        }
      }

      &_text {
        flex: 1;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      &_time {
        flex: 0 0 1.6rem;
        padding-right: 0.2rem;
        text-align: right;
      }
    }
  }
</style>

<style lang="less">
  @import "../../../style/variables";

  .swiper-pagination-black {

    & .swiper-pagination-bullet {
      background: @bg-black;
      width: 10px;
      height: 10px;
      opacity: 0.3;
    }

    & .swiper-pagination-bullet-active {
      background: @bg-black;
      opacity: 0.7;
    }
  }
</style>
