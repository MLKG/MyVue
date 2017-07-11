<template>
  <section>
    <div class="transfer-header">
      <div class="transfer-header__title">
        可转让份额 : <span class="font-size-bigger">10000</span> 份
        <span class="mark mark__white">?</span>
      </div>
    </div>
    <div class="gap"></div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  .mark {
    width: .35rem;
    height: .35rem;
    border-radius: 100%;
    display: inline-block;
    text-align: center;
    margin-left: .2rem;

    &__white {
      .font-color-white;
      border: 1px solid @bg-white;
    }
  }
  .transfer-header {
    padding: .4rem .3rem;
    background-color: @bg-red;
    padding-left: .3rem;
    .font-color-white;
  }
</style>
