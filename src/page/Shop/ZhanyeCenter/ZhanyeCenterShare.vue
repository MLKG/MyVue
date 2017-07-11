<template>
  <div class="share-link">
    <div class="share-link__block" v-for="share in promoList" @click="shareToFriend(share.id)">
      <div class="share-link__block_title">
        {{share.title}}
      </div>
      <div class="share-link__block_label red" v-if="share.activeType === 1">官方活动</div>
      <div class="share-link__block_label yellowish" v-if="share.activeType === 2">机构活动</div>
      <div class="share-link__block_content">
        <div class="share-link__block_img">
          <img :src="share.imgUrlPath" />
        </div>
        <div class="share-link__block_desc">{{share.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        promoList: 'shop/zhanyeCenter/promoList',
        goLink: 'shop/zhanyeCenter/goLink'
      })
    },
    mounted () {
      this.getMobilePromoList()
    },
    methods: {
      ...mapActions({
        getMobilePromoList: 'shop/zhanyeCenter/getMobilePromoList'
      }),
      ...mapMutations({
        share: 'shop/zhanyeCenter/SHARE_TO_FRIENDS'
      }),
      shareToFriend (id) {
        this.share({ id })
        window.location.href = this.goLink
      }
    }
  }
</script>

<style lang="less">
  @import "../../../style/variables";

  .share-link {
    padding: .34rem;
    margin-top: .93rem;

    &__block {
      background-color: @bg-white;
      border:1px solid @line-color;
      border-radius: 8px;
      padding: .22rem;
      margin-bottom: .3rem;
      position: relative;

      &_title {
        height: .56rem;
        line-height: .56rem;
        font-size: @font-size-large;
        border-bottom: 1px solid @line-color;
        padding-bottom: .17rem;
        font-weight: 500;
      }

      &_label {
        padding: .04rem .11rem;
        text-align: center;
        position: absolute;
        right: -.11rem;
        top: .25rem;

        &.red {
          border: 1px solid @font-color-red;
          color: @font-color-red;
          background-color: @bg-redlight;
        }

        &.yellowish {
          border: 1px solid @font-color-yellowish;
          color: @font-color-yellowish;
          background-color: @bg-yellowlight;
        }
      }

      &_content {
        padding-top: .28rem;
        display: inline-flex;
        width: 100%;
      }

      &_img {
        display: table-cell;
        width: 1.46rem;
        img {
          width: 90%;
        }
      }

      &_desc {
        display: table-cell;
        width: 70%;
        line-height: .45rem;
      }
    }
  }
</style>
