// 质押取现
const detail = {
  status: 'success',
  data: {
    detail: {
      insurName: 'mingzi',
      insurOrderNo: '0000000',
      premium: 18000,
      mobileNo: '18000000000',
      maturityDate: '2016-06-10',
      cardNo: '56521255744555',
      expYield: 0.6,
      prodName: '蟾皮博',
      insurAmount: 1000,
      applNo: '50000000000000000'
    }
  }
}

// 验证码
const phoneCode = {
  status: 'success',
  data: {
    codeSeq: '123456'
  }
}

// 提交
const submit = {
  status: 'success',
  message: '修改成功'
}

export default {
  detail,
  phoneCode,
  submit
}
