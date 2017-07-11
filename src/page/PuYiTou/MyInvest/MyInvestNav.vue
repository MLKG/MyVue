<template>
  <section>
    <nav class="navbar navbar-default">
      <ul class="navbar-nav">
        <li @click="selectNav('name')">
          <span>定活通<i class="caret"></i></span>
          <ul class="dropdown-menu" v-show="selectedNav === 'name'">
            <li>定活通</li>
          </ul>
        </li>
        <li @click="selectNav('status')">
          <span>{{selectedStatus}} <i class="caret"></i></span>
          <ul class="dropdown-menu" v-show="selectedNav === 'status'">
            <li v-for="(item, index) in statusList" v-show="index !== 0" @click.stop="selectStatus(item)">{{item.INVEST_NAME}}</li>
          </ul>
        </li>
      </ul>
    </nav>
    <span class="shadow" v-show="selectedNav" @click="selectedNav = ''"></span>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        selectedNav: '',
        selectedStatus: '所有状态',
        statusList: [
          {'INVEST_STATE': '13', 'INVEST_NAME': '状态'},
          {'INVEST_STATE': '0', 'INVEST_NAME': '所有状态'},
          {'INVEST_STATE': '8', 'INVEST_NAME': '募集中'},
          {'INVEST_STATE': '9', 'INVEST_NAME': '募集成功'},
          {'INVEST_STATE': '10', 'INVEST_NAME': '可转让'},
          {'INVEST_STATE': '11', 'INVEST_NAME': '转让中'},
          {'INVEST_STATE': '4', 'INVEST_NAME': '已清算'}
        ]
      }
    },
    methods: {
      selectNav (type) {
        this.selectedNav = type
      },
      selectStatus (type) {
        this.selectedNav = ''
        this.selectedStatus = type.INVEST_NAME
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  .caret {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px dashed;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
  }

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: block;
    z-index: 10;

    &-default {
      background: @bg-white;
      border-bottom: 1px solid @line-color;
    }

    &-nav {
      list-style: none;
      display: flex;
      padding: .3rem 0;

      > li {
        flex: 1;
        text-align: center;
        border-right: 1px solid @line-color;

        &:last-child {
          border-right: none;
        }

        > .dropdown-menu {
          position: absolute;
          left: 0;
          display: block;
          width: 100%;
          text-align: left;
          top: .85rem;
          background: @bg-white;
          border-top: 1px solid @line-color;
          padding-left: .3rem;

          > li {
            padding: .2rem 0;
            line-height: .5rem;
            border-bottom: 1px solid @line-color;
          }
        }
      }
    }
  }
</style>
