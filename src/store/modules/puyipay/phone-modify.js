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
  modifyPhone ({ commit }, params) {
    puyipayApi.modifyPhone(
      {phoneNo: params.phoneNo, verifyCode: params.verifyCode, codeSeq: params.codeSeq},
      res => commit(puyipaytypes.PUYIPAY_MODIFYPHONE, res),
      err => commit(puyipaytypes.PUYIPAY_MODIFYPHONE_ERR, err)
    )
  },
  phoneCodeForPhone ({ commit }, params) {
    puyipayApi.phoneCodeForPhone(
      {phoneNo: params.phoneNo},
      res => commit(commontypes.RECEIVE_SMSCODESEQ, res, {root: true}),
      err => commit(puyipaytypes.RECEIVE_SMSCODESEQ_ERROR, err)
    )
  }
}

const mutations = {
  [puyipaytypes.PUYIPAY_MODIFYPHONE] (state) {
    state.modifyOk = true
  },
  [puyipaytypes.PUYIPAY_MODIFYPHONE_ERR] (state, payload) {
    state.modifyOk = false
    state.apiErrMsg = payload.message
  },
  [puyipaytypes.PUYIPAY_REST_MODIFYPHONE] (state) {
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
