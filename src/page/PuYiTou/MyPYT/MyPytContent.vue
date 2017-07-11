<template>
  <section>
    <div class="my-pyt-content">
      <div class="my-pyt-content__row">
        <div class="my-pyt-content__col_mid">
          <router-link to="/mypyt/myinvest" class="short-cut">
            <div class="short-cut__title">
              <img src="../../../images/common/invest-icon.png" class="short-cut__icon">
              <span class="font-size-large">我的投资</span>
            </div>
            <p class="short-cut__desc">我持有的产品</p>
          </router-link>
        </div>
        <div class="my-pyt-content__col_mid">
          <a class="short-cut">
            <div class="short-cut__title">
              <img src="../../../images/common/caledar-icon.png" class="short-cut__icon">
              <span class="font-size-large">回款日历</span>
            </div>
            <p class="short-cut__desc">定期回款，一目了然</p>
          </a>
        </div>
      </div>
      <div class="my-pyt-content__row">
        <div class="my-pyt-content__col_mid">
          <router-link to="/mypyt/mycoupon" class="short-cut">
            <div class="short-cut__title">
              <img src="../../../images/common/coupon-icon.png" class="short-cut__icon">
              <span class="font-size-large">我的卡包</span>
            </div>
            <p class="short-cut__desc">返现红包, 加息券</p>
          </router-link>
        </div>
        <div class="my-pyt-content__col_mid">
          <router-link to="/mypyt/myfortunedetail" class="short-cut">
            <div class="short-cut__title">
              <img src="../../../images/common/detail-icon.png" class="short-cut__icon">
              <span class="font-size-large">资金明细</span>
            </div>
            <p class="short-cut__desc">所有交易记录</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="gap"></div>
    <div class="my-pyt-content">
      <div class="my-pyt-content__row">
        <div class="my-pyt-content__col_large">
          <a class="short-cut">
            <!-- <div class="short-cut__title">
              <img src="../../../images/common/teacher-icon.png" class="short-cut__icon_small">
              <span class="font-size-large">我的理财师</span>
            </div> -->
            <div class="short-cut__title">
              <img src="../../../images/common/shop-icon.png" class="short-cut__icon_small">
              <span class="font-size-large">我的网店</span>
            </div>
            <p class="short-cut__desc">我的旗下客户投资详情</p>
          </a>
        </div>
      </div>
    </div>
    <div class="gap"></div>
    <div class="my-pyt-content">
      <div class="my-pyt-content__row">
        <div class="my-pyt-content__col_mid">
          <router-link to="/mypyt/modifyloginpwd" class="short-cut">
            <div class="short-cut__title">
              <img src="../../../images/common/password-icon.png" class="short-cut__icon">
              <span class="font-size-large">密码修改</span>
            </div>
            <p class="short-cut__desc">修改登陆密码，交易密码</p>
          </a>
        </div>
        <div class="my-pyt-content__col_mid">
          <a class="short-cut">
            <div class="short-cut__title">
              <img src="../../../images/common/adward-icon.png" class="short-cut__icon">
              <span class="font-size-large">我的奖品</span>
            </div>
            <p class="short-cut__desc">获得的奖品</p>
          </a>
        </div>
      </div>
      <div class="my-pyt-content__row">
        <div class="my-pyt-content__col_mid">
          <a class="short-cut">
            <div class="short-cut__title">
              <img src="../../../images/common/card-icon.png" class="short-cut__icon">
              <span class="font-size-large">我的银行卡</span>
            </div>
            <p class="short-cut__desc">绑定/更改银行卡</p>
          </a>
        </div>
        <div class="my-pyt-content__col_mid">
          <a class="short-cut">
            <div class="short-cut__title">
              <img src="../../../images/common/high-set-icon.png" class="short-cut__icon">
              <span class="font-size-large">高级设置</span>
            </div>
            <p class="short-cut__desc">账户信息以及其他设置</p>
          </a>
        </div>
      </div>
    </div>
    <div class="gap"></div>
  </section>
</template>

<style lang="less" scoped>
  @import "../../../style/variables";

  .my-pyt-content {
    background: #fff;
    padding: 0 .3rem;

    &__row {
      display: flex;
      justify-content: space-between;
      padding: .3rem 0 .2rem;
      border-bottom: 1px solid @line-color;

      &:last-child {
        border-bottom: none;
      }
    }

    &__col {
      &_mid {
        flex: 0 0 45%;

        &:nth-child(2) {
          padding-left: .9rem;
        }
      }

      &_large {
        flex: 1;
      }
    }
  }

  .short-cut {
    display: block;

    &__title {
      display: flex;
      align-items: center;
      margin: 0;
      .font-size-medium;
    }

    &__icon {
      width: 16%;
      margin-right: .1rem;

      &_small {
        width: 8%;
        margin-right: .1rem;
      }
    }

    &__desc {
      .font-color-gray;
    }
  }
</style>
