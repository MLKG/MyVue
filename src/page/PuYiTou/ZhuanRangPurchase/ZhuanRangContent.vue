<template>
  <div>
    <div class="purchase-content">
      <form name="productPurchase" @submit.prevent="submit">
        <!-- 输入框 -->
        <div class="input">
          <label for="purchaseAmount"><span class="font-size-small">认购份额(份)</span>&nbsp;&nbsp;<span class="font-color-blue">1000份起投，1份递增，上限2000份</span></label>
          <div class="input__block">
            <div class="input__block_text">
              <input type="tel" name="purchaseAmount" id="purchaseAmount" >
              <div class="input__block_all">
                <img src="../../../images/puyitou/X.png" />
                <span>余额全投</span>
              </div>
            </div>
          </div>
          <div class="input__block_profit">
            <div>实际投资金额 <span class="font-color-red">1000.00</span></div>
            <div>获得红包 <span class="font-color-red">&yen; 88.00</span></div>
          </div>
          <div class="input__block_benfit">预期收益 <span class="font-color-red">1000.00</span></div>
        </div>
        <div class="gap"></div>
        <!-- 选择优惠 -->
        <div class="coupon" @click="selectCoupon()">
          <div><span class="font-size-small">选择优惠方式</span>&nbsp;&nbsp;<span class="font-color-gray">参与活动可获得多种优惠券</span></div>
          <div class="coupon_select">
            <span class="font-color-gray">暂无可选择的优惠</span>
            <span class="font-color-red"  v-if="false">您有可选择的优惠</span>
            <img src="../../../images/puyitou/go-right.png" />
          </div>
        </div>
        <div class="purchase-content_term">
          <!-- 协议 -->
          <div>阅读<router-link to="/term"><span class="font-color-blue">《入会协议》</span></router-link><router-link to="/term"><span class="font-color-blue">《产品协议》</span></router-link></div>
        </div>
        <!-- 底部提交按钮 -->
        <div class="btn-bottom_placeholder"></div>
        <button type="submit" class="btn-bottom btn-bottom_red" @click="goPurchase()" disabled>同意协议并投资</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goPurchase () {
        this.$router.push({path: '/purchasesuccess'})
      },
      submit () {
        console.log('666')
      },
      selectCoupon () {
        this.$router.push({path: '/selectcoupon'})
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  .purchase-content {

    & .input {
      background-color: @bg-white;
      padding-left: 0.2rem;

      label {
        display: block;
        padding: 0.3rem 0 0.15rem;
      }

      &__block {
        display: flex;
        align-items: center;

        &_yen {
          flex: 0 0 0.4rem;
          font-size: @font-size-biggest;
          margin-bottom: 0.1rem;
        }

        &_all {
          display: flex;
          align-items: center;

          span {
            display: inline-flex;
            width: 1.4rem;
            border: 1px solid @font-color-blue;
            padding: 0.1rem 0;
            justify-content: center;
            margin-right: 0.2rem;
            color: @font-color-blue;
            border-radius: 3px;
          }
        }

        &_text {
          flex: 1;
          height: 1.4rem;
          border-bottom: 1px solid @line-color;
          display: flex;
          align-items: center;

          input {
            width: 100%;
            border: none;
            font-size: @font-size-max;
            height: 0.6rem;
            padding: 0.4rem 0;
          }

          img {
            width: 0.35rem;
            padding: 0.2rem;
          }
        }

        &_profit {
          height: 0.98rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 0.2rem;
        }

        &_benfit {
          padding-bottom: 0.3rem;
        }
      }
    }

    & .coupon {
      background-color: @bg-white;
      padding: 0.35rem 0.2rem;

      &_select {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 0.25rem;

        img {
          width: 0.24rem;
        }
      }
    }

    &_term {
      color: @font-color-gray;
      padding: 0.2rem;
      line-height: 0.48rem;
    }

    &__table {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 3;
      background: rgba(0, 0, 0, 0.5);

      img {
        width: 0.66rem;
        left: 84%;
        transform: translateX(-50%);
        position: absolute;
        top: 20%;
      }

      &_content {
        background: @bg-white;
        width: 5.4rem;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        font-size: @font-size-medium;
        border-radius: 10px;
        position: absolute;
        top: 28%;
        line-height: 1
      }

      &_title {
        padding-top: .3rem;
        padding-bottom: .3rem;
        border-bottom: 1px solid @line-color;
        font-size: @font-size-large;
        .font-bold();
      }

      &_list {
        padding: 0 0.2rem;
        color: @font-color-gray;

        & .item {
          height: 0.86rem;
          display: flex;
          align-items: center;
          border-bottom: 1px solid @line-color;

          span {
            flex: 0 0 50%;
          }

          &:last-child {
            border-bottom: none;
          }
        }
      }
    }
  }

</style>
