import Root from 'page/Shop/index'
import Home from 'page/Shop/Home/index'
import Customer from 'page/Shop/Customer/index'
import UserSearch from 'page/Shop/UserSearch/index'
import CusMangent from 'page/Shop/CusMangent/index'
import IncomeManage from 'page/Shop/IncomeManage/index'
import IncomeDetail from 'page/Shop/IncomeManage/IncomeDetail'
import Ranking from 'page/Shop/Ranking/index'
import ZhanyeCenter from 'page/Shop/ZhanyeCenter/index'
import CouponHome from 'page/Shop/CouponHome/index'
import CouponUsage from 'page/Shop/CouponUsage/index'
import Weekly from 'page/Shop/Weekly/index'
import WeeklyData from 'page/Shop/Weekly/WeeklyData'
import WeeklyNoInvest from 'page/Shop/Weekly/WeeklyNoInvest'
import Achievements from 'page/Shop/Achievements/index'
import MyStar from 'page/Shop/MyStar/index'
import Introduction from 'page/Shop/Introduction/index'

export default {
  router: [
    {
      path: '/starSystem',
      name: '体系说明',
      component: Introduction
    },
    {
      path: '/shop',
      name: '我的网店',
      component: Root,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '/',
          name: '我的网店',
          component: Home
        },
        {
          path: 'customer',
          name: '客户管理',
          component: Customer
        },
        {
          path: 'usersearch',
          name: '查找客户',
          component: UserSearch
        },
        {
          path: 'cusmangent/:userId',
          name: '客户详情',
          component: CusMangent
        },
        {
          path: 'incomemanage',
          name: '收入管理',
          component: IncomeManage
        },
        {
          path: 'incomedetail',
          name: '收入详情',
          component: IncomeDetail
        },
        {
          path: 'ranking',
          name: '排行榜',
          component: Ranking
        },
        {
          path: 'zhanyecenter/:from',
          name: '展业中心',
          component: ZhanyeCenter
        },
        {
          path: 'couponusage',
          name: '卡券使用情况',
          component: CouponUsage
        },
        {
          path: 'couponhome',
          name: '卡券使用情况',
          component: CouponHome
        },
        {
          path: 'weekly',
          name: '本周周报',
          component: Weekly
        },
        {
          path: 'weeklydata',
          name: '我的网店',
          component: WeeklyData
        },
        {
          path: 'weeklynoinvest',
          name: '未投资',
          component: WeeklyNoInvest
        },
        {
          path: 'achievements',
          name: '过往业绩',
          component: Achievements
        },
        {
          path: 'mystar',
          name: '星级网店',
          component: MyStar
        }
      ]
    }
  ]
}
