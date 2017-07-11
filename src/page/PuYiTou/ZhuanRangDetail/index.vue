<template>
  <div>
    <zhuan-rang-header></zhuan-rang-header>
    <zhuan-rang-content></zhuan-rang-content>
  </div>
</template>

<script>
  import ZhuanRangHeader from './ZhuanRangHeader'
  import ZhuanRangContent from './ZhuanRangContent'

  export default {
    components: {
      ZhuanRangHeader,
      ZhuanRangContent
    }
  }
</script>
