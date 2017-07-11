<template>
  <section>
    <transition name="fade-in-down">
      <div class="modal" v-if="isConrirmedPop">
        <div class="modal-dialog">
          <div class="modal-content modal-content__normal transfer-modal">
            <div class="modal-header">
              转让确认
            </div>
            <div class="modal-body transfer-modal__body">
              <div class="transfer-modal__block">
                <div class="transfer-modal__row">
                  <span>转让份额</span>
                  <span>2000份</span>
                </div>
                <div class="transfer-modal__row">
                  <span>转让价格</span>
                  <span>2011.22元</span>
                </div>
              </div>
              <div class="transfer-modal__block">
                <div class="transfer-modal__row">转让后剩余 :</div>
                <div class="transfer-modal__row">
                  <span>投资金额</span>
                  <span class="font-color-red">5000.00元</span>
                </div>
                <div class="transfer-modal__row">
                  <span>增利本金</span>
                  <span>2000元</span>
                </div>
              </div>
              <div class="transfer-modal__block">
                <div class="transfer-modal__row">
                  <span>手续费</span>
                  <span>5.00元</span>
                </div>
              </div>
            </div>
            <div class="modal-footer transfer-modal__footer">
              <button type="button" class="modal-footer__btn transfer-modal__btn" @click="isConrirmedPop = !isConrirmedPop">放弃</button>
              <button type="button" class="modal-footer__btn transfer-modal__btn font-color-blue" @click="">确认提交</button>
            </div>
          </div>
        </div>
        <div class="modal-dialog">
          <div class="modal-content modal-content__normal transfer-modal">
            <div class="modal-header">
              转让确认
            </div>
            <div class="modal-body">
              <input type="text" name="">
            </div>
            <div class="modal-footer transfer-modal__footer">
              <button type="button" class="modal-footer__btn transfer-modal__btn" @click="isConrirmedPop = !isConrirmedPop">取消</button>
              <button type="button" class="modal-footer__btn transfer-modal__btn font-color-blue" @click="">确定</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="isConrirmedPop">
        <span class="modal-shadow"></span>
      </div>
    </transition>
  </section>
</template>

<style lang="less" scoped>
  @import "../../../style/variables";

</style>
