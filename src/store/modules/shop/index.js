import home from './home'
import income from './income-manage'
import incomeDetail from './income-detail'
import customer from './customer'
import customerDetail from './customer-detail'
import zhanyeCenter from './zhanye-center'
import customerSearch from './customer-search'
import rank from './rank'
import myStar from './my-star'
import couponUsage from './coupon-usage'
import weekly from './weekly'
import starSystem from './star-system'
import achievements from './achievements'
import couponHome from './coupon-home'

export default {
  namespaced: true,
  modules: {
    home, // 网店首页
    income, // 收入管理列表页
    incomeDetail, // 收入管理详情页
    customer, // 客户管理列表页
    customerDetail, // 客户详情页
    zhanyeCenter, // 展业中心
    customerSearch, // 客户搜索页
    rank,  // 排行榜
    myStar, // 我的星级网店
    couponUsage, // 我的卡券使用情况
    starSystem, // 星级体系说明
    achievements, // 过往业绩
    weekly,  // 周报
    couponHome // 卡券使用详情首页
  }
}
