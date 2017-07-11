<template>
  <div>
    <ps-header></ps-header>
    <ps-content></ps-content>
  </div>
</template>

<script>
  import PsHeader from './PsHeader'
  import PsContent from './PsContent'

  export default {
    components: {
      PsHeader,
      PsContent
    }
  }
</script>
