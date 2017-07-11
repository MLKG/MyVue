import ttlApi from '../../../api/ttl'
import * as commontypes from '../../mutation-types/common'
import * as ttltypes from '../../mutation-types/ttl'

const state = {
  loanDetail: {},
  phoneNo: '',
  prodName: '',
  apiErrMsg: ''
}

const getters = {
  loanDetail: state => state.loanDetail,
  phoneNo: state => state.phoneNo,
  prodName: state => state.prodName,
  apiErrMsg: state => state.apiErrMsg
}

const actions = {
  getLoanDetail ({commit}, params) {
    ttlApi.loanDetail(
      {applNo: params.applNo, proCode: params.proCode},
      res => commit(ttltypes.LOAN_DETAIL, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  },
  phoneCodeForLoan ({commit}, params) {
    ttlApi.phoneCodeForLoan(
      {prodName: params.prodName},
      res => commit(commontypes.RECEIVE_SMSCODESEQ, res, {root: true}),
      err => commit(ttltypes.RECEIVE_SMSCODESEQ_ERROR, err)
    )
  },
  loanSubmit ({commit}, params) {
    return new Promise((resolve) => {
      ttlApi.loanSubmit(
        {insurorderno: params.insurorderno, productCode: params.productCode, verifyCode: params.verifyCode, codeSeq: params.codeSeq},
        res => resolve(res),
        err => commit(commontypes.AUTH_FAILURE, err, {root: true})
      )
    })
  },
  loanTerms ({commit}, params) {
    return new Promise((resolve) => {
      ttlApi.loanTerms(
        {applNo: params.applNo, proCode: params.proCode},
        res => resolve(res),
        err => commit(commontypes.AUTH_FAILURE, err, {root: true})
      )
    })
  }
}

const mutations = {
  [ttltypes.LOAN_DETAIL] (state, payload) {
    state.loanDetail = payload.data.detail
    state.phoneNo = payload.data.detail.mobileNo
    state.prodName = payload.data.detail.insurName
  },
  [ttltypes.CLEAR_PHONECODE_ERR] (state, payload) {
    state.apiErrMsg = ''
  },
  [ttltypes.RECEIVE_SMSCODESEQ_ERROR] (state, payload) {
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
