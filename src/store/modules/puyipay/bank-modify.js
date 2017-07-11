import puyipayApi from '../../../api/puyipay'
import * as commontypes from '../../mutation-types/common'
import * as puyipaytypes from '../../mutation-types/puyipay'

const state = {
  modifyOk: false,
  apiErrMsg: ''
}

const getters = {
  modifyOk: state => state.modifyOk,
  apiErrMsg: state => state.apiErrMsg
}

const actions = {
  modifyCard ({ commit }, params) {
    puyipayApi.modifyCard(
      {cardNo: params.cardNo, phoneNo: params.phoneNo, verifyCode: params.verifyCode, codeSeq: params.codeSeq},
      res => commit(puyipaytypes.PUYIPAY_MODIFYCARD, res),
      err => commit(puyipaytypes.PUYIPAY_MODIFYCARD_ERR, err)
    )
  },
  phoneCodeForCard ({ commit }, params) {
    puyipayApi.phoneCodeForCard(
      {phoneNo: params.phoneNo, cardNo: params.cardNo},
      res => commit(commontypes.RECEIVE_SMSCODESEQ, res, {root: true}),
      err => commit(puyipaytypes.RECEIVE_SMSCODESEQ_ERROR, err)
    )
  }
}

const mutations = {
  [puyipaytypes.PUYIPAY_MODIFYCARD] (state, payload) {
    state.modifyOk = true
  },
  [puyipaytypes.PUYIPAY_MODIFYCARD_ERR] (state, payload) {
    state.modifyOk = false
    state.apiErrMsg = payload.message
  },
  [puyipaytypes.PUYIPAY_REST_MODIFYCARD] (state) {
    state.modifyOk = false
    state.apiErrMsg = ''
  },
  [puyipaytypes.CLEAR_API_ERRORMSG] (state) {
    state.apiErrMsg = ''
  },
  [puyipaytypes.RECEIVE_SMSCODESEQ_ERROR] (state, payload) {
    state.apiErrMsg = payload.message
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
