import fetch from '../config/fetch'

export default {
  init (cb, errorCb) {
    fetch('wechat/initJsConfig', {}, false).then(cb).catch(errorCb)
  }
}
