import starApi from '../../../api/starstore'
import * as commontypes from '../../mutation-types/common'
import * as startypes from '../../mutation-types/starstore'

const state = {
  weeklyDetail: {},
  weeklyCustomer: {},
  noInvestList: [],
  cleanList: [],
  transferList: [],
  rankLevel: 0,
  userName: ''
}

const getters = {
  weeklyDetail: state => state.weeklyDetail,
  weeklyCustomer: state => state.weeklyCustomer,
  noInvestList: state => state.noInvestList,
  cleanList: state => state.cleanList,
  transferList: state => state.transferList,
  rankLevel: state => state.rankLevel,
  userName: state => state.userName
}

const actions = {
  getDetail ({ commit }, params) {
    starApi.weeklyDetail(
      {date: params.date},
      res => commit(startypes.WEEKLY_DETAIL, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  },
  getCustomer ({ commit }, params) {
    starApi.weeklyCustomer(
      {date: params.date},
      res => commit(startypes.WEEKLY_CUSTOMER, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  }
}

const mutations = {
  [startypes.WEEKLY_DETAIL] (state, payload) {
    if (payload.data.weeklyDetail.length > 0) {
      state.weeklyDetail = payload.data.weeklyDetail[0]
      state.userName = payload.data.userName

      let lineWidth = 6.3

      let upgradeArchive = state.weeklyDetail.currentArchive + state.weeklyDetail.upgradeDistance // 需升星的总业绩
      let processWidth
      if (state.weeklyDetail.upgradeDistance === 0) {
        processWidth = 1
      } else { // flag: 1-升 2-保 0-不显示
        if (state.weeklyDetail.flag === 1) { // 当前处于升星状态，没有中间的圆圈
          processWidth = state.weeklyDetail.currentArchive / upgradeArchive
        } else {  // 当前处于保星
          if (state.weeklyDetail.maintainDistance > 0) { // 当前未达成保星业绩情况, 显示在左半部分的比例
            processWidth = state.weeklyDetail.currentArchive / state.weeklyDetail.minInvestAmount / 2
          } else if (state.weeklyDetail.maintainDistance === 0) { // 保星成功，显示在右半部份的比例
            processWidth = (state.weeklyDetail.currentArchive - state.weeklyDetail.minInvestAmount) / (upgradeArchive - state.weeklyDetail.minInvestAmount) / 2 + 0.5
          } else {
            processWidth = state.weeklyDetail.currentArchive / upgradeArchive  // 进度条进度比例
          }
        }
      }

      // 针对五星等级情况
      if (state.weeklyDetail.rankLevel === 5) {
        processWidth = state.weeklyDetail.currentArchive / state.weeklyDetail.minInvestAmount
      }

      // 名下客户被调走的情况
      if (state.weeklyDetail.currentArchive < state.weeklyDetail.minInvestAmount || state.weeklyDetail.investCount < state.weeklyDetail.investorMin) {
        state.weeklyDetail.flag = 2
        state.weeklyDetail.investorDistance = (state.weeklyDetail.investorMin - state.weeklyDetail.investCount) > 0 ? state.weeklyDetail.investorMin - state.weeklyDetail.investCount : 0
      }

      if (state.weeklyDetail.flag === 1 || state.weeklyDetail.rankLevel === 0) {
        state.weeklyDetail.startName = '升星'
      } else {
        state.weeklyDetail.startName = '保星'
      }

      state.weeklyDetail.progress = processWidth * lineWidth // 进度条进度位置
      state.weeklyDetail.positionRadiu = processWidth * lineWidth - 0.13  // 红色小圆圈的位置
    } else {
      state.weeklyDetail = ''
    }

    // state.weeklyDetail.currentArchive = 6000
    // state.weeklyDetail.upgradeDistance = 0
    // state.weeklyDetail.maintainDistance = 0
  },
  [startypes.WEEKLY_CUSTOMER] (state, payload) {
    state.weeklyCustomer = payload.data.weeklyCustomer
    state.noInvestList = payload.data.weeklyCustomer.noInvestList
    state.cleanList = payload.data.weeklyCustomer.cleanList
    state.transferList = payload.data.weeklyCustomer.transferList
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

