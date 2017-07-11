import productList from './product-list'
import productDetail from './product-detail'
import productPurchase from './product-purchase'
import myInsurance from './my-insurance'
import loan from './loan'
import cancelInsurance from './cancel-insurance'

export default {
  namespaced: true,
  modules: {
    productList,  // 天天利产品列表
    productDetail,  // 天天利产品列表
    productPurchase,  // 投保核保页面
    myInsurance,   // 我的保险理财账户
    loan,         // 质押取现
    cancelInsurance  // 退保
  }
}
