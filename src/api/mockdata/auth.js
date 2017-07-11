const login = {
  status: 'success',
  message: '登录成功'
}

const isLogin = {
  status: 'success',
  data: {
    login: true
  }
}

const me = {
  status: 'success',
  data: {
    user: {
      userId: '9999P1668',
      displayName: '王乐乐',
      loginName: '18000000000',
      userType: 'P',
      shopManager: 1,
      bankPhone: '18000000000',
      bankPhoneEncrypted: '180****0000',
      bindPhone: '19000000000',
      bindPhoneEncrypted: '190****0000',
      promoCode: '2YP9PYQ',
      certNo: '21070219990101101X', // 如果未null则是未实名用户
      // certNo: null, // 如果未null则是未实名用户
      certNoEncrypted: '2107**********101X',
      bankNo: '1234123412341234',
      bankNoEncrypted: '1234********1234',
      bankName: '中国建设银行',
      bankCode: 'CCB'
    }
  }
}

const logout = {
  status: 'success',
  message: '登出成功'
}

export default {
  login,
  isLogin,
  me,
  logout
}
