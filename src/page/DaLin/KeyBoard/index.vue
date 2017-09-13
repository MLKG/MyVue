<template>
  <div class="keyboard">
    <form name="passwordForm" @submit.prevent="submit">
      <label for="myPassword">登录密码</label>
      <input type="text" name="myPassword" />
    </form>
    <div class="">
  </div>
</template>

<style lang="less" scoped>
  @import "../../../style/variables";

  .keyboard {
    font-size: @font-size-medium;
    label {
      margin-top: 0.2rem;
      display: inline-block;
      padding: 0 0.3rem;
    }
    input {
      border: none;
      height: 1.0rem;
      width: 6.9rem;
      margin-top: 0.2rem;
      font-size: @font-size-very;
      padding: 0 0.3rem;
    }
  }
</style>
