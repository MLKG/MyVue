import Root from 'page/PuYiTou/index'
// 首页
import Home from 'page/PuYiTou/Home/index'
// 定活通 磐石列表
import ProductList from 'page/PuYiTou/ProductList/index'
// 转让列表
import ZhuanRangList from 'page/PuYiTou/ZhuanRangList/index'
// 定活通
import DhtDetail from 'page/PuYiTou/ProductDetail/DhtIndex'
// 磐石详情
import PsDetail from 'page/PuYiTou/ProductDetail/PsIndex'
// 转让详情
import ZhuanRangDetail from 'page/PuYiTou/ZhuanRangDetail/index'
// 定活通投资
import DhtPurchase from 'page/PuYiTou/ProductPurchase/DhtIndex'
// 磐石投资
import PsPurchase from 'page/PuYiTou/ProductPurchase/PsIndex'
// 转让投资
import ZhuanRangPurchase from 'page/PuYiTou/ZhuanRangPurchase/index'
// 选择优惠券
import SelectCoupon from 'page/PuYiTou/SelectCoupon/index'
// 投资成功
import PurchaseSuccess from 'page/PuYiTou/PurchaseResult/PurchaseSuccess'
// 投资失败
import PurchaseFail from 'page/PuYiTou/PurchaseResult/PurchaseFail'
// 投资记录
import InvestRecord from 'page/PuYiTou/InvestRecord/index'
// 我的普益投
import MyPYT from 'page/PuYiTou/MyPYT/index'
// 我的投资
import MyInvest from 'page/PuYiTou/MyInvest/index'
// 我的优惠券
import MyCoupon from 'page/PuYiTou/MyCoupon/index'
// 分享卡券第一步
import ShareCouponStep1 from 'page/PuYiTou/MyCoupon/ShareCouponStep1'
// 分享卡券第二步
import ShareCouponStep2 from 'page/PuYiTou/MyCoupon/ShareCouponStep2'
// 我的投资详情
import MyInvestDetail from 'page/PuYiTou/MyInvestDetail/index'
// 收益概况
import MyAssetsIncome from 'page/PuYiTou/MyAssetsIncome/index'
// 资金明细
import MyFortuneDetail from 'page/PuYiTou/MyFortuneDetail/index'
// 发起转让
import MyTransferProduct from 'page/PuYiTou/MyTransferProduct/index'
// 设置交易密码
import SetTradingPwd from 'page/PuYiTou/Password/SetTradingPwd'
// 修改登陆密码
import ModifyLoginPwd from 'page/PuYiTou/ModifyPassword/ModifyLoginPwd'
// 修改交易密码
import ModifyTradePwdStep1 from 'page/PuYiTou/ModifyPassword/ModifyTradePwdStep1'
import ModifyTradePwdStep2 from 'page/PuYiTou/ModifyPassword/ModifyTradePwdStep2'
// 找回交易密码
import FindTradepwd from 'page/PuYiTou/ModifyPassword/FindTradepwd'
// 登陆
import Login from 'page/PuYiTou/Login/index'
// 注册
import Register from 'page/PuYiTou/Register/index'
// 找回登陆密码
import FindPwd from 'page/PuYiTou/FindPwd/index'
// 通过手机修改手机号
import ModifyPhoneByPhoneNo from 'page/PuYiTou/ModifyPhone/phone'
// 通过身份证修改手机号
import ModifyPhoneByIdCard from 'page/PuYiTou/ModifyPhone/idcard'
// 充值成功
import TopupSuccess from 'page/PuYiTou/Topup/topupSuccess'
// 充值失败
import TopupFail from 'page/PuYiTou/Topup/topupFail'
// 首次充值
import TopupFirst from 'page/PuYiTou/Topup/topupFirst'
// 充值
import Topup from 'page/PuYiTou/Topup/index'
// 提现
import Withdraw from 'page/PuYiTou/Withdraw/index'
// 高级设置
import Settings from 'page/PuYiTou/Settings/index'
// 风险测评
import RiskTest from 'page/PuYiTou/RiskTest/index'
// 重新测评
import ReTest from 'page/PuYiTou/RiskTest/reTest'
// 测评结果
import TestResult from 'page/PuYiTou/RiskTest/result'
// 自动投资
import AutoInvestRoot from 'page/PuYiTou/AutoInvest/index'
import AutoInvestSet from 'page/PuYiTou/AutoInvest/set'
// 自动投资选择产品
import AutoInvestProducts from 'page/PuYiTou/AutoInvest/products'
// 自动投资金额
import AutoInvestAmount from 'page/PuYiTou/AutoInvest/amount'
// 投资区间选择定活通
import AutoInvestSelectDht from 'page/PuYiTou/AutoInvest/selectDht'
// 投资区间选择磐石
import AutoInvestSelectPs from 'page/PuYiTou/AutoInvest/selectPs'
// 投资记录
import AutoInvestRecord from 'page/PuYiTou/AutoInvest/record'

export default {
  router: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Home',
      component: Home,
      meta: {
        title: '我要投资'
      }
    },
    {
      path: '/productlist',
      name: 'ProductList',
      component: ProductList,
      meta: {
        title: '产品列表'
      }
    },
    {
      path: '/zhuanranglist',
      name: 'ZhuanRangList',
      component: ZhuanRangList,
      meta: {
        title: '转让列表'
      }
    },
    {
      path: '/dhtdetail',
      name: 'DhtDetail',
      component: DhtDetail,
      meta: {
        requiresAuth: true,
        title: '产品详情'
      }
    },
    {
      path: '/psdetail',
      name: 'PsDetail',
      component: PsDetail,
      meta: {
        requiresAuth: true,
        title: '产品详情'
      }
    },
    {
      path: '/zhuanrangdetail',
      name: 'ZhuanRangDetail',
      component: ZhuanRangDetail,
      meta: {
        requiresAuth: true,
        title: '产品详情'
      }
    },
    {
      path: '/dhtpurchase',
      name: 'DhtPurchase',
      component: DhtPurchase,
      meta: {
        requiresAuth: true,
        title: '购买产品'
      }
    },
    {
      path: '/pspurchase',
      name: 'PsPurchase',
      component: PsPurchase,
      meta: {
        requiresAuth: true,
        title: '购买产品'
      }
    },
    {
      path: '/zhuanrangpurchase',
      name: 'ZhuanRangPurchase',
      component: ZhuanRangPurchase,
      meta: {
        requiresAuth: true,
        title: '购买产品'
      }
    },
    {
      path: '/selectcoupon',
      name: 'SelectCoupon',
      component: SelectCoupon,
      meta: {
        requiresAuth: true,
        title: '选择优惠券'
      }
    },
    {
      path: '/purchasesuccess',
      name: 'PurchaseSuccess',
      component: PurchaseSuccess,
      meta: {
        requiresAuth: true,
        title: '投资成功'
      }
    },
    {
      path: '/purchasefail',
      name: 'PurchaseFail',
      component: PurchaseFail,
      meta: {
        requiresAuth: true,
        title: '投资失败'
      }
    },
    {
      path: '/investrecord',
      name: 'InvestRecord',
      component: InvestRecord,
      meta: {
        requiresAuth: true,
        title: '投资记录'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/findpwd',
      name: 'FindPwd',
      component: FindPwd,
      meta: {
        requiresAuth: true,
        title: '找回登陆密码'
      }
    },
    {
      path: '/modifyphonebyphoneno',
      name: 'ModifyPhoneByPhoneNo',
      component: ModifyPhoneByPhoneNo,
      meta: {
        requiresAuth: true,
        title: '修改绑定手机'
      }
    },
    {
      path: '/modifyphonebyidcard',
      name: 'ModifyPhoneByIdCard',
      component: ModifyPhoneByIdCard,
      meta: {
        requiresAuth: true,
        title: '修改绑定手机'
      }
    },
    {
      path: '/topupsuccess',
      name: 'TopupSuccess',
      component: TopupSuccess,
      meta: {
        requiresAuth: true,
        title: '充值成功'
      }
    },
    {
      path: '/topupfail',
      name: 'TopupFail',
      component: TopupFail,
      meta: {
        requiresAuth: true,
        title: '充值失败'
      }
    },
    {
      path: '/topupfirst',
      name: 'TopupFirst',
      component: TopupFirst,
      meta: {
        requiresAuth: true,
        title: '首次充值'
      }
    },
    {
      path: '/topup',
      name: 'Topup',
      component: Topup,
      meta: {
        requiresAuth: true,
        title: '充值'
      }
    },
    {
      path: '/withdraw',
      name: 'Withdraw',
      component: Withdraw,
      meta: {
        requiresAuth: true,
        title: '提现'
      }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      meta: {
        requiresAuth: true,
        title: '高级设置'
      }
    },
    {
      path: '/risktest',
      name: 'RiskTest',
      component: RiskTest,
      meta: {
        requiresAuth: true,
        title: '风险测评'
      }
    },
    {
      path: '/retest',
      name: 'ReTest',
      component: ReTest,
      meta: {
        requiresAuth: true,
        title: '重新测评'
      }
    },
    {
      path: '/testresult',
      name: 'TestResult',
      component: TestResult,
      meta: {
        requiresAuth: true,
        title: '测评结果'
      }
    },
    {
      path: '/autoinvest',
      name: 'AutoInvestRoot',
      component: AutoInvestRoot,
      meta: {
        requiresAuth: true,
        title: '自动投资'
      },
      children: [
        {
          path: '/',
          name: 'AutoInvestSet',
          component: AutoInvestSet,
          meta: {
            title: '自动投资'
          }
        },
        {
          path: 'products',
          name: 'AutoInvestProducts',
          component: AutoInvestProducts,
          meta: {
            title: '产品选择'
          }
        },
        {
          path: 'amount',
          name: 'AutoInvestAmount',
          component: AutoInvestAmount,
          meta: {
            title: '投资金额'
          }
        },
        {
          path: 'selectDht',
          name: 'AutoInvestSelectDht',
          component: AutoInvestSelectDht,
          meta: {
            title: '区间选择'
          }
        },
        {
          path: 'selectPs',
          name: 'AutoInvestSelectPs',
          component: AutoInvestSelectPs,
          meta: {
            title: '区间选择'
          }
        },
        {
          path: 'record',
          name: 'AutoInvestRecord',
          component: AutoInvestRecord,
          meta: {
            title: '投资记录'
          }
        }
      ]
    },
    {
      path: '/mypyt',
      name: 'Root',
      component: Root,
      meta: {
        requiresAuth: true,
        title: '我的普益投'
      },
      children: [
        {
          path: '/',
          name: 'MyPYT',
          component: MyPYT,
          meta: {
            title: '我的普益投'
          }
        },
        {
          path: 'myinvest',
          name: 'MyInvest',
          component: MyInvest,
          meta: {
            title: '我的投资'
          }
        },
        {
          path: 'myinvestdetail',
          name: 'MyInvestDetail',
          component: MyInvestDetail,
          meta: {
            title: '投资详情'
          }
        },
        {
          path: 'mycoupon',
          name: 'MyCoupon',
          component: MyCoupon,
          meta: {
            title: '我的卡包'
          }
        },
        {
          path: 'sharecouponstep1',
          name: 'ShareCouponStep1',
          component: ShareCouponStep1,
          meta: {
            title: '分享'
          }
        },
        {
          path: 'sharecouponstep2',
          name: 'ShareCouponStep2',
          component: ShareCouponStep2,
          meta: {
            title: '分享'
          }
        },
        {
          path: 'myassetsincome',
          name: 'MyAssetsIncome',
          component: MyAssetsIncome,
          meta: {
            title: '收益概况'
          }
        },
        {
          path: 'myfortunedetail',
          name: 'MyFortuneDetail',
          component: MyFortuneDetail,
          meta: {
            title: '资金明细'
          }
        },
        {
          path: 'mytransferproduct/:accountId',
          name: 'MyTransferProduct',
          component: MyTransferProduct,
          meta: {
            title: '转让'
          }
        },
        {
          path: 'modifyloginpwd',
          name: 'ModifyLoginPwd',
          component: ModifyLoginPwd,
          meta: {
            title: '密码修改'
          }
        },
        {
          path: 'modifytradepwdstep1',
          name: 'ModifyTradePwdStep1',
          component: ModifyTradePwdStep1,
          meta: {
            title: '密码修改'
          }
        },
        {
          path: 'modifytradepwdstep2',
          name: 'ModifyTradePwdStep2',
          component: ModifyTradePwdStep2,
          meta: {
            title: '修改交易密码'
          }
        },
        {
          path: 'findtradepwd',
          name: 'FindTradepwd',
          component: FindTradepwd,
          meta: {
            title: '找回交易密码'
          }
        }
      ]
    },
    {
      path: '/settradingpwd',
      name: 'SetTradingPwd',
      component: SetTradingPwd,
      meta: {
        title: '设置交易密码'
      }
    }
  ]
}
