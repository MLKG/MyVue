import shopApi from '../../../api/shop'
import * as commontypes from '../../mutation-types/common'
import * as shoptypes from '../../mutation-types/shop'

const PERPAGE_ROWS = 10

const state = {
  customerInfo: {},
  productCount: 0,
  couponCount: 0,
  loginCount: 0,
  page: 1,
  noMoreFlag: false,
  customerProducts: [],
  customerCoupons: [],
  customerLoginInfos: [],
  currentType: 'product'
}

const getters = {
  customerInfo: state => state.customerInfo,
  productCount: state => state.productCount,
  couponCount: state => state.couponCount,
  loginCount: state => state.loginCount,
  customerProducts: state => state.customerProducts,
  customerCoupons: state => state.customerCoupons,
  customerLoginInfos: state => state.customerLoginInfos,
  currentType: state => state.currentType,
  noMoreFlag: state => state.noMoreFlag
}

const actions = {
  getCustomerInfo ({ commit }, params) {
    shopApi.customerInfo(
      {customerId: params.customerId},
      res => commit(shoptypes.RECEIVE_CUSTOMERINFO, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  },
  getCustomerProduct ({ commit, state }, params) {
    shopApi.customerProduct(
      {customerId: params.customerId, page: state.page, rows: PERPAGE_ROWS},
      res => commit(shoptypes.RECEIVE_CUSTOMERPRODUCT, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  },
  getCustomerCoupons ({ commit, state }, params) {
    shopApi.customerCoupons(
      {customerId: params.customerId},
      res => commit(shoptypes.RECEIVE_CUSTOMERCOUPONS, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  },
  getCustomerLoginInfo ({ commit, state }, params) {
    shopApi.customerLoginInfo(
      {customerId: params.customerId},
      res => commit(shoptypes.RECEIVE_CUSTOMERLOGINS, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  }
}

const mutations = {
  [shoptypes.RECEIVE_CUSTOMERINFO] (state, payload) {
    state.customerInfo = payload.data.customerInfo
  },
  [shoptypes.REST_CUSTOMERINFO] (state) {
    state.customerInfo = {}
    state.productCount = 0
    state.couponCount = 0
    state.loginCount = 0
    state.page = 1
    state.noMoreFlag = false
    state.customerProducts = []
    state.customerCoupons = []
    state.customerLoginInfos = []
    state.currentType = 'product'
  },
  [shoptypes.RECEIVE_CUSTOMERPRODUCT] (state, payload) {
    let list = payload.data.customerProduct
    let rows = list.rows
    let total = list.total

    state.productCount = total

    if (rows.length) {
      state.page++
      for (let one of rows) {
        let item = {
          productName: one.productName,
          investAmount: one.investAmount,
          productDate: one.paybackDate,
          cardType: one.cardType,
          cardName: one.cardName,
          cardAmount: one.cardAmount,
          cardInterestRate: one.riseInterestRate
        }
        state.customerProducts.push(item)
      }
    }

    if (rows.length < PERPAGE_ROWS) {
      state.noMoreFlag = true
    }
  },
  [shoptypes.RECEIVE_CUSTOMERCOUPONS] (state, payload) {
    let list = payload.data.customerCoupons
    let rows = list.rows
    let total = list.total

    state.couponCount = total

    if (rows.length) {
      for (let one of rows) {
        let item = {
          couponName: one.cardName,
          couponDate: one.invalidDateEnd,
          cardType: one.cardType,
          couponCount: one.cardNum,
          couponAmount: one.amountRate,
          couponRiseRate: one.riseInterestRate * 100
        }
        state.customerCoupons.push(item)
      }
    }
  },
  [shoptypes.RECEIVE_CUSTOMERLOGINS] (state, payload) {
    let list = payload.data.customerLoginInfo
    let rows = list.rows

    state.loginCount = rows.length

    if (rows.length) {
      for (let one of rows) {
        let item = {
          loginFrom: one.loginFrom,
          loginTime: one.loginTime.slice(11, 16),
          loginDate: one.loginTime.slice(0, 10)
        }
        state.customerLoginInfos.push(item)
      }
    }
  },
  [shoptypes.CHANGE_CURRENTTYPE] (state, payload) {
    state.currentType = payload.type
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
