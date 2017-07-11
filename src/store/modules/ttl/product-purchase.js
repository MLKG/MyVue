import ttlApi from '../../../api/ttl'
import * as commontypes from '../../mutation-types/common'

const actions = {
  getProductRecord ({ commit }, params) {
    return new Promise((resolve, reject) => {
      ttlApi.productRecord(
        params,
        res => resolve(res.data),
        err => commit(commontypes.AUTH_FAILURE, err, {root: true})
      )
    })
  },
  checkExamine ({ commit }, params) {
    return new Promise((resolve, reject) => {
      ttlApi.checkExamine(
        params,
        res => resolve(res),
        err => reject(err)
      )
    })
  }
}

export default {
  namespaced: true,
  actions
}
