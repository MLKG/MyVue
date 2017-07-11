import puyipayApi from '../../../api/puyipay'
import * as commontypes from '../../mutation-types/common'
import * as puyipaytypes from '../../mutation-types/puyipay'

const state = {
  userInfo: {}
}

const getters = {
  userInfo: state => state.userInfo
}

const actions = {
  getUserInfo ({ commit }) {
    puyipayApi.user(
      res => commit(puyipaytypes.RECEIVE_PUYIPAYINFO, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  },
  isOpenAccount ({ commit }) {
    return new Promise((resolve) => {
      puyipayApi.isOpenAccount(
        res => resolve(res.data.isOpenAccount),
        err => commit(commontypes.AUTH_FAILURE, err, {root: true})
      )
    })
  }
}

const mutations = {
  [puyipaytypes.RECEIVE_PUYIPAYINFO] (state, payload) {
    state.userInfo = payload.data.cgbUser
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
