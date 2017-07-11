import Vue from 'vue'
import router from '../router'
let vuePrototype = Vue.prototype

document.addEventListener('DOMContentLoaded', function () {
  let width = document.documentElement.clientWidth
  document.documentElement.style.fontSize = width < 1080 ? width / 7.5 + 'px' : '144px'
  document.documentElement.setAttribute('data-dpr', window.devicePixelRatio)
})

window.addEventListener('resize', function () {
  let width = document.documentElement.clientWidth
  document.documentElement.style.fontSize = width < 1080 ? width / 7.5 + 'px' : '144px'
})

router.afterEach(function (transition) {
  if (transition.meta.title) {
    document.title = transition.meta.title
  } else {
    document.title = 'Dalin'
  }
})

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

