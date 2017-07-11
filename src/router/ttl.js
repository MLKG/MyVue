import Root from 'page/Ttl/index'
import productList from 'page/Ttl/ProductList/index'
import ProductDetail from 'page/Ttl/ProductDetail/index'
import ProductPurchase from 'page/Ttl/ProductPurchase/index'
// import PurchaseStatus from 'page/Ttl/PurchaseStatus/index'
import PurchaseResult from 'page/Ttl/PurchaseResult/index'
import TuibaoStatus from 'page/Ttl/TuibaoStatus/index'
import DrawingStatus from 'page/Ttl/DrawingStatus/index'
import BaodanDetail from 'page/Ttl/BaodanDetail/index'
import MyInsurance from 'page/Ttl/MyInsurance/index'
import CancelInsurance from 'page/Ttl/CancelInsurance/index'
import LoanWithdraw from 'page/Ttl/LoanWithdraw/index'
import HistoryDetail from 'page/Ttl/HistoryDetail/index'
import LoanDetail from 'page/Ttl/LoanDetail/index'
import Transfer from 'page/Ttl/Transfer/index'

export default {
  router: [
    {
      path: '/ttl',
      name: '天天利',
      component: Root,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: 'transfer',
          name: '广发天天利',
          component: Transfer
        },
        {
          path: 'productList',
          name: '产品列表',
          component: productList
        },
        {
          path: 'productdetail',
          name: '产品详情',
          component: ProductDetail
        },
        {
          path: 'productpurchase',
          name: '信息录入',
          component: ProductPurchase
        },
        // {
        //   path: '/ttl/purchasestatus',
        //   name: '核保结果',
        //   component: PurchaseStatus
        // },
        {
          path: 'purchaseresult',
          name: '投保结果',
          component: PurchaseResult
        },
        {
          path: 'myinsurance',
          name: '我的保险理财',
          component: MyInsurance
        },
        {
          path: 'baodandetail',
          name: '保单详情',
          component: BaodanDetail
        },
        {
          path: 'historydetail',
          name: '保单详情',
          component: HistoryDetail
        },
        {
          path: 'loandetail',
          name: '明细详情',
          component: LoanDetail
        },
        {
          path: 'cancelinsurance',
          name: '退保申请',
          component: CancelInsurance
        },
        {
          path: 'tuibaostatus',
          name: '退保结果',
          component: TuibaoStatus
        },
        {
          path: 'loanwithdraw',
          name: '质押提款申请',
          component: LoanWithdraw
        },
        {
          path: 'drawingstatus',
          name: '提款结果',
          component: DrawingStatus
        }
      ]
    }
  ]
}
