// 修改银行预留手机号
const modifyPhone = {
  status: 'success',
  message: '修改成功'
}

// 修改银行预留手机号码-发送手机验证码
const phoneCodeForPhone = {
  status: 'success',
  data: {
    codeSeq: '123456'
  },
  message: 'something wrong'
}

// 更换银行卡-获取手机验证码
const phoneCodeForCard = {
  status: 'success',
  data: {
    codeSeq: '654321'
  },
  message: 'something wrong'
}

// 更换银行卡
const modifyCard = {
  status: 'success',
  message: '修改成功'
}

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
    cgbUser: user.data.cgbUser,
    bankLimit: {
      id: 1,
      bankId: 1,
      paySingleLimit: 1,
      paySingleDaylimit: 1
    }
  }
}

const bankList = {
  status: 'success',
  data: {
    bankList: [
      {
        bankCode: 'ICBC',
        bankName: '中国工商银行',
        bankShortName: '工商银行'
      },
      {
        bankCode: 'ABC',
        bankName: '中国农业银行',
        bankShortName: '农业银行'
      },
      {
        bankCode: 'BOC',
        bankName: '中国银行',
        bankShortName: '中国银行'
      }
    ]
  }
}

export default {
  modifyPhone,
  phoneCodeForPhone,
  modifyCard,
  phoneCodeForCard,
  balance,
  bankList
}
