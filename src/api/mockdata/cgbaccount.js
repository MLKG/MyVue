const user = {
  status: 'success',
  data: {
    cgbUser: {
      phoneNo: '18613090825',
      cardNo: '6214********4166',
      bankName: '中国建设银行',
      bankCode: 'CCB'
    }
  }
}

const balance = {
  status: 'success',
  data: {
    balance: {
      vAccountNo: 123,  // 电子账户
      vAccAmt: 500, // 电子账户可用余额
      vAccFreezeAmt: 500, // 电子账户冻结金额
      vAccTotalAmt: 1000 // 总余额
    },
    cgbUser: user.data.cgbUser
  }
}

const isOpenAccount = {
  status: 'success',
  data: {
    isOpenAccount: false
  }
}

export default {
  user,
  balance,
  isOpenAccount
}
