<template>
  <div class="user-search-item__outer">
    <div class="user-search-item__outer-opt">
      <div v-for="user in suggestUsers" class="user-search-item" @click="view(user.userId)">
        <div class="user-search-item__wrapper">
          <div class="user-search-item__name">{{ user.name }}</div>
          <div class="user-search-item__phone">{{ user.phone }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        suggestUsers: 'shop/customerSearch/suggestUsers'
      })
    },
    methods: {
      view (uid) {
        this.$router.push('cusmangent/' + uid)
      }
    }
  }
</script>

<style lang="less">
  @import "../../../style/variables";

  .user-search-item {
    background-color: @bg-white;
    padding: .3rem;
    border-bottom: 1px solid @line-color;

    &__outer {
      position: relative;
      z-index: 1;

      &-opt {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }

    &__wrapper {
      display: table;
      width: 100%;
    }

    &__name {
      display: table-cell;
      width: 15%;
    }

    &__phone {
      display: table-cell;
      width: 85%;
    }
  }
</style>
