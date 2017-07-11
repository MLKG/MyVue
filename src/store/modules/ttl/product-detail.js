import ttlApi from '../../../api/ttl'
import { systemUrl } from '../../../config/env'
import * as commontypes from '../../mutation-types/common'
import * as ttltypes from '../../mutation-types/ttl'

const state = {
  productDetail: {
    canBuy: true
  },
  isOpenAccount: '',
  isRiskLevel: '',
  systemUrl: systemUrl
}

const getters = {
  productDetail: state => state.productDetail,
  isOpenAccount: state => state.isOpenAccount,
  isRiskLevel: state => state.isRiskLevel,
  systemUrl: state => state.systemUrl
}

const actions = {
  getProductDetail ({ commit }, params) {
    ttlApi.productDetail(
      {productId: params.productId},
      res => commit(ttltypes.PRODUCT_DETAIL, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  }
}

const mutations = {
  [ttltypes.PRODUCT_DETAIL] (state, payload) {
    let data = payload.data
    state.productDetail = data.productDetail
    // 上线生产时可以去掉
    // state.productDetail.content = data.productDetail.content.replace(/\/pytManager\/ueditorimgs/g, 'http://10.88.2.63:8080/pytManager/ueditorimgs')
    state.isOpenAccount = data.isOpenAccount
    state.isRiskLevel = data.isRiskLevel
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
