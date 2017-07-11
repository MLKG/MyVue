import ttlApi from '../../../api/ttl'
import * as commontypes from '../../mutation-types/common'
import * as ttltypes from '../../mutation-types/ttl'

const state = {
  productList: [],
  total: -1
}

const getters = {
  productList: state => state.productList,
  total: state => state.total
}

const actions = {
  getProductList ({ commit }) {
    ttlApi.productList(
      res => commit(ttltypes.PRODUCT_LIST, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  }
}

const mutations = {
  [ttltypes.PRODUCT_LIST] (state, payload) {
    let data = payload.data.productList.rows
    state.productList = data
    state.total = data.length
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
