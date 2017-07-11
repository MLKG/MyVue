import starApi from '../../../api/starstore'
import * as commontypes from '../../mutation-types/common'
import * as startypes from '../../mutation-types/starstore'

const state = {
  starInfo: {},
  couponInfo: {},
  wechatImg: ''
}

const getters = {
  starInfo: state => state.starInfo,
  couponInfo: state => state.couponInfo,
  wechatImg: state => state.wechatImg
}

const actions = {
  general ({ commit }) {
    starApi.general(
      res => commit(startypes.RECEIVE_GENERAL, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  }
}

const mutations = {
  [startypes.RECEIVE_GENERAL] (state, payload) {
    state.couponInfo = payload.data.couponGeneral
    state.starInfo = payload.data.general
    state.wechatImg = payload.data.wechatImg
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
