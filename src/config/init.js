import Vue from 'vue'
import store from '../store'
import router from '../router'
import userApi from '../api/user'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import wx from 'weixin-js-sdk'
// use vue-awesome-swiper
Vue.use(VueAwesomeSwiper)

// 判断是否为微信
// let isWechat = /MicroMessenger/i.test(navigator.userAgent.toLowerCase())

document.addEventListener('DOMContentLoaded', function () {
  let width = document.documentElement.clientWidth
  document.documentElement.style.fontSize = width < 1080 ? width / 7.5 + 'px' : '144px'
  document.documentElement.setAttribute('data-dpr', window.devicePixelRatio)

  // 微信分享
  // if (isWechat) {
  //   userApi.init(res => {
  //     let config = res.data.config
  //     wx.config({
  //       debug: false,
  //       appId: config.appId,
  //       timestamp: config.timestamp,
  //       nonceStr: config.nonceStr,
  //       signature: config.signature,
  //       jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'chooseImage', 'uploadImage']
  //     })
  //   })

  //   let apiList = ['onMenuShareTimeline', 'onMenuShareAppMessage']
  //   apiList.forEach(name => {
  //     wx[name]({
  //       title: 'dalin是最棒的！',
  //       desc: '世界上最棒的男人的成功之路！',
  //       imgUrl: '',
  //       link: window.location.href
  //     })
  //   })
  // }
})

window.addEventListener('resize', function () {
  let width = document.documentElement.clientWidth
  document.documentElement.style.fontSize = width < 1080 ? width / 7.5 + 'px' : '144px'
})

router.afterEach(function (transition) {
  if (transition.meta.title) {
    document.title = transition.meta.title
  } else {
    document.title = 'Dalin'
  }
})

// 同步用户登陆状态userInfo isAuth代表是否登录
userApi.isLogin(res => {
  routerCtr()
  let isLogin = res.data.login
  if (!isLogin) {
    store.commit('AUTH_CLEARUSERINFO', res)
  } else {
    store.commit('AUTH_ISLOGIN', res)
    userApi.getUserInfo(res => {
      store.commit('AUTH_USERINFO', res)
    })
  }
})

function routerCtr () {
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireLogin)) {
      if (!store.getters.isLogin) {
        next({path: '/login', query: {redirect: encodeURIComponent(to.fullPath)}})
      } else {
        next()
      }
    } else {
      next()
    }
  })
}

