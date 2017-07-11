import ttlApi from '../../../api/ttl'
import * as commontypes from '../../mutation-types/common'
import * as ttltypes from '../../mutation-types/ttl'

const state = {
  surrenderDetail: {},
  cgbUser: {},
  phoneNo: '',
  apiErrMsg: '',
  prodName: '',
  errorStatus: 'error',
  modifyOk: false
}

const getters = {
  surrenderDetail: state => state.surrenderDetail,
  cgbUser: state => state.cgbUser,
  phoneNo: state => state.phoneNo,
  prodName: state => state.prodName,
  apiErrMsg: state => state.apiErrMsg,
  errorStatus: state => state.errorStatus,
  modifyOk: state => state.modifyOk
}

const actions = {
  getSurrenderDetail ({commit}, params) {
    ttlApi.surrenderDetail(
      {applno: params.applno, bxgsdm: params.bxgsdm},
      res => commit(ttltypes.CANCEL_INSURANCE, res),
      err => commit(ttltypes.LOAN_DETAIL_FAIL, err)
    )
  },
  phoneCode ({commit}, params) {
    ttlApi.surrenderPhoneCode(
      {phoneNo: params.phoneNo},
      res => commit(commontypes.RECEIVE_SMSCODESEQ, res, {root: true}),
      err => commit(ttltypes.RECEIVE_SMSCODESEQ_ERROR, err)
    )
  },
  surrenderSubmit ({commit}, params) {
    return new Promise((resolve) => {
      ttlApi.surrenderSubmit(
        {orderId: params.orderId, insurCode: params.insurCode, verifyCode: params.verifyCode},
        res => resolve(res),
        err => commit(ttltypes.SURRENDER_ERR, err)
      )
    })
  }
}

const mutations = {
  [ttltypes.CANCEL_INSURANCE] (state, payload) {
    state.errorStatus = 'error'
    state.surrenderDetail = payload.data.surrenderDetail
    state.cgbUser = payload.data.cgbUser
    state.phoneNo = payload.data.cgbUser.phoneNo
    state.prodName = payload.data.detail.prodName
  },
  [ttltypes.CLEAR_PHONECODE_ERR] (state, payload) {
    state.apiErrMsg = ''
  },
  [ttltypes.RECEIVE_SMSCODESEQ_ERROR] (state, payload) {
    state.apiErrMsg = payload.message
  },
  [ttltypes.LOAN_DETAIL_FAIL] (state, payload) {
    state.errorStatus = payload.status
  },
  [ttltypes.SURRENDER_ERR] (state, payload) {
    state.modifyOk = false
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
