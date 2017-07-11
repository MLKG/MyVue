const phoneCode = {
  status: 'error',
  data: {
    codeSeq: '777777'
  },
  message: 'some err'
}

const uploadImages = {
  status: 'success',
  data: {
    imageDate: '2017-05-11',
    imageFront: 'image front name',
    imageBack: 'image back name'
  }
}

const openAccount = {
  status: 'success',
  message: '开户成功'
}

export default {
  uploadImages,
  phoneCode,
  openAccount
}
