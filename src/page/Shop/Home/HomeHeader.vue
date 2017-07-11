  <template>
  <div class="home-header">
    <div class="home-header__flex">
      <div class="home-header__flex_name">
        欢迎回来，<span class="name">{{ userInfo.displayName }}</span>
        <img class="home-header__flex_star" src="../../../images/shop/home-star.png" v-for="n in starStore.rankLevel" />
      </div>
      <div class="home-header__flex_address">机构 {{ customerInfo.mechanism }}</div>
    </div>
    <div class="home-header__income">
      <div class="home-header__income_current">
        <div>当前业绩</div>
        <div class="home-header__income_money">{{ starStore.totalArchive | currency }}</div>
      </div>
      <div class="home-header__income_flex">
        <div class="home-header__income_item"><span v-if="investInfo.month !== 0">{{ investInfo.month }}月</span>佣金收入(&yen;)&nbsp;
          <span class="font-size-largest">{{ investInfo.commissionMonth | currency }}</span>
        </div>
        <div class="home-header__income_item">本月新增投资客户&nbsp;<span class="font-size-largest">{{ customerInfo.investCountMonth }}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        userInfo: 'userInfo',
        customerInfo: 'shop/home/customerInfo',
        investInfo: 'shop/home/investInfo',
        starStore: 'shop/home/starStore'
      })
    },
    methods: {
      ...mapActions({
        getSummary: 'shop/home/getSummary'
      })
    },
    mounted () {
      this.getSummary()
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  .home-header {
    background: url('../../../images/shop/home-header.png') no-repeat;
    background-size: 100% 100%;
    color: @font-color-white;
    padding: 0.34rem 0.3rem 0;
    position: relative;
    z-index: 1;
    height: 3.2rem;

    &__flex {
      display: flex;
      width: 100%;
      border-bottom: 1px solid @font-color-white;
      padding-bottom: 0.34rem;
      font-size: @font-size-small;

      &_name {
        flex: auto;
        & .name {
          max-width: 1.8rem;
          display: inline-flex;
          white-space: nowrap;
          overflow: hidden;
        }
      }

      &_star {
        width: 0.24rem;
        margin: 0 0.03rem;
      }

      &_address {
        flex: auto;
        text-align: right;
      }
    }

    &__income {
      padding-top: 0.3rem;

      &_item {
        display: flex;
        align-items: center;
      }

      &_current {
        padding-bottom: 0.3rem;
        height: 1.08rem;
      }

      &_money {
        font-size: @font-size-big;
        padding-top: 0.1rem;
      }

      &_flex {
        display: flex;
        justify-content: space-between;
        padding-bottom: 0.3rem;
        align-items: center;
      }
    }
  }
</style>
