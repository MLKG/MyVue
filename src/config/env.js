let httpUrl
let systemUrl

if (process.env.NODE_ENV === 'development') {
  httpUrl = 'http://localhost:8018/proxy/api/'
  systemUrl = 'http://localhost:8018/'
} else {
  httpUrl = 'https://www.puyitou.com/wechat/api/'
  systemUrl = 'https://www.puyitou.com/'
}

export {
  httpUrl,
  systemUrl
}
