<template>
  <section>
    <div class="detail-progress">
      <div class="detail-progress__tip">
        <p>持有中</p>
        <p class="font-color-blue">剩余时间150天</p>
      </div>
      <div class="detail-progress__row">
        <div class="detail-progress__line"></div>
        <div class="detail-progress__circle detail-progress__first">
          <img src="../../../images/puyitou/radiu.png">
        </div>
        <div class="detail-progress__blue">
        </div>
        <div class="detail-progress__circle detail-progress__second">
          <img src="../../../images/puyitou/radiu.png">
        </div>
        <div class="detail-progress__circle detail-progress__third">
          <img src="../../../images/puyitou/radiu.png">
        </div>
      </div>
      <div class="detail-progress__text">
        <div class="detail-progress__con detail-progress__first">
          <p>起息日</p>
          <p class="font-color-gray">2017.05.12</p>
        </div>
        <div class="detail-progress__con detail-progress__second">
          <p>清算日</p>
          <p class="font-color-gray">2018.05.12</p>
        </div>
        <div class="detail-progress__con detail-progress__third">
          <p>预计兑付日</p>
          <p class="font-color-gray">2018.05.21</p>
        </div>
        <!-- <div class="detail-progress__con detail-progress__third">
          <p>兑付日</p>
          <p class="font-color-gray">2018.05.21</p>
        </div> -->
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
  @import "../../../style/variables";

  .detail-progress {
    padding: .3rem ;
    background: @bg-white;
    margin-bottom: .3rem;

    &__tip {
      text-align: center;
      width: 2.5rem;
      position: relative;
      left: 18%;
    }

    &__row {
      position: relative;
      margin: .3rem .7rem;
    }

    &__line {
      height: .01rem;
      background: @bg-gray;
    }

    &__circle {
      position: absolute;
      width: .4rem;
      height: .4rem;
      background: white;
      text-align: center;
      top: -.18rem;
      margin-left: -.2rem;

      img {
        width: 0.23rem;
        height: 0.23rem
      }
    }

    &__blue {
      left: 30%;
      background: @font-color-blue;
      width: .3rem;
      height: .3rem;
      border-radius: 100%;
      top: -.16rem;
      position: absolute;
    }

    &__second {
        left: 65%;
      }

    &__third {
      left: 100%;
    }

    &__text {
      position: relative;
      height: 1rem;
      margin: 0 .7rem;

    }

    &__con {
      width: 1.5rem;
      text-align: center;
      position: absolute;
      margin-left: -.75rem;
    }
  }

</style>
