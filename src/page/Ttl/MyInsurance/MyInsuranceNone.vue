<template>
  <div>
    <div class="no-list">
      --未持有产品，以下为您推荐--
    </div>
    <product-list></product-list>
  </div>
</template>

<script>
  import ProductList from '../ProductList/index'

  export default {
    components: {ProductList}
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  .no-list {
    text-align: center;
    padding-top: .3rem;
    .font-color-gray;
    .font-size-medium;
  }
</style>
