<template>
  <section>
    <div class="c-line">已选好友</div>
    <ul class="l-block">
      <li class="c-block__row">
        <span>理想</span>
      </li>
      <li class="c-block__row">
        <span>理想</span>
        <div class="c-calculate">
          <button type="button" class="c-calculate__btn">-</button>
          <span class="c-calculate__result">1</span>
          <button type="button" class="c-calculate__btn">+</button>
        </div>
      </li>
    </ul>
    <div class="c-line with-top-border text-center">
      <router-link to="/mypyt/sharecouponstep1">
        <img src="../../../images/puyitou/add-icon.png" style="width: 4%;">
        <span>继续添加好友</span>
      </router-link>
    </div>
    <p class="c-tip">
      <span class="float-left">分享张数： 5 张</span>
      <span class="float-right">剩余张数： 8 张</span>
    </p>
    <button type="button" class="btn-bottom btn-bottom_red" @click="isPasswordPop = !isPasswordPop">确认</button>

    <section>
      <transition name="fade-in-down">
        <div class="modal" v-if="isPasswordPop">
          <div class="modal-dialog">
            <div class="modal-content modal-content__normal c-modal">
              <div class="modal-header">
                请输入交易密码
              </div>
              <div class="modal-body c-modal__password">
                <input type="text" name="" class="c-modal__password-input" placeholder="交易密码 (非银行卡密码)">
                <img src="../../../images/puyitou/close-icon.png" class="c-modal__icon">
                <p class="text-right font-color-blue">忘记交易密码?</p>
              </div>
              <div class="modal-footer c-modal__footer">
                <button type="button" class="modal-footer__btn c-modal__btn font-color-gray" @click="isPasswordPop = !isPasswordPop">取消</button>
                <button type="button" class="modal-footer__btn c-modal__btn font-color-blue" @click="">确定</button>
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
        isPasswordPop: false
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  .with-top-border {
    border-top: 1px solid @line-color;
  }

  .c-line {
    padding: .3rem;
    background: @bg-white;
    .font-size-medium;
    border-bottom: 1px solid @line-color;
    position: relative;

    &:last-child {
      border-bottom: none;
    }
  }

  .l-block {
    background: @bg-white;
  }

  .c-block {
    &__row {
      display: flex;
      margin-left: .3rem;
      padding: .3rem .3rem .3rem 0;
      justify-content: space-between;
      .font-size-medium;
      border-bottom: 1px solid @line-color;

      &:last-child {
        border-bottom: none;
      }
    }

    &__select-icon {
      width: .32rem;
      height: .32rem;
    }
  }

  .c-calculate {
    &__btn {
      border: none;
      background: @bg-red;
      color: @font-color-white;
      .font-size-larger;
      width: .5rem;
      height: .5rem;
      border-radius: 5px;
    }

    &__result {
      width: .6rem;
      display: inline-block;
      text-align: center;
    }
  }

  .c-tip {
    padding: 0 .3rem;
  }

  .c-modal {
    position: relative;
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

    &__icon {
      position: absolute;
      right: .5rem;
      width: 8%;
      top: .3rem;
    }
  }

</style>
