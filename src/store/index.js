import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import dalin from './modules/dalin'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  isLogin: false,  // 是否已登录
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
    dalin
  },
  strict: debug
})
