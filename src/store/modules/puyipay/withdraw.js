import puyipayApi from '../../../api/puyipay'
import * as commontypes from '../../mutation-types/common'
import * as puyipaytypes from '../../mutation-types/puyipay'

const state = {
  userBalance: {},
  userInfo: {},
  phoneNum: '',
  modifyOk: false,
  apiErrMsg: ''
}

const getters = {
  userBalance: state => state.userBalance,
  userInfo: state => state.userInfo,
  phoneNum: state => state.phoneNum,
  modifyOk: state => state.modifyOk,
  apiErrMsg: state => state.apiErrMsg
}

const actions = {
  getBalance ({ commit }) {
    puyipayApi.balance(
      res => commit(puyipaytypes.RECEIVE_PUYIPAYBALANCE, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  },
  withdrawSubmit ({ commit }, params) {
    puyipayApi.withdrawSubmit(
      {payAmount: params.payAmount, recAccount: params.recAccount, verifyCode: params.verifyCode, codeSeq: params.codeSeq},
      res => commit(puyipaytypes.PUYIPAY_WITHDRAWSUBMIT, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  },
  phoneCodeForWithdraw ({ commit }, params) {
    puyipayApi.phoneCodeForWithdraw(
      {phoneNo: params.phoneNo},
      res => commit(commontypes.RECEIVE_SMSCODESEQ, res, {root: true}),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  }
}

const mutations = {
  [puyipaytypes.RECEIVE_PUYIPAYBALANCE] (state, payload) {
    state.userBalance = payload.data.balance
    state.userInfo = payload.data.cgbUser
    state.phoneNum = payload.data.cgbUser.phoneNo
  },
  [puyipaytypes.PUYIPAY_WITHDRAWSUBMIT] (state, payload) {
    if (payload.status === 'success') {
      state.modifyOk = true
    } else {
      state.modifyOk = false
      state.apiErrMsg = payload.message
    }
  },
  [puyipaytypes.PUYIPAY_REST_WITHDRAWSUBMIT] (state) {
    state.modifyOk = false
    state.apiErrMsg = ''
  },
  [puyipaytypes.CLEAR_WITHDRAWSUBMIT_ERR] (state) {
    state.apiErrMsg = ''
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
