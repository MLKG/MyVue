import shopApi from '../../../api/shop'
import * as commontypes from '../../mutation-types/common'
import * as shoptypes from '../../mutation-types/shop'

const state = {
  selectedList: [],
  selectedType: 1,
  selectedTitle: '',
  rankingList: []
}

const getters = {
  selectedList: state => state.selectedList,
  selectedType: state => state.selectedType,
  selectedTitle: state => state.selectedTitle,
  rankingList: state => state.rankingList
}

const actions = {
  getRankTypeList ({ commit }) {
    shopApi.rankTypeList(
      res => commit(shoptypes.RECEIVE_RANKTYPE, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  },
  getPromoRankList ({ commit }, params) {
    shopApi.promoRankList(
      {type: params.type},
      res => commit(shoptypes.RECEIVE_RANKLIST, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  }
}

const mutations = {
  [shoptypes.RECEIVE_RANKTYPE] (state, payload) {
    state.selectedList = []

    let list = payload.data.rankTypeList.rows
    for (let row of list) {
      state.selectedList.push({
        typeCode: row.code,
        typeName: row.name
      })
    }
    state.selectedType = list[0].code
    state.selectedTitle = list[0].name
  },
  [shoptypes.RECEIVE_RANKLIST] (state, payload) {
    let rankList = payload.data.promoRankList.rankList
    let user = payload.data.promoRankList.user
    let rankingData = []

    if (rankList.length) {
      for (let one of rankList) {
        let item = {
          rowNumber: one.number,
          mangerName: one.userName,
          amount: one.amount
        }
        if (user && one.userId === user.userId) {
          item.isMyself = true
          item.mangerName = '我'
        } else {
          item.isMyself = false
        }
        rankingData.push(item)
      }

      if (user && user.number > 10) {
        let item = {
          rowNumber: user.number,
          mangerName: '我',
          amount: user.amount,
          isMyself: true
        }
        rankingData.push(item)
      }
      state.rankingList = rankingData
    }
  },
  [shoptypes.SELECT_RANKTYPE] (state, payload) {
    state.selectedType = payload.typeCode
    state.selectedTitle = payload.typeName
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
