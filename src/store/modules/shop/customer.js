import shopApi from '../../../api/shop'
import * as commontypes from '../../mutation-types/common'
import * as shoptypes from '../../mutation-types/shop'

const PERPAGE_ROWS = 10

const state = {
  page: 1,
  total: 0,
  amount: {},
  users: [],
  noMoreFlag: false,
  itemType: 0,
  lastPageEmpty: false,
  isMore: false
}

const getters = {
  amount: state => state.amount,
  users: state => state.users,
  total: state => state.total,
  noMoreFlag: state => state.noMoreFlag,
  itemType: state => state.itemType,
  lastPageEmpty: state => state.lastPageEmpty,
  isMore: state => state.isMore
}

const actions = {
  getCustomerList ({ commit, state }, params) {
    commit(shoptypes.SET_CUSTOMERLIST_TYPE, {type: params.type})
    shopApi.customerList(
      {type: params.type, page: state.page, rows: PERPAGE_ROWS},
      res => commit(shoptypes.RECEIVE_CUSTOMERLIST, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  }
}

const mutations = {
  [shoptypes.RECEIVE_CUSTOMERLIST] (state, payload) {
    let list = payload.data.customerList
    let rows = list.rows

    state.total = rows.length

    state.amount = {
      invest: list.addInvestCustomerCount,
      regist: list.addRegisterCustomer,
      future: list.futureCount,
      past: list.pastCount
    }

    state.isMore = rows.length >= 10
    state.lastPageEmpty = state.page > 1 && rows.length < 10

    if (rows.length) {
      state.page++
      for (let one of rows) {
        let item = {
          userLink: 'cusmangent/' + one.userId,
          userName: one.realName || '- -',
          phoneNum: one.phoneNum,
          investAmount: one.sumInvest,
          idleAmount: one.usableAmount,
          investDht: one.zxSumAmount,
          investPs: one.psSumAmount,
          exchangeAmount: one.exchangeAmount,
          expireAmount: one.expireAmount
        }
        item.isPay = item.investAmount || item.idleAmount || item.investDht || item.investPs
        state.users.push(item)
      }
    }

    if (rows.length < PERPAGE_ROWS) {
      state.noMoreFlag = true
    }
  },
  [shoptypes.SET_CUSTOMERLIST_TYPE] (state, payload) {
    state.itemType = payload.type
  },
  [shoptypes.REST_CUSTOMERLIST_STORE] (state) {
    state.users = []
    state.page = 1
    state.noMoreFlag = false
    state.total = 0
    state.itemType = 0
    state.lastPageEmpty = false
    state.isMore = false
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
