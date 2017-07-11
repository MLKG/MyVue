import puyipayApi from '../../../api/puyipay'
import * as commontypes from '../../mutation-types/common'
import * as puyipaytypes from '../../mutation-types/puyipay'

const state = {
  userBalance: {},
  phoneNum: '',
  bankName: '',
  cardNo: '',
  bankCode: '',
  apiErrMsg: '',
  paySingleLimit: 0,
  paySingleDaylimit: 0,
  userRealName: ''
}

const getters = {
  userBalance: state => state.userBalance,
  phoneNum: state => state.phoneNum,
  bankName: state => state.bankName,
  cardNo: state => state.cardNo,
  bankCode: state => state.bankCode,
  apiErrMsg: state => state.apiErrMsg,
  paySingleLimit: state => state.paySingleLimit,
  paySingleDaylimit: state => state.paySingleDaylimit,
  userRealName: state => state.userRealName
}

const actions = {
  getBalance ({ commit }) {
    puyipayApi.balance(
      res => commit(puyipaytypes.RECEIVE_PUYIPAYBALANCE, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  },
  phoneCodeForPayment ({ commit }, params) {
    puyipayApi.phoneCodeForPayment(
      {phoneNo: params.phoneNo, prodName: params.prodName},
      res => commit(commontypes.RECEIVE_SMSCODESEQ, res, {root: true}),
      err => commit(puyipaytypes.RECEIVE_SMSCODESEQ_ERROR, err)
    )
  },
  payConfirm ({ commit }, params) {
    return new Promise((resolve) => {
      puyipayApi.payConfirm(
        params,
        res => resolve(res),
        err => resolve(err)
      )
    })
  }
}

const mutations = {
  [puyipaytypes.RECEIVE_PUYIPAYBALANCE] (state, payload) {
    state.userRealName = payload.data.cgbUser.cusName
    state.userBalance = payload.data.balance
    state.paySingleLimit = payload.data.bankLimit ? payload.data.bankLimit.paySingleLimit / 10000 : 0
    state.paySingleDaylimit = payload.data.bankLimit ? payload.data.bankLimit.paySingleDaylimit / 10000 : 0
    state.phoneNum = payload.data.cgbUser.phoneNo
    state.bankName = payload.data.cgbUser.bankName
    state.cardNo = payload.data.cgbUser.cardNo.substr(-4, 4)
    state.bankCode = payload.data.cgbUser.bankCode
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
