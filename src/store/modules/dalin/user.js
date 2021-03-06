import user from '../../../api/user'
import * as commontypes from '../../mutation-types/common'

const state = {}
const getters = {}

const actions = {
  login ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      user.login(
        {name: payload.name, password: payload.password},
        res => {
          commit(commontypes.AUTH_ISLOGIN, res, {root: true})
          resolve()
        },
        err => commit(commontypes.AUTH_FAILURE, err, {root: true})
      )
    })
  },
  loginOut ({ commit }) {
    user.loginOut(
      res => commit(commontypes.AUTH_CLEARUSERINFO, res, {root: true}),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  },
  getUserInfo ({ commit }) {
    user.getUserInfo(
      res => commit(commontypes.AUTH_USERINFO, res, {root: true}),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions
}
