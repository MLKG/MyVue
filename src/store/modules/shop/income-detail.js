import shopApi from '../../../api/shop'
import * as commontypes from '../../mutation-types/common'
import * as shoptypes from '../../mutation-types/shop'

const PERPAGE_ROWS = 10

const state = {
  psInvestAmount: {},
  zxInvestAmount: {},
  page: 1,
  noMoreFlag: false,
  total: 0,
  zxInvestList: [],
  psInvestList: []
}

const getters = {
  psInvestAmount: state => state.psInvestAmount,
  zxInvestAmount: state => state.zxInvestAmount,
  zxInvestList: state => state.zxInvestList,
  psInvestList: state => state.psInvestList,
  noMoreFlag: state => state.noMoreFlag,
  total: state => state.total
}

const actions = {
  getIncomeDetail ({ commit }, params) {
    return new Promise((resolve, reject) => {
      shopApi.incomeDetail(
        {month: params.month},
        res => {
          commit(shoptypes.RECEIVE_INCOMEDETAIL, res)
          resolve(res.data)
        },
        err => commit(commontypes.AUTH_FAILURE, err, {root: true})
      )
    })
  },
  getZxInvestList ({ commit, state }, params) {
    shopApi.zxInvestList(
      {date: params.date, page: state.page, rows: PERPAGE_ROWS},
      res => commit(shoptypes.RECEIVE_ZXINVESTLIST, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  },
  getPsInvestList ({ commit, state }, params) {
    shopApi.psInvestList(
      {date: params.date, page: state.page, rows: PERPAGE_ROWS},
      res => commit(shoptypes.RECEIVE_PSINVESTLIST, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  }
}

const mutations = {
  [shoptypes.RECEIVE_INCOMEDETAIL] (state, payload) {
    state.zxInvestAmount = payload.data.zxInvestAmount
    state.psInvestAmount = payload.data.psInvestAmount
  },
  [shoptypes.RECEIVE_ZXINVESTLIST] (state, payload) {
    let list = payload.data.zxInvestList
    let rows = list.rows
    let total = list.total

    state.total = total

    if (rows.length) {
      state.page++
      for (let one of rows) {
        let item = {
          investTime: one.investTime,
          userName: one.userName,
          productName: one.productName,
          phone: one.phoneNum,
          endTime: one.endTime,
          unPay: one.unPaybackAmount
        }
        state.zxInvestList.push(item)
      }
    }

    if (rows.length < PERPAGE_ROWS) {
      state.noMoreFlag = true
    }
  },
  [shoptypes.RECEIVE_PSINVESTLIST] (state, payload) {
    let list = payload.data.psInvestList
    let rows = list.rows
    let total = list.total

    state.total = total

    if (rows.length) {
      state.page++
      for (let one of rows) {
        let item = {
          investTime: one.investTime,
          userName: one.userName,
          productName: one.productName,
          phone: one.phoneNum,
          endTime: one.endTime
        }
        state.psInvestList.push(item)
      }
    }

    if (rows.length < PERPAGE_ROWS) {
      state.noMoreFlag = true
    }
  },
  [shoptypes.REST_INCOMEDETAIL_STORE] (state) {
    state.zxInvestList = []
    state.psInvestList = []
    state.page = 1
    state.noMoreFlag = false
    state.total = 0
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
