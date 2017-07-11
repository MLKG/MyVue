<template>
  <div class="info-set">
    <div class="info-set_gray">
      客户动态微信推送
    </div>
    <div class="info-set_block">
      <div class="info-set_block_item">
        <div class="line">
          <div class="float-left">有新用户注册并投资</div>
          <div class="info-set_btn">
            <label class="switch-btn circle-style">
              <input class="checked-switch" type="checkbox" v-model="register" @click="setNotificationSettings({register: Number(!notificationSettings.register), firstInvest: notificationSettings.firstInvest, commission: notificationSettings.commission, weekly: notificationSettings.weekly})"/>
              <span class="text-switch"></span>
              <span class="toggle-btn"></span>
            </label>
          </div>
        </div>
        <div class="line">
          <div class="float-left">客户首次投资</div>
          <div class="info-set_btn">
            <label class="switch-btn circle-style">
              <input class="checked-switch" type="checkbox" v-model="firstInvest" @click="setNotificationSettings({firstInvest: Number(!notificationSettings.firstInvest), register: notificationSettings.register, commission: notificationSettings.commission, weekly: notificationSettings.weekly})"/>
              <span class="text-switch"></span>
              <span class="toggle-btn"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="info-set_gray">
      资金动态微信推送
    </div>
    <div class="info-set_block">
      <div class="info-set_block_item">
        <div class="line">
          <div class="float-left">每月佣金到账</div>
          <div class="info-set_btn">
            <label class="switch-btn circle-style">
              <input class="checked-switch" type="checkbox" v-model="commission" @click="setNotificationSettings({commission: Number(!notificationSettings.commission), register: notificationSettings.register, firstInvest: notificationSettings.firstInvest, weekly: notificationSettings.weekly})"/>
              <span class="text-switch"></span>
              <span class="toggle-btn"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="info-set_gray">
      客户动态推送
    </div>
    <div class="info-set_block">
      <div class="info-set_block_item">
        <div class="line">
          <div class="float-left">每周周报</div>
          <div class="info-set_btn">
            <label class="switch-btn circle-style">
              <input class="checked-switch" type="checkbox" v-model="weekly" @click="setNotificationSettings({weekly: Number(!notificationSettings.weekly), register: notificationSettings.register, firstInvest: notificationSettings.firstInvest, commission: notificationSettings.commission})"/>
              <span class="text-switch"></span>
              <span class="toggle-btn"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        notificationSettings: 'shop/zhanyeCenter/notificationSettings'
      }),
      register () {
        return this.notificationSettings.register
      },
      firstInvest () {
        return this.notificationSettings.firstInvest
      },
      commission () {
        return this.notificationSettings.commission
      },
      weekly () {
        return this.notificationSettings.weekly
      }
    },
    mounted: function () {
      this.setNotificationSettings()
    },
    methods: {
      ...mapActions({
        setNotificationSettings: 'shop/zhanyeCenter/setNotificationSettings'
      })
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  .info-set {
    margin-top: 0.93rem;

    &_gray {
      height: .84rem;
      line-height: .84rem;
      padding-left: .3rem;
      font-size: @font-size-small;
    }

    &_block {
      background-color: @bg-white;
      font-size: @font-size-medium;
      border-top: 1px solid @line-color;
      border-bottom:1px solid @line-color;

      &_item {
        padding-left:.3rem;

        .line {
          border-bottom: 1px solid @line-color;
          height: .98rem;
          line-height: .98rem;

          &:last-child {
            border-bottom: none;
          }
        }
      }

      & .switch-btn {
        position: relative;
        display: block;
        vertical-align: top;
        width: 1rem;
        height: .56rem;
        border-radius: .56rem;
      }

      & .checked-switch {
        position: absolute;
        top: .03rem;
        left: .08rem;
        opacity: 0;

        &:checked ~ .text-switch {
          background-color: #ed5b49;
          border: 1px solid #d2402e;
        }

        &:checked ~ .toggle-btn {
          left: .39rem;
        }
      }

      & .text-switch {
        background-color: #fff;
        border: 1px solid #DDD;
        border-radius: inherit;
        color: #fff;
        display: block;
        height: inherit;
        position: relative;
        text-transform: uppercase;
      }

      & .toggle-btn {
        background: linear-gradient(#fff, #fafafa);
         border-radius: 100%;
         height: .53rem;
         left: 0;
         position: absolute;
         top: .01rem;
         width: .53rem;
         border:1px solid #DDD;
       }

      & .text-switch, .toggle-btn {
        transition: All 0.3s ease;
        -webkit-transition: All 0.3s ease;
         -moz-transition: All 0.3s ease;
         -o-transition: All 0.3s ease;
       }
    }

    &_btn {
      padding-right: .3rem;
      padding-top: 0.2rem;
      float: right;
    }
  }
</style>
