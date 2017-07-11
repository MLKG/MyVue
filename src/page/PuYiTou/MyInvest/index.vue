<template>
  <section>
    <my-invest-nav></my-invest-nav>
    <my-invest-list></my-invest-list>
  </section>
</template>

<script>
  import MyInvestNav from './MyInvestNav'
  import MyInvestList from './MyInvestList'

  export default {
    data () {
      return {}
    },
    components: {MyInvestNav, MyInvestList}
  }
</script>
