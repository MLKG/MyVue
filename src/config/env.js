let httpUrl
let systemUrl

if (process.env.NODE_ENV === 'development') {
  httpUrl = 'http://localhost:8080/proxy/api/'
  systemUrl = 'http://localhost:8080/'
} else {
  if (location.host.indexOf('localhost') !== -1) {
    httpUrl = 'http://localhost:1337/api/'  // build后集成到tomcat微信中vue目录下的本地调试
  } else if (location.host.indexOf('test2016.puyitou.com') !== -1) {  // 58
    httpUrl = 'http://test2016.puyitou.com/wechat/api/'
    systemUrl = 'http://test2016.puyitou.com/'
  } else if (location.host.indexOf('t.puyitou.com') !== -1) { // 同构
    httpUrl = 'http://t.puyitou.com/wechat/api/'
    systemUrl = 'http://t.puyitou.com/'
  } else if (location.host.indexOf('www.puyitou.com') !== -1) {
    httpUrl = 'https://www.puyitou.com/wechat/api/'
    systemUrl = 'https://www.puyitou.com/'
  } else if (location.host.indexOf('z.puyitou.com') !== -1) {
    httpUrl = 'https://z.puyitou.com/wechat/api/'
    systemUrl = 'https://www.puyitou.com/'
  } else if (location.host.indexOf('10.88.2.54') !== -1) {
    httpUrl = 'http://10.88.2.54:1339/wechat/api/'
    systemUrl = 'https://www.puyitou.com/'
  }
}

export {
  httpUrl,
  systemUrl
}
