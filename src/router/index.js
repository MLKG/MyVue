import Vue from 'vue'
import Router from 'vue-router'
import dalin from './dalin'
// import puyitou from './puyitou'
// import shop from './shop'
// import puyipay from './puyipay'
// import ttl from './ttl'

Vue.use(Router)

export default new Router({
  routes: [
    ...dalin.router
    // ...puyitou.router, // 普益投
    // ...shop.router, // 网店
    // ...puyipay.router,  // 广发电子账户
    // ...ttl.router // 广发天天利
  ]
})
