import fetch from '../config/fetch'

export default {
  login (o, cb, errorCb) {
    fetch('auth/login', {username: o.name, password: o.password}).then(cb).catch(errorCb)
  },
  loginOut (cb, errorCb) {
    fetch('auth/logout').then(cb).catch(errorCb)
  },
  getUserInfo (cb, errorCb) {
    fetch('auth/me').then(cb).catch(errorCb)
  },
  isLogin (cb, errorCb) {
    fetch('auth/isLogin').then(cb).catch(errorCb)
  },
  init (cb, errorCb) {
    fetch('wechat/initJsConfig', {}, false).then(cb).catch(errorCb)
  }
}
