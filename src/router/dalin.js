// import Root from 'page/PuYiTou/index'
// 首页
import Home from 'page/DaLin/Home/index'

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
        title: 'dalin'
      }
    }
  ]
}
