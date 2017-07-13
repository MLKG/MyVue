<template>
  <div class="home-product">
    <div class="home-product__nav">
      <div class="item">
        <img src="../../../images/dalin/sites_01.png"/>
        <div class="title">查报价</div>
      </div>
      <div class="item">
        <img src="../../../images/dalin/sites_03.png"/>
        <div class="title">问答</div>
      </div>
      <div class="item">
        <img src="../../../images/dalin/sites_05.png"/>
        <div class="title">排行榜</div>
      </div>
      <div class="item">
        <img src="../../../images/dalin/sites_07.png"/>
        <div class="title">视频</div>
      </div>
      <div class="item">
        <img src="../../../images/dalin/sites_09.png"/>
        <div class="title">商城</div>
      </div>
    </div>
    <div class="home-product__list" v-for="(list, index) in listData">
      <div class="left">
        <div class="title">{{list.title}}</div>
        <div class="font-color-gray"><span>评论{{list.count}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{list.time}}小时前</span></div>
      </div>
      <div class="right" v-touch:long="eventFun(list, index)">
        <img src="../../../images/dalin/phone.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        listData: [{
          title: '锤子员工爆料坚果Pro销量 和官方差的不少',
          count: 18,
          time: 3
        }, {
          title: '锤子员工爆料坚果Pro销量 和官方差的不少',
          count: 18,
          time: 3
        }, {
          title: '锤子员工爆料坚果Pro销量 和官方差的不少',
          count: 18,
          time: 3
        }, {
          title: '锤子员工爆料坚果Pro销量 和官方差的不少',
          count: 18,
          time: 3
        }, {
          title: '锤子员工爆料坚果Pro销量 和官方差的不少',
          count: 18,
          time: 3
        }, {
          title: '锤子员工爆料坚果Pro销量 和官方差的不少',
          count: 18,
          time: 3
        }, {
          title: '锤子员工爆料坚果Pro销量 和官方差的不少',
          count: 18,
          time: 3
        }, {
          title: '锤子员工爆料坚果Pro销量 和官方差的不少',
          count: 18,
          time: 3
        }, {
          title: '锤子员工爆料坚果Pro销量 和官方差的不少',
          count: 18,
          time: 3
        }, {
          title: '锤子员工爆料坚果Pro销量 和官方差的不少',
          count: 18,
          time: 3
        }, {
          title: '锤子员工爆料坚果Pro销量 和官方差的不少',
          count: 18,
          time: 3
        }]
      }
    },
    methods: {
      eventFun (list, index) {
        return function (event) {
          console.log(list)
          console.log(index)
          console.log(event)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  .home-product {
    background-color: @bg-white;

    &__nav {
      display: flex;
      justify-content: space-around;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      text-align: center;

      & .item {
        img {
          width: 0.86rem;
          margin-bottom: 0.15rem;
        }
      }
    }

    &__list {
      padding: 0.2rem 0;
      margin: 0 0.2rem;
      border-bottom: 1px solid @line-color;
      display: flex;

      &:last-child {
        border-bottom: none;
      }

      & .left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & .title {
          font-size: @font-size-medium;
        }
      }

      & .right {
        padding-left: 0.1rem;

        img {
          width: 2.2rem;
          height: 100%;
        }
      }
    }
  }
</style>
