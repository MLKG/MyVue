<template>
  <section>
    <div class="transfer-content">
      <form name="productPurchase">
        <!-- 输入框 -->
        <div class="input transfer-content__row">
          <label for="purchaseAmount"><span class="font-size-small">转让份额</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="font-color-gray">100份起投, 1份递增</span></label>
          <div class="input__block">
            <div class="input__block_text">
              <input type="tel" name="purchaseAmount" id="purchaseAmount" >
              <img src="../../../images/puyitou/X.png" />
              <span class="btn-function btn-function__blue">全部转让</span>
            </div>
          </div>
          <div class="input__block_profit">
            <span>转让价格 : &nbsp;&nbsp;&nbsp;<span class="font-color-red">&yen; --</span></span>
            <span class="mark mark__blue">?</span>
          </div>
        </div>
        <div class="gap"></div>
        <div class="transfer-content__row form-group">
          <label for="redPacket" class="form-group__label">派发红包</label>
          <input type="tel" name="redPacket" id="redPacket" class="form-group__input" placeholder="建议派发0-102.32元">
        </div>
        <p>* 搭配红包能使转让成功率提升213%</p>
        <button type="button" class="btn-bottom btn-bottom_red" :disabled="isDisabled" @click="isPasswordPop = !isPasswordPop">提交</button>
      </form>
    </div>
    <section>
      <transition name="fade-in-down">
        <div class="modal" v-if="isPasswordPop">
          <div class="modal-dialog">
            <div class="modal-content modal-content__normal transfer-modal">
              <div class="modal-header">
                请输入交易密码
              </div>
              <div class="modal-body transfer-modal__password">
                <input type="text" name="" class="transfer-modal__password-input" placeholder="交易密码 (非银行卡密码)">
                <p class="text-right font-color-blue">忘记交易密码?</p>
              </div>
              <div class="modal-footer transfer-modal__footer">
                <button type="button" class="modal-footer__btn transfer-modal__btn font-color-gray" @click="isPasswordPop = !isPasswordPop">取消</button>
                <button type="button" class="modal-footer__btn transfer-modal__btn font-color-blue" @click="">确定</button>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div v-if="isPasswordPop">
          <span class="modal-shadow"></span>
        </div>
      </transition>
    </section>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        isDisabled: false,
        isPasswordPop: false
      }
    }
  }
</script>

<style lang="less">
  @import "../../../style/variables";

  .transfer-content {
    &__row {
      background: @bg-white;
    }

    p {
      padding-left: .3rem;
      .font-color-gray;
    }
  }

  .transfer-modal {
    &__block {
      padding: .25rem .1rem;
      border-top: 1px solid @line-color;
    }

    &__body {
      padding: 0 .25rem;
    }

    &__row {
      display: flex;
      justify-content: space-between;
      .font-color-gray;
      margin-bottom: .25rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__footer {
      display: flex;
    }

    &__btn {
      background: @bg-white;
      flex: 1;
      border: none;
      border-right: 1px solid @line-color;
    }

    &__password {
      text-align: center;
      padding-bottom: .5rem;
      padding: 0 .3rem .3rem .3rem;
      &-input {
        border: none;
        height: 0.7rem;
        width: 97%;
        border: 1px solid #808080;
        border-radius: 5px;
        .font-size-medium;
        padding-left: .1rem;
      }
    }
  }

  .btn-function {
    padding: .15rem .2rem;
    display: inline-block;
    border-radius: 5px;

    &__blue {
      border: 1px solid @font-color-blue;
      .font-color-blue;
    }
  }

  .mark {
    width: .35rem;
    height: .35rem;
    border-radius: 100%;
    display: inline-block;
    text-align: center;
    margin-left: .2rem;

    &__blue {
      .font-color-blue;
      border: 1px solid @font-color-blue;
    }
  }

  .form-group {
    display: flex;
    padding: .3rem;
    .font-size-medium;

    &__label {
      flex: 0 0 23%;
    }

    &__input {
      flex: 1;
      border: none;
    }
  }

  & .input {
      background-color: @bg-white;
      padding-left: 0.3rem;

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

        &_text {
          flex: 1;
          height: 1.4rem;
          display: flex;
          align-items: center;
          border-bottom: 1px solid @line-color;
          padding-right: .3rem;
          input {
            width: 63%;
            border: none;
            font-size: @font-size-max;
            height: 0.6rem;
            padding: 0.4rem 0;
          }

          img {
            width: 0.35rem;
            padding: 0.3rem;
          }
        }

        &_profit {
          height: 0.98rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 0.2rem;
        }
      }
    }
</style>
