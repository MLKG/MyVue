import * as types from './mutation-types/common'

export default {
  [types.AUTH_FAILURE] (state, payload) {
    document.querySelector('#common-message').style.display = 'block'
    state.popMessage = payload.message
    setTimeout(() => {
      document.querySelector('#common-message').style.display = 'none'
    }, 2000)
  },
  [types.AUTH_USERINFO] (state, payload) {
    state.userInfo = payload.data.user
  },
  [types.AUTH_ISLOGIN] (state) {
    state.isLogin = true
  },
  [types.AUTH_CLEARUSERINFO] (state) {
    state.userInfo = {}
    state.isLogin = false
  },
  [types.SET_POPMESSAGE] (state, payload) {
    state.popShow = true
    state.popMessage = payload.message
  },
  [types.CLEAR_POPSHOW] (state) {
    state.popShow = false
  },
  [types.CLEAR_POPMESSAGE] (state) {
    state.popMessage = ''
  }
}
