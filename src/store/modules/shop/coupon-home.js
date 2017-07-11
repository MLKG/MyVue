import starApi from '../../../api/starstore'
import * as commontypes from '../../mutation-types/common'
import * as startypes from '../../mutation-types/starstore'

const PERPAGE_ROWS = 10

const state = {
  page: 1,
  total: null,
  noMoreFlag: false,
  couponList: [],
  couponGeneral: {}
}

const getters = {
  total: state => state.total,
  noMoreFlag: state => state.noMoreFlag,
  couponList: state => state.couponList,
  couponGeneral: state => state.couponGeneral
}

const actions = {
  couponsUsedDetail ({ commit }) {
    starApi.couponsUsedDetail(
      {page: state.page, rows: PERPAGE_ROWS},
      res => commit(startypes.RECEIVE_COUPONSUSED_DETAIL, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  },
  couponUsedGeneral ({ commit }) {
    starApi.couponUsedGeneral(
      res => commit(startypes.RECEIVE_COUPONSUSED_GENERAL, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  }
}

const mutations = {
  [startypes.RECEIVE_COUPONSUSED_DETAIL] (state, payload) {
    let list = payload.data.couponsUsedDetail
    let rows = list.rows
    let total = list.total

    state.total = total

    if (rows.length) {
      state.page++
      for (let one of rows) {
        let item = {
          year: Number(one.year),
          month: Number(one.month),
          url: '/shop/couponusage?date=' + one.year + '-' + one.month,
          ownCard: one.cardCount,
          shareCard: one.cardShared,
          cardUsed: one.cardUsed,
          investAmount: one.investAmount
        }
        state.couponList.push(item)
      }
    }

    if (rows.length < PERPAGE_ROWS) {
      state.noMoreFlag = true
    }
  },
  [startypes.REST_COUPONSUSEDLIST] (state) {
    state.page = 1
    state.total = null
    state.noMoreFlag = false
    state.couponList = []
  },
  [startypes.RECEIVE_COUPONSUSED_GENERAL] (state, payload) {
    state.couponGeneral = payload.data.couponUsedGeneral
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
