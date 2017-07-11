<template>
  <div>
    <div class="ranking-header">
      <div class="ranking-header__name" @click="clickRanking()" :class="{'active': selectedShow}">
        {{selectedTitle}}<span class="ranking-header__name_caret"></span>
      </div>
      <div class="ranking-header__list" v-if="selectedShow">
        <div class="ranking-header__list_name" v-for="select in selectedList" @click="selectedRanking(select.typeCode, select.typeName)">
          {{select.typeName}}<img class="ranking-header__list_img" v-if="selectedType === select.typeCode" src="../../../images/shop/ranking-select.png" />
        </div>
      </div>
    </div>
    <div class="ranking-header_placeholder"></div>
    <div class="ranking-header_count">单位：元</div>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'

  export default {
    data () {
      return {
        selectedShow: false    // 控制变量
      }
    },
    computed: {
      ...mapGetters({
        selectedType: 'shop/rank/selectedType',
        selectedTitle: 'shop/rank/selectedTitle',
        selectedList: 'shop/rank/selectedList'
      })
    },
    methods: {
      ...mapActions({
        getPromoRankList: 'shop/rank/getPromoRankList'
      }),
      ...mapMutations({
        changeRankType: 'shop/rank/SELECT_RANKTYPE'
      }),
      selectedRanking (typeCode, typeName) {
        this.selectedShow = false
        this.changeRankType({typeCode, typeName})
        this.getPromoRankList({type: typeCode})
      },
      clickRanking () {
        this.selectedShow = !this.selectedShow
      }
    },
    mounted () {
      this.getPromoRankList({type: this.selectedType})
    }
  }
</script>

<style lang="less">
  @import "../../../style/variables";

  .ranking-header {
    text-align: center;
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100%;
    max-width: 1080px;

    &_placeholder {
      width: 100%;
      height: 1.036rem;
    }

    &_count {
      text-align: right;
      padding-right: .28rem;
      padding-top: .14rem;
      font-size: @font-size-smallest;
    }

    &__name {
      background-color: @bg-white;
      display: table;
      width: 100%;
      height: 1.036rem;
      line-height: 1.036rem;
      font-size: @font-size-medium;
      border-bottom: 1px solid @line-color;
      // padding-left: .14rem;

      &_caret {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: .56px;
        vertical-align: middle;
        border-top: .168rem dashed ;
        border-right: .168rem solid transparent;
        border-left: .168rem solid transparent;
      }

      &.active {
        .ranking-header__name_caret{
          .transform-rotate(180deg);
        }
      }
    }

    &__list {
      position: fixed;
      left: 0;
      right: 0;
      font-size: @font-size-medium;
      z-index: 1;

      &_name {
        height: 1.036rem;
        line-height: 1.036rem;
        background-color: @bg-white;
        border-bottom: 1px solid @line-color;
        position: relative;
      }

      &_img {
        width: .504rem;
        position: absolute;
        top: 0.238rem;
        right: .28rem;
      }
    }
  }
</style>
