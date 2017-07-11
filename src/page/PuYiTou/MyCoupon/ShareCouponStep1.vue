<template>
  <section>
    <div class="l-search">
      <form class="c-search">
        <img src="../../../images/puyitou/search-icon.png" class="c-search__icon" v-show="!telInput">
        <input type="tel" name="" class="c-search__input" placeholder="搜索手机号码添加好友" maxlength="11" v-model="telInput">
        <button class="c-search__btn" v-show="telInput">确定</button>
      </form>
    </div>
    <div class="c-tel-list">
      <div class="c-tel-list__header">
        <span>key</span>
      </div>
      <ul class="l-block">
        <li class="c-block__row">
          <span>理想</span>
          <span v-if=""><img src="../../../images/puyitou/select-icon.png" class="c-block__select-icon"></span>
        </li>
        <li class="c-block__row">
          <span>理想</span>
          <span v-if=""><img src="../../../images/puyitou/select-icon.png" class="c-block__select-icon"></span>
        </li>
      </ul>
    </div>
    <p class="text-center font-color-gray l-mt">↑您目前还没有好友，点击上方输入框添加↑</p>
    <router-link to="/mypyt/sharecouponstep2" class="btn-bottom btn-bottom_red">下一步</a>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        telInput: ''
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  .l-mt {
    margin-top: .5rem;
  }

  .c-search {
    background: @bg-gray-dark;
    padding: .15rem .3rem;
    display: flex;
    position: relative;

    &__icon {
      background: @bg-white;
      position: absolute;
      left: 22%;
      width: 5%;
      padding-top: .15rem;
    }

    &__input {
      padding: 0;
      height: .64rem;
      border: none;
      border-radius: 5px;
      text-align: center;
      flex: 1;
      .font-size-medium;
    }

    &__btn {
      position: absolute;
      border: none;
      background: @bg-white;
      height: .64rem;
      width: 1rem;
      right: .4rem;
      .font-color-blue;
      .font-size-medium;
    }
  }

  .c-tel-list {
    &__header {
      height: .6rem;
      line-height: .6rem;
      padding-left: .3rem;
    }
  }

  .l-block {
    background: @bg-white;
  }

  .c-block {
    &__row {
      display: flex;
      margin-left: .3rem;
      padding: .3rem .3rem .3rem 0;
      justify-content: space-between;
      .font-size-medium;
      border-bottom: 1px solid @line-color;

      &:last-child {
        border-bottom: none;
      }
    }

    &__select-icon {
      width: .32rem;
      height: .32rem;
    }
  }

</style>
