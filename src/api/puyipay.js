import fetch from '../config/fetch'

export default {
  modifyPhone (o, cb, errorCb) {
    fetch('cgbbankcard/modifyPhone', {phoneNo: o.phoneNo, verifyCode: o.verifyCode, codeSeq: o.codeSeq}).then(cb).catch(errorCb)
  },
  phoneCodeForPhone (o, cb, errorCb) {
    fetch('cgbbankcard/phoneCodeForPhone', {phoneNo: o.phoneNo}).then(cb).catch(errorCb)
  },
  modifyCard (o, cb, errorCb) {
    fetch('cgbbankcard/modifyCard', {cardNo: o.cardNo, phoneNo: o.phoneNo, verifyCode: o.verifyCode, codeSeq: o.codeSeq}).then(cb).catch(errorCb)
  },
  phoneCodeForCard (o, cb, errorCb) {
    fetch('cgbbankcard/phoneCodeForCard', {phoneNo: o.phoneNo, cardNo: o.cardNo}).then(cb).catch(errorCb)
  },
  balance (cb, errorCb) {
    fetch('cgbbankcard/balance', {}).then(cb).catch(errorCb)
  },
  bankList (cb, errorCb) {
    fetch('cgbbankcard/bankList', {}).then(cb).catch(errorCb)
  },
  user (cb, errorCb) {
    fetch('cgbaccount/user', {}).then(cb).catch(errorCb)
  },
  isOpenAccount (cb, errorCb) {
    fetch('cgbaccount/isOpenAccount', {}).then(cb).catch(errorCb)
  },
  uploadImages (o, cb, errorCb) {
    fetch('cgbregister/uploadImages', {frontImage: o.frontImage, backImage: o.backImage}).then(cb).catch(errorCb)
  },
  phoneCodeForRegister (o, cb, errorCb) {
    fetch('cgbregister/phoneCode', {certNo: o.certNo, phoneNo: o.phoneNo, cardNo: o.cardNo}).then(cb).catch(errorCb)
  },
  openAccount (o, cb, errorCb) {
    fetch('cgbregister/openAccount', {
      cusName: o.cusName,
      certNo: o.certNo,
      cardNo: o.cardNo,
      phoneNo: o.phoneNo,
      verifyCode: o.verifyCode,
      codeSeq: o.codeSeq,
      imageFront: o.imageFront,
      imageBack: o.imageBack,
      imagePath1: o.imagePath1,
      imagePath2: o.imagePath2
    }).then(cb).catch(errorCb)
  },
  phoneCodeForWithdraw (o, cb, errorCb) {
    fetch('cgbwithdraw/phoneCode', {phoneNo: o.phoneNo}).then(cb).catch(errorCb)
  },
  withdrawSubmit (o, cb, errorCb) {
    fetch('cgbwithdraw/submit', {payAmount: o.payAmount, recAccount: o.recAccount, verifyCode: o.verifyCode, codeSeq: o.codeSeq}).then(cb).catch(errorCb)
  },
  phoneCodeForPayment (o, cb, errorCb) {
    fetch('cgbinsurance/phoneCode', {phoneNo: o.phoneNo, prodName: o.prodName}).then(cb).catch(errorCb)
  },
  payConfirm (o, cb, errorCb) {
    fetch('cgbinsurance/payConfirm', {
      applNo: o.applNo,
      verifyCode: o.verifyCode,
      codeSeq: o.codeSeq
    }).then(cb).catch(errorCb)
  }
}
