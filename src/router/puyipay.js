import Root from 'page/PuyiPay/index'
import Home from 'page/PuyiPay/Home/index'
import BankModify from 'page/PuyiPay/BankModify/index'
import PhoneModify from 'page/PuyiPay/PhoneModify/index'
import Withdraw from 'page/PuyiPay/Withdraw/index'
import Payment from 'page/PuyiPay/Payment/index'
import OpenAccountInfo from 'page/PuyiPay/OpenAccountInfo/index'
import OpenAccountUpload from 'page/PuyiPay/OpenAccountUpload/index'
import OpenAccountVerify from 'page/PuyiPay/OpenAccountVerify/index'

export default {
  router: [
    {
      path: '/puyipay',
      name: '广发电子账户',
      component: Root,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '/',
          name: '广发电子账户',
          component: Home
        },
        {
          path: 'bankmodify',
          name: '更换银行卡',
          component: BankModify
        },
        {
          path: 'phonemodify',
          name: '修改银行预留手机',
          component: PhoneModify
        },
        {
          path: 'withdraw',
          name: '广发电子账户提现',
          component: Withdraw
        },
        {
          path: 'payment',
          name: '保单支付',
          component: Payment
        },
        {
          path: 'openaccount/info',
          name: '广发电子账户开户',
          component: OpenAccountInfo
        },
        {
          path: 'openaccount/upload',
          name: '广发电子账户开户',
          component: OpenAccountUpload
        },
        {
          path: 'openaccount/verify',
          name: '广发电子账户开户',
          component: OpenAccountVerify
        }
      ]
    }
  ]
}
