<template>
  <div>
    <div class="cus-mangent-login" v-for="login in customerLoginInfos">
      <div class="cus-mangent-login__item">
        {{ login.loginDate }}&nbsp;&nbsp;&nbsp;&nbsp;{{ login.loginTime }}
      </div>
      <div class="cus-mangent-login__item text-right">
        <img class="cus-mangent-login__item_way" v-if="login.loginFrom === 'PYT_MOBLIE'" src="../../../images/shop/login-app.png" />
        <img class="cus-mangent-login__item_way" v-if="login.loginFrom === 'PC'" src="../../../images/shop/login-pc.png" />
        <img class="cus-mangent-login__item_way" v-if="login.loginFrom === 'PYT_WECHAT'" src="../../../images/shop/login-wechat.png" />
      </div>
    </div>
    <div class="load-more font-size-small">{{ tip }}</div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        customerLoginInfos: 'shop/customerDetail/customerLoginInfos',
        loginCount: 'shop/customerDetail/loginCount'
      }),
      tip () {
        return this.loginCount ? '以上是该用户近' + this.loginCount + '次登录情况' : '无最近登录信息'
      }
    }
  }
</script>

<style lang="less">
  @import "../../../style/variables";

  .cus-mangent-login {
    display: flex;
    width: 100%;
    height: 1.04rem;
    background-color: @bg-white;
    border-bottom: 1px solid @line-color;
    font-size: @font-size-medium;
    align-items: center;

    &__item {
      flex: 1;
      padding: 0 0.3rem;

      &_way {
        width: 0.78rem;
      }
    }
  }
</style>
