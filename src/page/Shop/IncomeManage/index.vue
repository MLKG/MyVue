<template>
	<div class="IncomeManage">
    <income-all></income-all>
    <shop-common-bottom-nav :current="bottomNav"></shop-common-bottom-nav>
	</div>
</template>

<script>
  import ShopCommonBottomNav from 'page/Shop/Common/ShopCommonBottomNav'
  import IncomeAll from './IncomeAll'

  export default {
    name: 'IncomeManage',
    data () {
      return {
        bottomNav: 'income'
      }
    },
    components: {
      ShopCommonBottomNav,
      IncomeAll
    }
  }
</script>
