<template>
  <div class="common-message" id="common-message">
    <div class="common-message__cell">
      <span class="common-message__text">{{ popMessage }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      popMessage () {
        return this.$store.getters.popMessage
      }
    }
  }
</script>

<style lang="less">
  .common-message {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    bottom: 0;
    right: 0;

    &__cell {
      position: fixed;
      text-align: center;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 3rem;
    }

    &__text {
      background: rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      color: #fff;
      padding: .2rem .4rem;
    }
  }
</style>
