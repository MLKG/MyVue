<template>
  <div>
    <form name="productPurchase" @submit.prevent="submit">
      <div class="product-footer">
        <div class="product-footer__input">
          <label for="tradeShare">数量（份）</label>
          <input type="number" id="tradeShare" class="product-footer__input_count" placeholder="请输入购买份数" v-model="tradeShare" @focus="clearErrMsg" />
        </div>
        <div class="product-footer_tip font-color-gray" v-show="showTip">
          单价：{{productDetail.onePrice}}元/份&nbsp;&nbsp;&nbsp;&nbsp;
          单笔限购{{productDetail.singleMaxShare}}份
        </div>
        <div class="product-footer_tip font-color-red" v-show="!showTip">{{errMsg}}</div>
        <button type="submit" class="fix-submit" disabled v-show="!productDetail.canBuy">非购买时间段</button>
        <button type="submit" class="fix-submit" :disabled="isDisabled" v-show="productDetail.canBuy">购买</button>
      </div>
      <div class="confirm-box" v-show="risk">
        <div class="confirm-box__content">
          <div class="confirm-box__text">
            <p class="title">风险评估</p>
            <div class="gray">风险评估有利于您理解所需承担的风险和回报。</div>
          </div>
          <div class="confirm-box__buttons">
            <a class="cancel" @click="cancelClick()">暂不评估</a>
            <a class="ok" @click="goRisk()">立即评估</a>
          </div>
        </div>
      </div>
      <div class="confirm-box" v-show="puYiPay">
        <div class="confirm-box__content">
          <div class="confirm-box__text">
            <div>当前购买需用广发电子账户支付，<br />是否确定开通账户。</div>
          </div>
          <div class="confirm-box__buttons">
            <a class="cancel" @click="cancelClick()">取消</a>
            <a class="ok" @click="goPuYiPay()">确定</a>
          </div>
        </div>
      </div>
      <div class="confirm-box" v-show="desc">
        <div class="confirm-box__content">
          <div class="confirm-box__text">
            <p class="title">犹豫期说明</p>
            <p class="one-line gray">保险合同生效后{{productDetail.hesitation}}天为犹豫期，如果您在合同生效后，犹豫期内改变主意，我们将退还您已支付的全部保险费。</p>
          </div>
          <div class="confirm-box__buttons">
            <a class="ok" @click="goPurchase()">知道了</a>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        tradeShare: '',
        errMsg: '',
        showTip: true,
        risk: false,
        puYiPay: false,
        desc: false
      }
    },
    computed: {
      ...mapGetters({
        productDetail: 'ttl/productDetail/productDetail',
        isOpenAccount: 'ttl/productDetail/isOpenAccount',
        isRiskLevel: 'ttl/productDetail/isRiskLevel',
        systemUrl: 'ttl/productDetail/systemUrl'
      }),
      isDisabled () {
        return !this.tradeShare
      }
    },
    methods: {
      submit () {
        const tradeShare = this.tradeShare
        const singleMaxShare = this.productDetail.singleMaxShare
        if (!this._validation.isNumber(tradeShare)) {
          this.errMsg = '请输入正确的购买数量'
          this.showTip = false
        } else if (tradeShare > singleMaxShare) {
          this.errMsg = '购买数量不能超过' + singleMaxShare + '份'
          this.showTip = false
        } else {
          // 风险测评
          if (this.isRiskLevel) {
            // 广发电子账户
            if (this.isOpenAccount) {
              this.desc = true
            } else {
              this.puYiPay = true
            }
          } else {
            this.risk = true
          }
        }
      },
      clearErrMsg () {
        this.showTip = true
      },
      cancelClick () {
        this.risk = false
        this.puYiPay = false
        this.desc = false
      },
      goRisk () {
        window.location.href = this.systemUrl + 'wechat/#/my-risk-assessment'
      },
      goPuYiPay () {
        this.$router.push({path: '/puyipay/openaccount/info', query: {backUrl: 'productdetail', productId: this.productDetail.productId}})
      },
      goPurchase () {
        sessionStorage.setItem('productName', this.productDetail.productName)
        this.$router.push({path: '/ttl/productpurchase', query: {tradeShare: this.tradeShare, productId: this.productDetail.productId}})
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";
  @import "../../../style/common";
  @import "../../../style/form";

  .product-footer {
    background-color: @bg-white;
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 1080px;

    &__input {
      display: flex;
      height: 0.9rem;
      align-items: center;
      padding: 0 0.3rem;
      border-top: 1px solid @line-color;
      border-bottom: 1px solid @line-color;
      font-size: @font-size-small;

      &_count {
        flex: 1;
        outline: none;
        border: none;
        padding: .25rem 0;
        text-align: right;
        font-size: @font-size-small;
      }
    }

    &_tip {
      text-align: right;
      padding-right: 0.3rem;
      height: 0.9rem;
      line-height: 0.9rem;
    }
  }
</style>
