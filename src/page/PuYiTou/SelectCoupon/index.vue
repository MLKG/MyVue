<template>
  <div>
    <select-nav></select-nav>
    <select-tab-one></select-tab-one>
    <select-tab-two v-if="false"></select-tab-two>
  </div>
</template>

<script>
  import SelectNav from './SelectNav'
  import SelectTabOne from './SelectTabOne'
  import SelectTabTwo from './SelectTabTwo'

  export default {
    components: {
      SelectNav,
      SelectTabOne,
      SelectTabTwo
    }
  }
</script>
