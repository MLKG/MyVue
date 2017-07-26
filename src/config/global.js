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
vuePrototype._filterObj = function (obj, key, value) {
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
