<template>
  <div>
    <button @click="loginInClick()">登录</button>
    <br/>
    <br/>
    <button @click="loginOutClick()">注销</button>
    <br/>
    <br/>
    <button>
      <router-link to="/index">首页</router-link>
    </button>
    <br/>
    <br/>
    <p>{{ userInfo }}</p>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        imgSrc: ''
      }
    },
    computed: {
      ...mapGetters({
        userInfo: 'userInfo'
      })
    },
    methods: {
      ...mapActions({
        login: 'dalin/user/login',
        getUserInfo: 'dalin/user/getUserInfo',
        loginOut: 'dalin/user/loginOut'
      }),
      loginInClick () {
        let o = {name: '15279122390', pass: 'pyt333333'}
        this.login(o).then(() => this.getUserInfo())
      },
      loginOutClick () {
        this.loginOut()
      }
    }
  }
</script>
