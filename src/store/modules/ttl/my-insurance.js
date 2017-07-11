import ttlApi from '../../../api/ttl'
import * as commontypes from '../../mutation-types/common'
import * as ttltypes from '../../mutation-types/ttl'

const PERPAGE_ROWS = 10

const state = {
  holdPage: 0,
  historyPage: 0,
  loanPage: 0,
  selectedNav: 'product',
  holdList: [],
  historyList: [],
  loanList: [],
  holdListTotal: 0,
  historyListTotal: 0,
  loanListTotal: 0,
  noMoreHoldList: false,
  noMoreFlag: false,
  noMoreFlagLoan: false,
  isOpenAccount: false,
  errorStatus: ''
}

const getters = {
  selectedNav: state => state.selectedNav,
  holdList: state => state.holdList,
  historyList: state => state.historyList,
  loanList: state => state.loanList,
  holdListTotal: state => state.holdListTotal,
  historyListTotal: state => state.historyListTotal,
  loanListTotal: state => state.loanListTotal,
  isOpenAccount: state => state.isOpenAccount,
  errorStatus: state => state.errorStatus,
  noMoreFlag: state => state.noMoreFlag,
  noMoreFlagLoan: state => state.noMoreFlagLoan,
  noMoreHoldList: state => state.noMoreHoldList
}

const actions = {
  getMyInsuranceBalance ({commit}) {
    return new Promise((resolve) => {
      ttlApi.myInsuranceBalance(
        res => resolve(res),
        err => commit(ttltypes.HAVE_NOACCOUNT, err)
      )
    })
  },
  getHoldList ({commit, state}) {
    ttlApi.holdList(
      {page: state.holdPage, rows: PERPAGE_ROWS},
      res => commit(ttltypes.HOLD_LIST, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  },
  getHistoryList ({commit, state}) {
    ttlApi.historyList(
      {page: state.historyPage, rows: PERPAGE_ROWS},
      res => commit(ttltypes.HISTORY_LIST, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  },
  getLoanList ({commit, state}) {
    ttlApi.loanList(
      {page: state.loanPage, rows: PERPAGE_ROWS},
      res => commit(ttltypes.LOAN_LIST, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  }
}

const mutations = {
  [ttltypes.MY_INSURANCE_NAV] (state, payload) {
    state.selectedNav = payload.type
  },
  [ttltypes.RESET_LIST] (state) {
    state.holdPage = 0
    state.historyPage = 0
    state.loanPage = 0
    state.holdList = []
    state.historyList = []
    state.loanList = []
    state.noMoreFlag = false
    state.noMoreHoldList = false
    state.noMoreFlagLoan = false
    state.errorStatus = ''
  },
  [ttltypes.REST_LIST_TOTAL] (state) {
    state.holdListTotal = 0
    state.historyListTotal = 0
    state.loanListTotal = 0
  },
  [ttltypes.HAVE_NOACCOUNT] (state, payload) {
    state.errorStatus = payload.status
    state.selectedNav = ''
  },
  [ttltypes.HOLD_LIST] (state, payload) {
    let list = payload.data.holdList
    let rows = list.rows
    let total = list.total
    // state.holdList = rows
    state.holdListTotal = total

    if (rows.length) {
      state.holdPage++
      state.holdList = state.holdList.concat(rows)
    }

    if (rows.length < PERPAGE_ROWS) {
      state.noMoreHoldList = true
    }
  },

  [ttltypes.HISTORY_LIST] (state, payload) {
    let list = payload.data.historyList
    let rows = list.rows
    let total = list.total
    // state.historyList = rows
    state.historyListTotal = total

    if (rows.length) {
      state.historyPage++
      state.historyList = state.historyList.concat(rows)
    }

    if (rows.length < PERPAGE_ROWS) {
      state.noMoreFlag = true
    }
  },
  [ttltypes.LOAN_LIST] (state, payload) {
    let list = payload.data.loanList
    let rows = list.rows
    let total = list.total
    // state.loanList = rows
    state.loanListTotal = total

    if (rows.length) {
      state.loanPage++
      state.loanList = state.loanList.concat(rows)
    }

    if (rows.length < PERPAGE_ROWS) {
      state.noMoreFlagLoan = true
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

