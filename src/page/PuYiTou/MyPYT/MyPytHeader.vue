<template>
  <section>
    <div class="my-pyt-header">
      <div class="my-pyt-header__account">
        <span class="my-pyt-header__total-amount">20,210.36</span>
        <p class="font-color-gray">总资产(￥) <span class="mark">?</span></p>
      </div>
      <div class="my-pyt-header__row">
        <router-link to="/mypyt/myassetsincome" class="my-pyt-header__col">
          <p class="my-pyt-header__amount">1,083.16</p>
          <p class="font-color-gray">累计收益(￥)</p>
        </router-link>
        <div class="my-pyt-header__col">
          <p class="my-pyt-header__amount">1,083.16</p>
          <p class="font-color-gray">可用余额(￥)</p>
        </div>
      </div>
      <div class="my-pyt-header__button">
        <button type="button" class="my-pyt-header__btn my-pyt-header__btn_white">提现</button>
        <button type="button" class="my-pyt-header__btn my-pyt-header__btn_red">充值</button>
      </div>
    </div>
    <div class="gap"></div>
  </section>
</template>

<style lang="less" scoped>
  @import "../../../style/variables";

  .mark {
    width: .4rem;
    height: .4rem;
    border-radius: 100%;
    display: inline-block;
    background: @bg-orange;
    color: #fff;
  }
  .my-pyt-header {
    padding: .5rem .3rem .4rem;
    background: @bg-white;

    &__account {
      text-align: center;
    }

    &__total-amount {
      min-height: .8rem;
      .font-color-red;
      .font-size-biggest;
      display: block;
    }

    &__amount {
      min-height: .6rem;
      .font-size-big;
    }

    &__row {
      display: flex;
      justify-content: space-between;
    }

    &__col {
      flex: 0 0 45%;
      text-align: center;
    }

    &__button {
      display: flex;
      justify-content: space-between;
      margin-top: .3rem;
    }

    &__btn {
      flex: 0 0 45%;
      padding: .2rem 0;
      border-radius: .6rem;
      border: 2px solid @bg-red;
      .font-size-largest;

      &_white {
        background: #fff;
        color: @font-color-red;
      }

      &_red {
        background: @bg-red;
        color: #fff;
      }
    }
  }
</style>
