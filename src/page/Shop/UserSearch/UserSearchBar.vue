<template>
  <div class="user-search-bar">
    <div class="user-search-bar__content">
      <div class="user-search-bar__input">
        <span class="user-search-bar__input_icon">
          <img src="../../../images/shop/user-search-icon.png">
        </span>
        <div class="user-search-bar__input_bar">
          <input type="text" v-model="searchVal" placeholder="客户姓名/手机号码" @keyup="keyup($event, searchVal)" @keyup.enter="search(searchVal)">
          <span @click="clearVal" class="user-search-bar__input_clear"><img src="../../../images/shop/user-search-clear.png"></span>
        </div>
      </div>
    </div>
    <div class="user-search-bar__button" @click="search(searchVal)">搜索</div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    data () {
      return {
        searchVal: ''
      }
    },
    methods: {
      ...mapMutations({
        clearSuggest: 'shop/customerSearch/REST_SEARCHRSUGGEST_STORE'
      }),
      keyup (event, val) {
        if (event.keyCode !== 13) {
          setTimeout(() => {
            if (val === this.searchVal) {
              this.$emit('userSearchSuggest', val.trim())
            }
          }, 800)
        }
      },
      search (val) {
        if (val.trim() !== '') {
          this.$emit('getSearchResult', val.trim())
        }
      },
      clearVal () {
        this.searchVal = ''
        this.clearSuggest()
      }
    }
  }
</script>

<style lang="less">
  @import "../../../style/variables";

  .user-search-bar {
    display: flex;
    width: 100%;
    background-color: @bg-white;
    border-bottom: 1px solid @line-color;
    align-items: center;


    &__content {
      flex: 0 0 80%;
      //width: 80%;
      padding: .22rem 0 .22rem .22rem;
    }

    &__input {
      display: flex;
      width: 100%;

      &_icon {
        //width: 12%;
        flex: 0 0 0.6rem;
        background-color: @bg-color;
        height: 0.59rem;
        text-align: center;
        border-top-left-radius: 0.08rem;
        border-bottom-left-radius: 0.08rem;

        img {
          width: 0.35rem;
          padding-top: 0.16rem;
        }
      }

      &_bar {
        //width: 88%;
        flex: 0 0 5.4rem;
        height: 0.55rem;
        position: relative;

        input {
          width: 100%;
          height: 100%;
          background-color: @bg-color;
          border-radius: 0.08rem;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          font-size: @font-size-base;
          border: 0;
          outline: none;
        }
      }

      &_clear {
        position: absolute;
        right: 3%;
        top: 22%;

        img {
          width: 0.28rem;
        }
      }
    }

    &__button {
      flex: 0 0 1.2rem;
      text-align: center;
      font-size: @font-size-large;
    }
  }
</style>
