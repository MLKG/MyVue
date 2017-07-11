import starApi from '../../../api/starstore'
import * as commontypes from '../../mutation-types/common'
import * as startypes from '../../mutation-types/starstore'

const state = {
  rankList: [{}, {}, {}, {}, {}, {}],
  hongbaoTypes: [],
  hongbaoList: [],
  starInfo: {},
  wechatImg: ''
}

const getters = {
  rankList: state => state.rankList,
  hongbaoTypes: state => state.hongbaoTypes,
  hongbaoList: state => state.hongbaoList,
  starInfo: state => state.starInfo,
  wechatImg: state => state.wechatImg
}

const actions = {
  starSystem ({ commit }) {
    starApi.starSystem(
      res => commit(startypes.RECEIVE_STARSYSTEM, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  }
}

const mutations = {
  [startypes.RECEIVE_STARSYSTEM] (state, payload) {
    state.starInfo = payload.data.general
    state.wechatImg = payload.data.wechatImg

    var list = payload.data.starSystem.levels
    var hongbao = payload.data.starSystem.hongbao
    state.hongbaoTypes = hongbao.values
    state.hongbaoList = hongbao.counts
    state.rankList = []
    for (let item of list) {
      state.rankList.push({
        level: item.rankLevel,
        maintain: item.maintainAward,
        upgrade: item.upgradeAward,
        minInvestCount: item.minInvestCount,
        minInvestAmount: item.minInvestAmount / 10000
      })
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
