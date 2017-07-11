import puyipayApi from '../../../api/puyipay'
import * as commontypes from '../../mutation-types/common'
import * as puyipaytypes from '../../mutation-types/puyipay'

const state = {
  apiErrMsg: '',
  bankList: []
}

const getters = {
  apiErrMsg: state => state.apiErrMsg,
  bankList: state => state.bankList
}

const actions = {
  uploadImages ({ commit }, params) {
    return new Promise((resolve) => {
      puyipayApi.uploadImages(
        {frontImage: params.frontImage, backImage: params.backImage},
        res => resolve(res),
        err => commit(commontypes.AUTH_FAILURE, err, {root: true})
      )
    })
  },
  phoneCodeForRegister ({ commit }, params) {
    puyipayApi.phoneCodeForRegister(
      {certNo: params.certNo, phoneNo: params.phoneNo, cardNo: params.cardNo},
      res => commit(commontypes.RECEIVE_SMSCODESEQ, res, {root: true}),
      err => commit(puyipaytypes.RECEIVE_SMSCODESEQ_ERROR, err)
    )
  },
  openAccount ({ commit }, params) {
    return new Promise((resolve) => {
      puyipayApi.openAccount(
        params,
        res => resolve(res),
        err => commit(puyipaytypes.PUYIPAY_OPENACCOUNT_ERR, err)
      )
    })
  },
  bankList ({ commit }) {
    puyipayApi.bankList(
      res => commit(puyipaytypes.RECEIVE_PUYIPAY_BANKLIST, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  }
}

const mutations = {
  [puyipaytypes.CLEAR_API_ERRORMSG] (state) {
    state.apiErrMsg = ''
  },
  [puyipaytypes.RECEIVE_SMSCODESEQ_ERROR] (state, payload) {
    state.apiErrMsg = payload.message
  },
  [puyipaytypes.PUYIPAY_OPENACCOUNT_ERR] (state, payload) {
    state.apiErrMsg = payload.message
  },
  [puyipaytypes.RECEIVE_PUYIPAY_BANKLIST] (state, payload) {
    state.bankList = payload.data.bankList
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
