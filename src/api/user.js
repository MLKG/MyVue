import fetch from '../config/fetch'

export default {
  login (o, cb, errorCb) {
    fetch('auth/login', {username: o.name, password: o.pass}).then(cb).catch(errorCb)
  },
  logout (cb, errorCb) {
    fetch('auth/logout').then(cb).catch(errorCb)
  },
  me (cb, errorCb) {
    fetch('auth/me').then(cb).catch(errorCb)
  },
  isLogin (cb, errorCb) {
    fetch('auth/isLogin').then(cb).catch(errorCb)
  }
}
