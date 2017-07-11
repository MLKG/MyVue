import shopApi from '../../../api/shop'
import * as commontypes from '../../mutation-types/common'
import * as shoptypes from '../../mutation-types/shop'

const PERPAGE_ROWS = 10

const state = {
  page: 1,
  total: null,
  noMoreFlag: false,
  incomeList: []
}

const getters = {
  total: state => state.total,
  noMoreFlag: state => state.noMoreFlag,
  incomeList: state => state.incomeList
}

const actions = {
  getIncomeList ({ commit, state }) {
    shopApi.incomeList(
      {page: state.page, rows: PERPAGE_ROWS},
      res => commit(shoptypes.RECEIVE_INCOMELIST, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  }
}

const mutations = {
  [shoptypes.RECEIVE_INCOMELIST] (state, payload) {
    let list = payload.data.incomeList
    let rows = list.rows
    let total = list.total

    state.total = total

    if (rows.length) {
      state.page++
      for (let one of rows) {
        let item = {
          year: one.year,
          month: one.month,
          commision: one.commissionMonth,
          investAmount: one.investMonth,
          dhtBalance: one.stockMonthBalance,
          psBalance: one.psInvest,
          timeStr: one.time
        }
        state.incomeList.push(item)
      }
    }

    if (rows.length < PERPAGE_ROWS) {
      state.noMoreFlag = true
    }
  },
  [shoptypes.REST_INCOMELIST] (state) {
    state.page = 1
    state.total = null
    state.noMoreFlag = false
    state.incomeList = []
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
