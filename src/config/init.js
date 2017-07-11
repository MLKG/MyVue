// import FastClick from 'fastclick'
// import wx from 'weixin-js-sdk'
// import wxApi from '../api/weixin'
// let isWechat = /MicroMessenger/i.test(navigator.userAgent.toLowerCase())

import router from '../router'

document.addEventListener('DOMContentLoaded', function () {
  let width = document.documentElement.clientWidth
  document.documentElement.style.fontSize = width < 1080 ? width / 7.5 + 'px' : '144px'
  document.documentElement.setAttribute('data-dpr', window.devicePixelRatio)
  // FastClick.attach(document.body)

  // if (isWechat) {
  //   wxApi.init(res => {
  //     let config = res.data.config
  //     wx.config({
  //       debug: false,
  //       appId: config.appId,
  //       timestamp: config.timestamp,
  //       nonceStr: config.nonceStr,
  //       signature: config.signature,
  //       jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'chooseImage', 'uploadImage']
  //     })
  //   })

  //   let apiList = ['onMenuShareTimeline', 'onMenuShareAppMessage']
  //   apiList.forEach(name => {
  //     wx[name]({
  //       title: '普益投，越投越快乐！',
  //       desc: '普益投，是普益财富旗下的金融信息科技平台。',
  //       imgUrl: '',
  //       link: window.location.href
  //     })
  //   })
  // }
})

window.addEventListener('resize', function () {
  let width = document.documentElement.clientWidth
  document.documentElement.style.fontSize = width < 1080 ? width / 7.5 + 'px' : '144px'
})

router.afterEach(function (transition) {
  if (transition.meta.title) {
    document.title = transition.meta.title
  } else {
    document.title = 'Dalin'
  }
})
