import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
// import shop from './modules/shop'
// import puyipay from './modules/puyipay'
// import ttl from './modules/ttl'
// import temp from './modules/temp'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  isAuth: false,  // 是否已登录
  userInfo: {},
  popShow: false,
  popMessage: ''
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    // shop,  // 网店
    // puyipay,  // 广发电子账户
    // ttl, // 广发天天利
    // temp  // 调试用
  },
  strict: debug
})
