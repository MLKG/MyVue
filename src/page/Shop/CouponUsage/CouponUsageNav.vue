<template>
  <div>
    <div class="coupon-nav">
      <div class="coupon-nav_item" :class="{'current': currentNav === 'used'}" @click="changeNavClick({type: 'used'})">已使用</div>
      <div class="coupon-nav_item" :class="{'current': currentNav === 'notUsed'}" @click="changeNavClick({type: 'notUsed'})">未使用</div>
    </div>
    <div class="coupon-nav_placeholder"></div>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        currentNav: 'shop/couponUsage/currentNav'
      })
    },
    methods: {
      ...mapMutations({
        changeNav: 'shop/couponUsage/CHANGE_COUPONSNAV'
      }),
      ...mapActions({
        getCouponsUsed: 'shop/couponUsage/getCouponsUsed',
        getCouponsNotUsed: 'shop/couponUsage/getCouponsNotUsed'
      }),
      changeNavClick (typeObj) {
        this.changeNav(typeObj)
        if (typeObj.type === 'used') {
          this.getCouponsUsed({date: this.$route.query.date})
        } else if (typeObj.type === 'notUsed') {
          this.getCouponsNotUsed({date: this.$route.query.date})
        }
      }
    },
    mounted () {
      // 初始化默认是已使用
      this.changeNav({type: 'used'})
      this.getCouponsUsed({date: this.$route.query.date})
    }
  }
</script>

<style lang="less">
   @import "../../../style/variables";

   .coupon-nav {
      display: flex;
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 2;
      max-width: 1080px;
      font-size: @font-size-medium;
      background-color: @bg-white;
      border-bottom: 1px solid @line-color;

      &_item {
        flex: auto;
        height: 0.9rem;
        line-height: 0.9rem;
        text-align: center;

        &.current {
          border-bottom: 1px solid @font-color-red;
          color: @font-color-red;
        }
      }

      &_placeholder {
        height: 0.9rem;
      }
   }
</style>
