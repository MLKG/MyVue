import Vue from 'vue'
let vuePrototype = Vue.prototype

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
  },
  isPassword (value) {
    return true
  }
}
