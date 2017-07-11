<template>
  <section>
    <div class="fortune-detail">
      <p class="fortune-detail__date">2017.05.16</p>
      <div class="fortune-detail__row">
        <div class="fortune-detail__col">
          <div class="fortune-detail__left">
            <p class="font-size-medium">充值-余额充值</p>
            <p class="font-color-gray">通过保福成功充值1000元</p>
          </div>
          <div class="fortune-detail__right">
            <p class="font-size-medium font-color-red">+1000.00</p>
            <p class="font-color-gray">余额： 4000.78</p>
          </div>
        </div>
        <div class="fortune-detail__col">
          <div class="fortune-detail__left">
            <p class="font-size-medium">充值-余额充值</p>
            <p class="font-color-gray">通过保福成功充值1000元</p>
          </div>
          <div class="fortune-detail__right">
            <p class="font-size-medium font-color-red">+1000.00</p>
            <p class="font-color-gray">余额： 4000.78</p>
          </div>
        </div>
      </div>
    </div>
    <div class="fortune-detail">
      <p class="fortune-detail__date">2017.05.16</p>
      <div class="fortune-detail__row">
        <div class="fortune-detail__col">
          <div class="fortune-detail__left">
            <p class="font-size-medium">充值-余额充值</p>
            <p class="font-color-gray">通过保福成功充值1000元</p>
          </div>
          <div class="fortune-detail__right">
            <p class="font-size-medium font-color-red">+1000.00</p>
            <p class="font-color-gray">余额： 4000.78</p>
          </div>
        </div>
        <div class="fortune-detail__col">
          <div class="fortune-detail__left">
            <p class="font-size-medium">充值-余额充值</p>
            <p class="font-color-gray">通过保福成功充值1000元</p>
          </div>
          <div class="fortune-detail__right">
            <p class="font-size-medium font-color-red">+1000.00</p>
            <p class="font-color-gray">余额： 4000.78</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
  @import "../../../style/variables";

  .fortune-detail {

    &__date {
      padding: 0 .3rem;
    }

    &__row {

      background: @bg-white;

    }

    &__col {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid @line-color;
      margin-left: .3rem;
      padding: .2rem .3rem .2rem 0;

      &:last-child {
        border-bottom: none;
      }
    }

    &__right {
      text-align: right;
    }
  }

</style>
