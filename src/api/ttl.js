import fetch from '../config/fetch'

export default {
  // 产品列表页面
  productList (cb, errorCb) {
    fetch('cgbinsurance/productList', {}).then(cb).catch(errorCb)
  },
  // 产品详情页面
  productDetail (o, cb, errorCb) {
    fetch('cgbinsurance/productDetail', {productId: o.productId}).then(cb).catch(errorCb)
  },
  // 产品核保页面
  productRecord (o, cb, errorCb) {
    fetch('cgbinsurance/insuranceInfo', o).then(cb).catch(errorCb)
  },
  checkExamine (o, cb, errorCb) {
    fetch('cgbinsurance/examine', o).then(cb).catch(errorCb)
  },
  // 我的保险理财
  myInsuranceBalance (cb, errorCb) {
    fetch('cgbaccount/balance', {}).then(cb).catch(errorCb)
  },
  holdList (o, cb, errorCb) {
    fetch('cgbpolicy/holdList', {page: o.page, rows: o.rows}).then(cb).catch(errorCb)
  },
  historyList (o, cb, errorCb) {
    fetch('cgbpolicy/historyList', {page: o.page, rows: o.rows}).then(cb).catch(errorCb)
  },
  loanList (o, cb, errorCb) {
    fetch('cgbpolicy/loanList', {page: o.page, rows: o.rows}).then(cb).catch(errorCb)
  },
  loanDetail (o, cb, errorCb) {
    fetch('cgbloan/detail', {applNo: o.applNo, proCode: o.proCode}).then(cb).catch(errorCb)
  },
  phoneCodeForLoan (o, cb, errorCb) {
    fetch('cgbloan/phoneCode', {prodName: o.prodName}).then(cb).catch(errorCb)
  },
  loanSubmit (o, cb, errorCb) {
    fetch('cgbloan/submit', {insurorderno: o.insurorderno, productCode: o.productCode, verifyCode: o.verifyCode, codeSeq: o.codeSeq}).then(cb).catch(errorCb)
  },
  loanTerms (o, cb, errorCb) {
    fetch('cgbloan/loanTerms', {applNo: o.applNo, proCode: o.proCode}).then(cb).catch(errorCb)
  },
  surrenderDetail (o, cb, errorCb) {
    fetch('cgbsurrender/detail', {applNo: o.applno, bxgsdm: o.bxgsdm}).then(cb).catch(errorCb)
  },
  surrenderPhoneCode (o, cb, errorCb) {
    fetch('cgbsurrender/phoneCode', {phoneNo: o.phoneNo}).then(cb).catch(errorCb)
  },
  surrenderSubmit (o, cb, errorCb) {
    fetch('cgbsurrender/submit', {orderId: o.orderId, bxgsdm: o.insurCode, verifyCode: o.verifyCode}).then(cb).catch(errorCb)
  }
}
