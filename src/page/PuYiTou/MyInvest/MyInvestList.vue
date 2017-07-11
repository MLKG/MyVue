<template>
  <section>
    <div class="my-invest-list">
      <div class="my-invest-list__row">
        <div class="product-title">
          <span class="product-title__names">定活通2号0300期</span>
          <span class="font-color-blue">募集中</span>
          <span class="float-right">到期日 <span class="font-color-red">2017.02.10</span></span>
        </div>
        <div class="product-amount">
          <div class="product-amount__left">
            <div class="product-amount__left_detail">
              <span class="font-size-biggest">6.2%</span><span class="font-size-largest">+0.2%</span>
            </div>
            <p class="font-color-gray">预期年化收益率</p>
          </div>
          <div class="product-amount__right">
            <div class="product-amount__right_detail">
              <div>
                <span class="font-color-gray">投资金额</span>
                <span>￥50,000.00</span>
              </div>
              <div>
                <span class="font-color-gray">预期总收益</span>
                <span>￥--</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-invest-list__row">
        <div class="product-title">
          <span class="product-title__names">定活通2号0300期</span>
          <span class="font-color-blue">募集中</span>
          <span class="float-right">到期日 <span class="font-color-red">2017.02.10</span></span>
        </div>
        <div class="product-amount">
          <div class="product-amount__left">
            <div class="product-amount__left_detail">
              <span class="font-size-biggest">6.2%</span><span class="font-size-largest">+0.2%</span>
            </div>
            <p class="font-color-gray">预期年化收益率</p>
          </div>
          <div class="product-amount__right">
            <div class="product-amount__right_detail">
              <div>
                <span class="font-color-gray">投资金额</span>
                <span>￥50,000.00</span>
              </div>
              <div>
                <span class="font-color-gray">预期总收益</span>
                <span>￥--</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
  @import "../../../style/variables";

  .my-invest-list{
    margin-top: 1.3rem;

    &__row {
      padding: .3rem;
      margin-bottom: .3rem;
      background: @bg-white;
    }
  }

  .product-title {
    &__name {
      max-width: 45%;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .font-size-medium;
    }
  }

  .product-amount {
    padding-top: .5rem;
    display: flex;

    &__left {
      flex: 0 0 45%;
      border-right: 1px solid @line-color;

      &_detail {
        display: flex;
        .font-color-red;
      }
    }

    &__right {
      flex: 1;
      padding-left: .6rem;
      padding-bottom: .1rem;

      &_detail {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
      }
    }
  }
</style>
