import starApi from '../../../api/starstore'
import * as commontypes from '../../mutation-types/common'
import * as startypes from '../../mutation-types/starstore'

const rows = 10

const state = {
  page: 1,
  currentNav: 'used',
  couponsUsed: [],
  couponsNotUsed: [],
  noMoreFlag: false,
  total: -1
}

const getters = {
  currentNav: state => state.currentNav,
  couponsUsed: state => state.couponsUsed,
  couponsNotUsed: state => state.couponsNotUsed,
  noMoreFlag: state => state.noMoreFlag,
  total: state => state.total
}

const actions = {
  getCouponsUsed ({ commit, state }, params) {
    starApi.couponsUsed(
      {date: params.date, page: state.page, rows: rows},
      res => commit(startypes.RECEIVE_COUPONSUSED, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  },
  getCouponsNotUsed ({ commit, state }, params) {
    starApi.couponsNotUsed(
      {date: params.date, page: state.page, rows: rows},
      res => commit(startypes.RECEIVE_COUPONSNOTUSED, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  }
}

const mutations = {
  [startypes.CHANGE_COUPONSNAV] (state, payload) {
    state.page = 1
    state.total = -1
    state.noMoreFlag = false
    state.currentNav = payload.type
  },
  [startypes.RECEIVE_COUPONSUSED] (state, payload) {
    let couponUsedList = payload.data.couponsUsed.rows
    state.total = payload.data.couponsUsed.total
    if (couponUsedList.length < rows) {
      state.noMoreFlag = true
    } else {
      state.page++
    }
    state.couponsUsed = couponUsedList
  },
  [startypes.RECEIVE_COUPONSNOTUSED] (state, payload) {
    let couponsNotUsedList = payload.data.couponsNotUsed.rows
    state.total = payload.data.couponsNotUsed.total
    if (couponsNotUsedList.length < rows) {
      state.noMoreFlag = true
    } else {
      state.page++
    }
    state.couponsNotUsed = couponsNotUsedList
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
