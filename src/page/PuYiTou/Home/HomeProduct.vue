<template>
  <div class="home-product">
    <swiper :options="swiperOptionProductDHT">
      <swiper-slide :class="{ 'home-product_no': isNoDHT}">
        <div class="home-product__item">
          <div class="yellow"></div>
          <div class="product">
            <div class="product__title" @click="toProductList()">
              <img class="product__title_icon" src="../../../images/puyitou/home-dht.png" />
              <div class="product__title_text">安全稳定 投向清晰 转让便捷</div>
              <img class="product__title_go" src="../../../images/puyitou/home-go.png" />
            </div>
            <div v-show="!isNoDHT" @click="toProductDetail()">
              <div class="product_name font-size-larger">定活通2号02259期</div>
              <div class="product_rate font-size-very dht-color">6.20%</div>
              <div class="font-color-gray">预期年化收益率</div>
              <div class="product__footer">
                <div class="product__footer_left">
                  <div class="dht-color font-size-larger">342天</div>
                  <div class="font-color-gray">投资期限</div>
                </div>
                <div class="product__footer_right">
                  <div class="dht-color font-size-larger">78万元</div>
                  <div class="font-color-gray">剩余金额</div>
                </div>
              </div>
            </div>
            <div v-show="isNoDHT">
              <div class="product_text font-size-larger">定活通</div>
              <div class="font-size-small">投资期限随心选，30天后可转让</div>
              <div class="product_tip font-color-gray">*可惜定活通已被抢光了！</div>
              <div class="font-color-gray">
                您可以去 <router-link to="/zhuanrang"><span class="product_zhuanrang">转让频道</span></router-link> 寻找合适的产品或继续等待
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide :class="{ 'home-product_no': isNoDHT}">
        <div class="home-product__item">
          <div class="yellow"></div>
          <div class="product">
            <div class="product__title">
              <img class="product__title_icon" src="../../../images/puyitou/home-dht.png" />
              <div class="product__title_text">安全稳定 投向清晰 转让便捷</div>
              <img class="product__title_go" src="../../../images/puyitou/home-go.png" />
            </div>
            <div v-show="!isNoDHT">
              <div class="product_name font-size-larger">定活通2号02259期</div>
              <div class="product_rate font-size-very dht-color">6.20%</div>
              <div class="font-color-gray">预期年化收益率</div>
              <div class="product__footer">
                <div class="product__footer_left">
                  <div class="dht-color font-size-larger">342天</div>
                  <div class="font-color-gray">投资期限</div>
                </div>
                <div class="product__footer_right">
                  <div class="dht-color font-size-larger">78万元</div>
                  <div class="font-color-gray">剩余金额</div>
                </div>
              </div>
            </div>
            <div v-show="isNoDHT">
              <div class="product_text font-size-larger">定活通</div>
              <div class="font-size-small">投资期限随心选，30天后可转让</div>
              <div class="product_tip font-color-gray">*可惜定活通已被抢光了！</div>
              <div class="font-color-gray">
                您可以去 <router-link to="/zhuanrang"><span class="product_zhuanrang">转让频道</span></router-link> 寻找合适的产品或继续等待
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide :class="{ 'home-product_no': isNoDHT}">
        <div class="home-product__item">
          <div class="yellow"></div>
          <div class="product">
            <div class="product__title">
              <img class="product__title_icon" src="../../../images/puyitou/home-dht.png" />
              <div class="product__title_text">安全稳定 投向清晰 转让便捷</div>
              <img class="product__title_go" src="../../../images/puyitou/home-go.png" />
            </div>
            <div v-show="!isNoDHT">
              <div class="product_name font-size-larger">定活通2号02259期</div>
              <div class="product_rate font-size-very dht-color">6.20%</div>
              <div class="font-color-gray">预期年化收益率</div>
              <div class="product__footer">
                <div class="product__footer_left">
                  <div class="dht-color font-size-larger">342天</div>
                  <div class="font-color-gray">投资期限</div>
                </div>
                <div class="product__footer_right">
                  <div class="dht-color font-size-larger">78万元</div>
                  <div class="font-color-gray">剩余金额</div>
                </div>
              </div>
            </div>
            <div v-show="isNoDHT">
              <div class="product_text font-size-larger">定活通</div>
              <div class="font-size-small">投资期限随心选，30天后可转让</div>
              <div class="product_tip font-color-gray">*可惜定活通已被抢光了！</div>
              <div class="font-color-gray">
                您可以去 <router-link to="/zhuanrang"><span class="product_zhuanrang">转让频道</span></router-link> 寻找合适的产品或继续等待
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-yellow" slot="pagination"></div>
    </swiper>
    <swiper :options="swiperOptionProductPS">
      <swiper-slide :class="{ 'home-product_no': isNoPS}">
        <div class="home-product__item">
          <div class="red"></div>
          <div class="product">
            <div class="product__title">
              <img class="product__title_icon" src="../../../images/puyitou/home-ps.png" />
              <div class="product__title_text">长期持有 稳健收益 安全透明</div>
              <img class="product__title_go" src="../../../images/puyitou/home-go.png" />
            </div>
            <div v-show="!isNoPS">
              <div class="product_name font-size-larger">{{ userInfo.displayName }}</div>
              <div class="product_rate font-size-very ps-color">7.20%</div>
              <div class="font-color-gray">预期年化收益率</div>
              <div class="product__footer">
                <div class="product__footer_left">
                  <div class="ps-color font-size-larger">342天</div>
                  <div class="font-color-gray">投资期限</div>
                </div>
                <div class="product__footer_right">
                  <div class="ps-color font-size-larger">18万元</div>
                  <div class="font-color-gray">剩余金额</div>
                </div>
              </div>
            </div>
            <div v-show="isNoPS">
              <div class="product_text font-size-larger">磐石理财</div>
              <div class="font-size-small">中长期投资首选，享百万级别收益率</div>
              <div class="product_tip font-color-gray">*可惜磐石理财已被抢光了！</div>
              <div class="font-color-gray">
                您可以去 <router-link to="/zhuanrang"><span class="product_zhuanrang">转让频道</span></router-link> 寻找合适的产品或继续等待
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide :class="{ 'home-product_no': isNoPS}">
        <div class="home-product__item">
          <div class="red"></div>
          <div class="product">
            <div class="product__title">
              <img class="product__title_icon" src="../../../images/puyitou/home-ps.png" />
              <div class="product__title_text">长期持有 稳健收益 安全透明</div>
              <img class="product__title_go" src="../../../images/puyitou/home-go.png" />
            </div>
            <div v-show="!isNoPS">
              <div class="product_name font-size-larger">{{ userInfo.displayName }}</div>
              <div class="product_rate font-size-very ps-color">7.20%</div>
              <div class="font-color-gray">预期年化收益率</div>
              <div class="product__footer">
                <div class="product__footer_left">
                  <div class="ps-color font-size-larger">342天</div>
                  <div class="font-color-gray">投资期限</div>
                </div>
                <div class="product__footer_right">
                  <div class="ps-color font-size-larger">18万元</div>
                  <div class="font-color-gray">剩余金额</div>
                </div>
              </div>
            </div>
            <div v-show="isNoPS">
              <div class="product_text font-size-larger">磐石理财</div>
              <div class="font-size-small">中长期投资首选，享百万级别收益率</div>
              <div class="product_tip font-color-gray">*可惜磐石理财已被抢光了！</div>
              <div class="font-color-gray">
                您可以去 <router-link to="/zhuanrang"><span class="product_zhuanrang">转让频道</span></router-link> 寻找合适的产品或继续等待
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide :class="{ 'home-product_no': isNoPS}">
        <div class="home-product__item">
          <div class="red"></div>
          <div class="product">
            <div class="product__title">
              <img class="product__title_icon" src="../../../images/puyitou/home-ps.png" />
              <div class="product__title_text">长期持有 稳健收益 安全透明</div>
              <img class="product__title_go" src="../../../images/puyitou/home-go.png" />
            </div>
            <div v-show="!isNoPS">
              <div class="product_name font-size-larger">{{ userInfo.displayName }}</div>
              <div class="product_rate font-size-very ps-color">7.20%</div>
              <div class="font-color-gray">预期年化收益率</div>
              <div class="product__footer">
                <div class="product__footer_left">
                  <div class="ps-color font-size-larger">342天</div>
                  <div class="font-color-gray">投资期限</div>
                </div>
                <div class="product__footer_right">
                  <div class="ps-color font-size-larger">18万元</div>
                  <div class="font-color-gray">剩余金额</div>
                </div>
              </div>
            </div>
            <div v-show="isNoPS">
              <div class="product_text font-size-larger">磐石理财</div>
              <div class="font-size-small">中长期投资首选，享百万级别收益率</div>
              <div class="product_tip font-color-gray">*可惜磐石理财已被抢光了！</div>
              <div class="font-color-gray">
                您可以去 <router-link to="/zhuanrang"><span class="product_zhuanrang">转让频道</span></router-link> 寻找合适的产品或继续等待
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-red" slot="pagination"></div>
    </swiper>
    <div class="home-product__ttl">
      <div class="home-product__item home-product__ttl_margin">
        <div class="blue"></div>
        <div class="product">
          <div class="product__title">
            <img class="product__title_icon" src="../../../images/puyitou/home-ttl.png" />
            <div class="product__title_text">高额收益 稳定保障</div>
            <img class="product__title_go" src="../../../images/puyitou/home-go.png" />
          </div>
          <div class="product_name font-size-larger">天天利C款：弘康一号年金保险</div>
          <div class="home-product__ttl_item">
            <div class="home-product__ttl_title font-color-gray">历史年化结算利率</div>
            <div class="ttl-color font-size-large">5.02%</div>
          </div>
          <div class="home-product__ttl_item">
            <div class="home-product__ttl_title font-color-gray">起点金额</div>
            <div class="ttl-color font-size-large">1000元</div>
          </div>
          <div class="home-product__ttl_item">
            <div class="home-product__ttl_title font-color-gray">投资期限</div>
            <div>5年后可免手续费领取</div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-product__footer">
      <div>
        <div class="ps-color font-size-larger">105亿7124万元</div>
        <div class="home-product__footer_title">累计投资总规模</div>
      </div>
      <div>
        <div class="ps-color font-size-larger">1亿7124万元</div>
        <div class="home-product__footer_title">为用户赚取</div>
      </div>
    </div>
    <div class="home-product__intro">
      <img src="../../../images/puyitou/home-star.png" />
      <span class="font-size-larger">普益投为什么值得信赖？</span>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        isNoDHT: false,
        swiperOptionProductDHT: {
          pagination: '.swiper-pagination',
          slidesPerView: 'auto',
          paginationClickable: true,
          loop: true
        },
        isNoPS: false,
        swiperOptionProductPS: {
          pagination: '.swiper-pagination',
          slidesPerView: 'auto',
          paginationClickable: true,
          loop: true
        }
      }
    },
    methods: {
      toProductList () {
        this.$router.push({path: '/productlist'})
      },
      toProductDetail (productId) {
        this.$router.push({path: '/dhtdetail', query: {productId: 1111}})
      }
    },
    computed: {
      ...mapGetters({
        userInfo: 'userInfo'
      })
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";
  @dht-color: #fc9131;
  @ps-color: #e84644;
  @ttl-color: #41aff5;

  .dht-color {
    color: @dht-color;
  }

  .ps-color {
    color: @ps-color;
  }

  .ttl-color {
    color: @ttl-color;
  }

  .swiper-container {
    height: 5.2rem;
    margin-bottom: 0.4rem;
  }

  .swiper-slide {
    width: 7.05rem;

    &.home-product_no {
      width: 7.3rem;
    }
  }

  .home-product {
    margin-top: 0.4rem;

    &__item {
      display: flex;
      height: 4.6rem;
      margin-left: 0.2rem;

      & .yellow {
        flex: 0 0 0.1rem;
        background-color: @dht-color;
        border-bottom-left-radius: 4px;
        border-top-left-radius: 4px;
      }

      & .red {
        flex: 0 0 0.1rem;
        background-color: @ps-color;
        border-bottom-left-radius: 4px;
        border-top-left-radius: 4px;
      }

      & .blue {
        flex: 0 0 0.1rem;
        background-color: @ttl-color;
        border-bottom-left-radius: 4px;
        border-top-left-radius: 4px;
      }

      & .product {
        flex: 1;
        text-align: center;
        background-color: @bg-white;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;

        &__title {
          height: 0.93rem;
          border-top-right-radius: 4px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid @line-color;

          &_icon {
            width: 1.85rem;
            height: 0.56rem;
            padding-left: 0.1rem
          }

          &_text {
            flex: 1;
            color: @font-color-gray;
            text-align: right;
            font-size: @font-size-smaller;
          }

          &_go {
            flex: 0 0 0.13rem;
            padding-right: 0.1rem;
            padding-left: 0.1rem;
            width: 0.13rem;
            height: 0.27rem;
          }
        }

        &_name {
          height: 1.2rem;
          line-height: 1.2rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          width: 6.0rem;
          display: inline-block;
        }

        &_text {
          margin-top: 0.4rem;
          margin-bottom: 0.1rem;
        }

        &_tip {
          margin-top: 0.8rem;
          margin-bottom: 0.1rem;
        }

        &_zhuanrang {
          color: @ps-color;
          text-decoration: underline;
        }

        &_rate {
          height: 0.85rem;
        }

        &__footer {
          display: flex;
          justify-content: space-between;
          height: 1.23rem;

          &_left {
            padding-left: 0.7rem;
          }

          &_right {
            padding-right: 0.7rem;
          }
        }
      }
    }

    &__ttl {
      margin-bottom: 0.4rem;

      &_margin {
        margin-right: 0.2rem;
      }

      &_item {
        display: flex;
        height: 0.66rem;
        align-items: center;
      }

      &_title {
        flex: 0 0 3.0rem;
        text-align: left;
        padding-left: 0.5rem;
      }
    }

    &__footer {
      height: 1.6rem;
      background-color: @bg-white;
      display: flex;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      border-bottom: 1px solid @line-color;

      &_title {
       margin-top: 0.1rem
      }
    }

    &__intro {
      height: 1.28rem;
      background-color: @bg-white;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 0.36rem;
        height: 0.34rem;
        padding-right: 0.1rem;
      }
    }
  }
</style>

<style lang="less">
  @import "../../../style/variables";
  @dht-color: #fc9131;
  @ps-color: #e84644;

  .swiper-pagination-yellow {
    display: flex;
    align-items: center;
    justify-content: center;

    &.swiper-pagination-bullets {
      bottom: 0;
    }

    & .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background: @dht-color;
      opacity: 0.3;
    }

    & .swiper-pagination-bullet-active {
      background: @dht-color;
      opacity: 1;
      width: 16px;
      height: 16px;
    }
  }

  .swiper-pagination-red {
    display: flex;
    align-items: center;
    justify-content: center;

    &.swiper-pagination-bullets {
      bottom: 0;
    }

    & .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background: @ps-color;
      opacity: 0.3;
    }

    & .swiper-pagination-bullet-active {
      background: @ps-color;
      opacity: 1;
      width: 16px;
      height: 16px;
    }
  }
</style>
