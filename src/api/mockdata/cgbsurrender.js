// 退保详情
const detail = {
  status: 'success',
  data: {
    detail: {
      backAmount: 1000,
      backFee: 1000,
      backName: 'yinhangming',
      cardNo: '155246855',
      mobileNo: '18000000000',
      prodName: '1542',
      orderId: '4521',
      bxgsdm: '00000001'
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

export default {
  detail,
  phoneCode
}
