import Vue from 'vue'
let vuePrototype = Vue.prototype

vuePrototype._scrollToBottom = function () {
  if (document.body.offsetHeight < window.screen.height) {
    return false
  } else {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight
  }
}

// 相当于angular的$filter
vuePrototype.filterObj = function (obj, key, value) {
  return obj.filter((item) => { return item[key] === value })
}

// 压缩图片
vuePrototype._compressImage = function (imgData, cb) {
  var canvas = document.createElement('canvas')
  var img = new Image()
  img.src = imgData
  img.onload = function () {
    var ctx = canvas.getContext('2d')
    var width = img.width
    var height = img.height
    var MAX_WIDTH = 800
    var MAX_HEIGHT = 600
    if (width > height) {
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width
        width = MAX_WIDTH
      }
    } else {
      if (height > MAX_HEIGHT) {
        width *= MAX_HEIGHT / height
        height = MAX_HEIGHT
      }
    }
    canvas.width = width
    canvas.height = height
    ctx.drawImage(img, 0, 0, width, height)
    var data = canvas.toDataURL('image/jpeg', 0.5)
    cb(data)
  }
}

// 表单校验
vuePrototype._validation = {
  // 手机号码
  isPhone (value) {
    return /^1[3-9][0-9]\d{8}$/.test(value)
  },
  // 正整数
  isNumber (value) {
    return /^[1-9]\d*$/.test(value)
  },
  // 邮箱
  isEmail (value) {
    return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
  },
  // 邮编
  isZipCode (value) {
    return /^[1-9][0-9]{5}$/.test(value)
  },
  // 年收入
  isInteger (value) {
    return /^(([1-9]{1}\d*)|([0]{1}))(\.(\d){1,2})?$/.test(value)
  }
}

vuePrototype._encrypt = {
  phoneNo (value) {
    return value.substr(0, 3) + '****' + value.substr(-4, 4)
  },
  certNo (value) {
    return value.substr(0, 4) + '**********' + value.substr(-4, 4)
  },
  cardNo (value) {
    return value.substr(0, 4) + '********' + value.substr(-4, 4)
  }
}

vuePrototype._inputPhoneNo = function (val) {
  var s1, s2, s3
  var phoneNoView, phoneNo
  val = val.trim().replace(/[^0-9]+/g, '')
  if (val.length <= 3) {
    phoneNoView = val
  } else if (val.length > 3 && val.length <= 7) {
    s1 = val.slice(0, 3)
    s2 = val.slice(3, val.length + 1)
    phoneNoView = s1 + ' ' + s2
  } else if (val.length > 7) {
    val = val.length >= 11 ? val.substr(0, 11) : val
    s1 = val.slice(0, 3)
    s2 = val.slice(3, 7)
    s3 = val.slice(7, val.length)
    phoneNoView = s1 + ' ' + s2 + ' ' + s3
  }
  phoneNo = val
  return {phoneNoView, phoneNo}
}
