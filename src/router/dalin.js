// import Root from 'page/PuYiTou/index'
// 首页
import Home from 'page/DaLin/Home/index'
import Login from 'page/DaLin/Login/index'

export default {
  router: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Home',
      component: Home,
      meta: {
        requireLogin: true,
        title: '哒林数码'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录'
      }
    }
  ]
}
