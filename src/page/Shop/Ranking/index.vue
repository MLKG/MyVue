<template>
  <div>
    <ranking-header></ranking-header>
    <ranking-list></ranking-list>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import RankingHeader from './RankingHeader'
  import RankingList from './RankingList'

  export default {
    methods: {
      ...mapActions({
        getRankTypeList: 'shop/rank/getRankTypeList'
      })
    },
    components: {
      RankingHeader,
      RankingList
    },
    mounted () {
      this.getRankTypeList()
    }
  }
</script>
