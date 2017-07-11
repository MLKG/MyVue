import Vue from 'vue'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { httpUrl } from './env'
import router from '../router'
// import authData from 'src/api/mockdata/auth'
// import onlinestoreData from 'src/api/mockdata/onlinestore'
// import cgbinsuranceData from 'src/api/mockdata/cgbinsurance'
// import cgbbankcardData from 'src/api/mockdata/cgbbankcard'
// import cgbaccountData from 'src/api/mockdata/cgbaccount'
// import cgbwithdrawData from 'src/api/mockdata/cgbwithdraw'
// import cgbpolicyData from 'src/api/mockdata/cgbpolicy'
// import cgbregisterData from 'src/api/mockdata/cgbregister'
// import cgbloanData from 'src/api/mockdata/cgbloan'
// import cgbsurrenderData from 'src/api/mockdata/cgbsurrender'
// import starStoreData from 'src/api/mockdata/starStore'

Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)

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

// function getMockData (apiPath, json) {
//   let index = apiPath.indexOf('/')
//   let ctrl = apiPath.slice(0, index)
//   let name = apiPath.slice(index + 1, apiPath.length)
//   let data = {}
//   if (ctrl === 'auth') {
//     data = authData[name]
//   } else if (ctrl === 'onlinestore') {
//     data = onlinestoreData[name](json)
//   } else if (ctrl === 'cgbinsurance') {
//     data = cgbinsuranceData[name](json)
//   } else if (ctrl === 'cgbbankcard') {
//     data = cgbbankcardData[name]
//   } else if (ctrl === 'cgbaccount') {
//     data = cgbaccountData[name]
//   } else if (ctrl === 'cgbwithdraw') {
//     data = cgbwithdrawData[name]
//   } else if (ctrl === 'cgbpolicy') {
//     data = cgbpolicyData[name](json)
//   } else if (ctrl === 'cgbregister') {
//     data = cgbregisterData[name]
//   } else if (ctrl === 'cgbloan') {
//     data = cgbloanData[name]
//   } else if (ctrl === 'cgbsurrender') {
//     data = cgbsurrenderData[name]
//   } else if (ctrl === 'starStore') {
//     data = starStoreData[name](json)
//   }
//   return new Promise((resolve, reject) => {
//     if (data.status === 'success') {
//       setTimeout(resolve, 200, data)
//     } else {
//       setTimeout(reject, 200, data)
//     }
//   })
// }

export default function fetch (path, json, pop = true) {
  // let currentRoute = router.currentRoute.path
  // let el = currentRoute.indexOf('/puyipay') === 0 || currentRoute.indexOf('/ttl') === 0 ? document.querySelector('#cgbLoadingPopup') : document.querySelector('#loadingPopup')
  let el = document.querySelector('#loadingPopup')
  if (false) { // process.env.USE_MOCK_DATA
    // return getMockData(path, json)
  } else {
    pop && el && el.classList.remove('hide')
    return Vue.http.post(httpUrl + path, json)
      .then(res => Promise.resolve(res.body))
      .catch(err => {
        // 如果未登录，则接口返回401
        if (err.body.errorCode === 401) {
          router.push('/login')
        // 无访问权限，则接口返回403
        } else if (err.body.errorCode === 403) {
          // window.location.href = window.location.origin + window.location.pathname.replace('vue/', '') + '#/index'
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
}
