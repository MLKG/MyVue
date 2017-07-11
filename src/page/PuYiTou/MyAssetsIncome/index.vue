<template>
  <section>
    <div class="assets-income-header">
      <div class="assets-income-header__block">
        <p class="font-size-bigger">2450.25</p>
        <p>预期总收益 (￥)</p>
      </div>
      <div class="assets-income-header__block">
        <p class="font-size-bigger">2450.25</p>
        <p>累计收益 (￥)</p>
      </div>
    </div>
    <div class="assets-income-content">
      <div class="assets-income-content__header">
        <span class="item">产品</span>
        <span class="item">到期日</span>
        <span class="item">预期收益(￥)</span>
      </div>
      <div class="assets-income-content__list">
        <span class="item text-left">定活通1337期</span>
        <span class="item text-center">2017.11.28</span>
        <span class="item text-center">1285.36</span>
      </div>
      <div class="assets-income-content__list">
        <span class="item text-left">定活通1337期</span>
        <span class="item text-center">2017.11.28</span>
        <span class="item text-center">1285.36</span>
      </div>
      <!-- <table class="assets-income-content__table">
        <thead>
          <tr>
            <th>产品</th>
            <th>到期日</th>
            <th>预期收益(￥)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>定活通1337</td>
            <td>2017.11.28</td>
            <td>1285.36</td>
          </tr>
        </tbody>
      </table> -->
    </div>
  </section>
</template>

<style lang="less" scoped>
  @import "../../../style/variables";

  .assets-income-header {
    background: @bg-red;
    padding: .5rem 0;
    display: flex;
    .font-color-white;

    &__block {
      flex: 1;
      text-align: center;
    }
  }

  .assets-income-content {
    margin-top: .3rem;
    background: @bg-white;
    .font-size-medium;

    &__header {
      display: flex;
      padding: .3rem;
      border-bottom: 1px solid @line-color;
      .item {
        flex: 1;
        text-align: center;
      }
    }

    &__list {
      display: flex;
      padding: .3rem;
      border-bottom: 1px solid @line-color;
      .item {
        flex: 1;
      }
    }
  }
</style>
