<template>
  <div class="user-search-result">共 {{ total }} 条搜索结果</div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        total: 'shop/customerSearch/total'
      })
    }
  }
</script>

<style lang="less">
  @import "../../../style/variables";

  .user-search-result {
    padding: 0.3rem;
  }
</style>
