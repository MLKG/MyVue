<template>
  <div>
    <dht-header></dht-header>
    <dht-content></dht-content>
  </div>
</template>

<script>
  import DhtHeader from './DhtHeader'
  import DhtContent from './DhtContent'

  export default {
    components: {
      DhtHeader,
      DhtContent
    }
  }
</script>
