<template>
  <section>
    <div>
      <transfer-header></transfer-header>
      <transfer-content></transfer-content>
      <!-- <transfer-modal></transfer-modal> -->
    </div>
  </section>
</template>

<script>
  import TransferHeader from './TransferHeader'
  import TransferContent from './TransferContent'
  // import TransferModal from './TransferModal'

  export default {
    data () {
      return {
      }
    },
    components: {TransferHeader, TransferContent}
  }
</script>
