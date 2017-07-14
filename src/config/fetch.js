import Vue from 'vue'
import router from '../router'
import { httpUrl } from './env'
import VueResource from 'vue-resource'

// use vue-resource
Vue.use(VueResource)

Vue.http.options.emulateJSON = true
Vue.http.options.credentials = true // across domain with cookie
Vue.http.options.headers = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}

Vue.http.interceptors.push((request, next) => {
  // emulateJSON为true时设置字符编码
  let body = request.body
  if (body) {
    let array = []
    for (var key in body) {
      array.push(key + '=' + body[key])
    }
    request.body = array.join('&')
  }
  next()
})

export default function fetch (path, json, pop = true) {
  let el = document.querySelector('#loadingPopup')
  pop && el && el.classList.remove('hide')
  return Vue.http.post(httpUrl + path, json)
  .then(res => Promise.resolve(res.body))
  .catch(err => {
    // 如果未登录，则接口返回401
    if (err.body.errorCode === 401) {
      router.push('/login')
    // 无访问权限，则接口返回403
    } else if (err.body.errorCode === 403) {
      // 网络出错，则status===500
    } else if (err.status === 500) {
      let loadingTip = document.querySelector('#commonLoadingTip')
      pop && loadingTip.classList && loadingTip.classList.remove('hide')
      setTimeout(() => {
        pop && loadingTip.classList && loadingTip.classList.add('hide')
      }, 2000)
      // 其他错误进行统一处理
    } else {
      return Promise.reject(err.body)
    }
  })
  .finally(() => pop && el && el.classList.add('hide'))
}
