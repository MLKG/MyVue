<template>
  <div>
    <div class="detail-header">
      <img class="detail-header_img" src="../../../images/puyitou/detail-bg.png" />
      <div class="detail-header__title">定活通10号15期<span class="activity">新手专享</span></div>
      <div class="detail-header__content">
        <div class="detail-header__content_left">
          <div class="rate"><span class="font-size-biggest">6.0%</span><span class="font-size-largest" v-if="true">+1.0%</span></div>
          <div class="name">预期年化收益率</div>
        </div>
        <div class="detail-header__content_right">
          <div class="apply"><span class="font-size-bigger">360</span><span class="font-size-medium">天</span><div class="tip"></div></div>
          <div class="name">投资期限</div>
        </div>
      </div>
      <div class="detail-header_record">
        <router-link to="/investrecord">
          已有18人参与募集>
        </router-link>
      </div>
      <div class="detail-header_footer">
        <div class="item">募集金额&nbsp;&nbsp;&yen;200000.00</div>
        <div class="item">起投金额&nbsp;&nbsp;&yen;5000.00</div>
      </div>
    </div>
    <div class="detail-progress">
      <div class="detail-progress__line">
        <div class="detail-progress__line_border"></div>
        <div class="common item1">
          <img src="../../../images/puyitou/radiu.png" />
        </div>
        <div class="common item2">
          <img src="../../../images/puyitou/radiu.png" />
        </div>
        <div class="common item3">
          <img src="../../../images/puyitou/radiu.png" />
        </div>
      </div>
      <div class="detail-progress__content">
        <div class="start">
          <div class="name">起息日</div>
          <div class="font-color-gray">2018.18.15</div>
        </div>
        <div class="placeholder"></div>
        <div class="ing">
          <div class="name">清算日</div>
          <div class="font-color-gray">2018.08.18</div>
        </div>
        <div class="end">
          <div class="name">预计兑付日</div>
          <div class="font-color-gray">2018.08.18</div>
        </div>
      </div>
    </div>
    <div class="gap"></div>
  </div>
</template>

<style lang="less" scoped>
  @import "../../../style/variables";
  @gray-detail:#f9d4d6;

  .detail-header {
    padding: 0.5rem 0.25rem 0.45rem;
    position: relative;
    background-color: @bg-red;
    color: @font-color-white;
    text-align: center;
    font-size: @font-size-small;

    &_img {
      position: absolute;
      width: 100%;
      left: 0;
      right: 0;
      bottom: 0;
    }

    &__title {
      height: 0.9rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: @font-size-larger;

      .activity {
        border: 1px solid @font-color-white;
        border-radius: 2px;
        color: @font-color-white;
        font-size: @font-size-smaller;
        padding: 0.04rem 0.1rem;
        margin-left: 0.2rem;
      }
    }

    &__content {
      height: 1.4rem;
      display: flex;
      justify-content: center;

      &_left {
        flex: 0 0 2.5rem;

        & .rate {
          height: 0.8rem;
        }

        & .name {
          font-size: @font-size-base;
          color: @gray-detail;
          margin-top: 0.05rem;
        }
      }

      &_right {
        flex: 0 0 2.5rem;
        position: relative;

        & .apply {
          height: 0.8rem;
          position: relative;
          top: 0.1rem;
        }

        & .name {
          font-size: @font-size-base;
          color: @gray-detail;
          margin-top: 0.05rem;
        }

        & .tip {
          display: inline-block;
          background: url('../../../images/puyitou/30transfer.png') no-repeat;
          background-size: 100%;
          height: 0.46rem;
          width: 1.43rem;
          position: absolute;
          top: 0;
          left: 1.9rem;
        }
      }
    }

    &_record {
      margin-top: 0.45rem;
      position: relative;
    }

    &_footer {
      display: flex;
      justify-content: space-between;
      margin-top: 0.4rem;
      position: relative;
    }
  }

  .detail-progress {
    height: 1.2rem;
    background-color: @bg-white;
    padding: 0.4rem 0.25rem;

    &__line {
      position: relative;
      margin: 0.1rem 0.5rem 0;

      &_border {
        height: 1px;
        background-color: @bg-gray;
      }

      img {
        width: 0.22rem;
        height: 0.22rem;
      }

      & .common {
        width: 0.44rem;
        height: 0.44rem;
        display: inline-block;
        position: absolute;
        top: -0.18rem;
        background-color: @bg-white;
        text-align: center;
      }

      & .item1 {
        left: 0;
      }

      & .item2 {
        left: 3.5rem;
      }

      & .item3 {
        right: 0;
      }
    }

    &__content {
      display: flex;
      margin-top: 0.3rem;
      font-size: @font-size-small;

      & .name {
        margin-bottom: 0.05rem;
      }

      & .start {
        flex: 0 0 1.0rem;
        text-align: center;
      }

      & .placeholder {
        flex: 0 0 1.5rem;
      }

      & .ing {
        flex: 1;
        text-align: center;
      }

      & .end {
        flex: 0 0 1.54rem;
        text-align: center;
      }
    }
  }
</style>
