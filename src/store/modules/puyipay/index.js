import home from './home'
import phoneModify from './phone-modify'
import bankModify from './bank-modify'
import payment from './payment'
import register from './register'
import withdraw from './withdraw'

export default {
  namespaced: true,
  modules: {
    home, // 广发电子账户首页
    phoneModify, // 修改银行预留手机号
    bankModify, // 更换银行卡
    payment, // 广发电子账户支付
    withdraw, // 广发电子账户提现
    register // 广发电子账户开户
  }
}
