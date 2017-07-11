<template>
  <div>
    <zhuan-rang-list-nav></zhuan-rang-list-nav>
    <div class="product-list">
      <div class="product-list__title">
        <span class="product-list__title_name">定活通2号0030期</span> <!-- new  activity -->
        <span class="product-list__title_right">红包 &yen; <span>5</span></span> <!-- font-color-gray -->
      </div>
      <div class="product-list__content">
        <div class="product-list__content_left">
          <div class="rate"><span class="font-size-biggest">6.0%</span></div>
          <div class="name">预期年化收益率</div>
        </div>
        <div class="product-list__content_right">
          <div class="apply"><span class="apply_name">投资期限</span><span class="font-size-larger">360</span><span class="font-size-medium">天</span></div>
          <div class="apply rest"><span class="apply_name">可投金额</span><span class="font-size-large">&yen;10000.00</span></div>
        </div>
      </div>
      <div class="product-list__button">
        <button type="button" class="product-list__button_click">立即投资</button>
      </div>
    </div>
    <div class="product-list">
      <div class="product-list__title">
        <span class="product-list__title_name">定活通2号0030期</span> <!-- new  activity -->
        <span class="product-list__title_right">红包 &yen; <span>5</span></span> <!-- font-color-gray -->
      </div>
      <div class="product-list__content">
        <div class="product-list__content_left">
          <div class="rate"><span class="font-size-biggest">6.0%</span></div>
          <div class="name">预期年化收益率</div>
        </div>
        <div class="product-list__content_right">
          <div class="apply"><span class="apply_name">投资期限</span><span class="font-size-larger">360</span><span class="font-size-medium">天</span></div>
          <div class="apply rest"><span class="apply_name">可投金额</span><span class="font-size-large">&yen;10000.00</span></div>
        </div>
      </div>
      <div class="product-list__button">
        <button type="button" class="product-list__button_click">立即投资</button>
      </div>
    </div>
    <div class="product-list">
      <div class="product-list__title">
        <span class="product-list__title_name">定活通2号0030期</span> <!-- new  activity -->
        <span class="product-list__title_right font-color-gray">红包 &yen; <span>5</span></span> <!-- font-color-gray -->
      </div>
      <div class="product-list__content">
        <div class="product-list__content_left">
          <div class="rate"><span class="font-size-biggest">6.0%</span></div>
          <div class="name">预期年化收益率</div>
        </div>
        <div class="product-list__content_right">
          <div class="apply"><span class="apply_name">投资期限</span><span class="font-size-larger">360</span><span class="font-size-medium">天</span></div>
          <div class="apply rest"><span class="apply_name">成交金额</span><span class="font-size-large">&yen;10000.00</span></div>
        </div>
      </div>
      <div class="product-list__button">
        <button type="button" class="product-list__button_click" disabled>已经抢光了</button>
      </div>
    </div>
    <div class="product-list">
      <div class="product-list__title">
        <span class="product-list__title_name">定活通2号0030期</span> <!-- new  activity -->
        <span class="product-list__title_right font-color-gray">红包 &yen; <span>5</span></span> <!-- font-color-gray -->
      </div>
      <div class="product-list__content">
        <div class="product-list__content_left">
          <div class="name">预期年化收益率</div>
        </div>
        <div class="product-list__content_right">
          <div class="apply"><span class="apply_name">投资期限</span><span class="font-size-larger">360</span><span class="font-size-medium">天</span></div>
          <div class="apply rest"><span class="apply_name">成交金额</span><span class="font-size-large">&yen;10000.00</span></div>
        </div>
      </div>
      <div class="product-list__button">
        <button type="button" class="product-list__button_click" disabled>已经抢光了</button>
      </div>
    </div>
    <div class="product-list_placeholder"></div>
    <common-bottom-nav :current="home"></common-bottom-nav>
  </div>
</template>

<script>
  import ZhuanRangListNav from './ZhuanRangListNav'
  import CommonBottomNav from 'page/PuYiTou/Common/CommonBottomNav'

  export default {
    data () {
      return {
        home: 'isZhuanRang'
      }
    },
    components: {
      ZhuanRangListNav,
      CommonBottomNav
    }
  }
</script>

<style lang="less" scoped>
   @import "../../../style/variables";

   .product-list {
      margin-top: 0.3rem;
      padding-left: 0.25rem;
      padding-right: 0.25rem;
      background-color: @bg-white;
      position: relative;

      &__title {
        height: 0.9rem;
        display: flex;
        align-items: center;

        &_name {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          width: 5.5rem;
          font-size: @font-size-large;
          height: 0.5rem;
          line-height: 0.5rem;
        }

        &_right {
          position: absolute;
          right: 0.25rem;
          top: 0.25rem;
        }
      }

      &__content {
        padding: 0.2rem 0;
        display: flex;

        &_left {
          flex: 0 0 3.0rem;
          height: 1.68rem;
          color: @font-color-gray;
          border-right: 1px solid @line-color;

          & .rate {
            color: @font-color-red;
            margin-top: 0.1rem;
            display: flex;
            height: 0.8rem;
          }

          & .name {
            margin-top: 0.1rem;
          }
        }

        &_right {
          flex: 1;
          height: 1.68rem;
          padding-left: 0.7rem;

          & .apply {
            display: flex;
            align-items: center;
            margin-top: 0.2rem;
            margin-bottom: 0.1rem;
            height: 0.46rem;

            &_name {
              flex: 0 0 1.3rem;
              color: @font-color-gray;
            }
          }

          & .rest {
            margin-top: 0.3rem;
            overflow: hidden;
          }
        }
      }

      &__button {
        padding-bottom: 0.25rem;

        &_click {
          display: inline-block;
          width: 100%;
          border: none;
          background-color: @bg-red;
          color: @font-color-white;
          height: 0.72rem;
          font-size: @font-size-medium;
          border-radius: 3px;

          &:disabled {
            background-color: @bg-gray;
          }
        }
      }

      &_placeholder {
        height: 0.25rem;
      }
   }
</style>
