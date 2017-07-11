// import userApi from '../api/user'
// import router from '../router'
// import store from '../store'

// 同步用户登陆状态userInfo isAuth
// userApi.isLogin(res => {
//   routerGuard()
//   let isLogin = res.data.login
//   if (!isLogin) {
//     store.commit('AUTH_CLEARUSERINFO', res)
//   } else {
//     store.commit('AUTH_ISLOGIN', res)
//     userApi.me(res => {
//       store.commit('AUTH_USERINFO', res)
//       // // GrowingIO登录信息
//       // if (window.location.hostname.indexOf('www.puyitou.com') !== -1) {
//       //   window._vds.push('setCS1', 'user_id', res.data.user.promoCode)
//       // }
//     })
//   }
// })

// function routerGuard () {
//   router.beforeEach((to, from, next) => {
//     // if (to.name) {
//     //   document.title = to.name
//     // } else {
//     //   document.title = '普益投'
//     // }

//     if (to.matched.some(record => record.meta.requiresAuth)) {
//       if (!store.getters.isAuth) {
//         // if (process.env.NODE_ENV === 'development') {
//         //   next({path: '/login'})
//         // } else {
//         //   window.location.href = window.location.origin + window.location.pathname.replace('vue/', '') + '#/my-puyitou?fromVUE=' + to.fullPath.replace('?', '&')
//         // }
//         next({path: '/login'})
//       } else {
//         next()
//       }
//     } else {
//       next()
//     }
//   })
// }



