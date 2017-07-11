import shopApi from '../../../api/shop'
import * as commontypes from '../../mutation-types/common'
import * as shoptypes from '../../mutation-types/shop'

const PERPAGE_ROWS = 10
const SUGGEST_COUNT = 5

const state = {
  customerList: [],
  page: 1,
  noMoreFlag: false,
  total: -1,
  lastPageEmpty: false,
  isMore: false,
  suggestUsers: [],
  showModal: false
}

const getters = {
  customerList: state => state.customerList,
  total: state => state.total,
  lastPageEmpty: state => state.lastPageEmpty,
  isMore: state => state.isMore,
  noMoreFlag: state => state.noMoreFlag,
  suggestUsers: state => state.suggestUsers,
  showModal: state => state.showModal
}

const actions = {
  searchCustomer ({ commit }, params) {
    shopApi.searchCustomer(
      {condition: params.keyword, page: state.page, rows: PERPAGE_ROWS},
      res => commit(shoptypes.RECEIVE_SEARCHRESULT, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  },
  searchSuggest ({ commit }, params) {
    shopApi.searchCustomer(
      {condition: params.keyword, page: 1, rows: SUGGEST_COUNT},
      res => commit(shoptypes.RECEIVE_SEARCHRSUGGEST, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true}),
      false
    )
  }
}

const mutations = {
  [shoptypes.RECEIVE_SEARCHRESULT] (state, payload) {
    let list = payload.data.customerList
    let rows = list.rows
    let total = list.total

    state.total = total
    state.isMore = rows.length >= 10
    state.lastPageEmpty = state.page > 1 && rows.length < 10

    if (rows.length) {
      state.page++
      for (let one of rows) {
        let item = {
          userLink: 'cusmangent/' + one.userId,
          userName: one.userName || '- -',
          phoneNum: one.phoneNum,
          investAmount: one.sumInvest,
          idleAmount: one.usableAmount,
          investDht: one.zxSumAmount,
          investPs: one.psSumAmount
        }
        item.isPay = item.investAmount || item.idleAmount || item.investDht || item.investPs
        state.customerList.push(item)
      }
    }

    if (rows.length < PERPAGE_ROWS) {
      state.noMoreFlag = true
    }
  },
  [shoptypes.RECEIVE_SEARCHRSUGGEST] (state, payload) {
    let rows = payload.data.customerList.rows
    let list = []

    if (rows.length) {
      for (let one of rows) {
        let item = {
          userId: one.userId,
          name: one.userName || '- -',
          phone: one.phoneNum
        }
        list.push(item)
        state.suggestUsers = list
      }
    }

    if (state.suggestUsers.length && state.customerList.length) {
      state.showModal = true
    }
  },
  [shoptypes.REST_CUSTOMERSEARCH_STORE] (state) {
    state.customerList = []
    state.page = 1
    state.noMoreFlag = false
    state.total = -1
    state.lastPageEmpty = false
    state.isMore = false
    state.suggestUsers = []
  },
  [shoptypes.REST_SEARCHRSUGGEST_STORE] (state) {
    state.suggestUsers = []
  },
  [shoptypes.SET_SEARCHRSUGGEST_MODAL] (state, payload) {
    state.showModal = payload.showModal
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
