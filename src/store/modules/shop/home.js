import shopApi from '../../../api/shop'
import starApi from '../../../api/starstore'
import * as commontypes from '../../mutation-types/common'
import * as shoptypes from '../../mutation-types/shop'

const state = {
  showUpdate: false,
  customerInfo: {},
  investInfo: {},
  starStore: {}
}

const getters = {
  showUpdate: state => state.showUpdate,
  customerInfo: state => state.customerInfo,
  investInfo: state => state.investInfo,
  starStore: state => state.starStore
}

const actions = {
  getSummary ({ commit }) {
    shopApi.general(
      res => {
        commit(shoptypes.RECEIVE_SUMMARY, res)
        if (res.data.starStore.isAlert === 1) {
          setTimeout(() => {
            starApi.upgradeConfirm()
          }, 2000)
        }
      },
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  }
}

const mutations = {
  [shoptypes.RECEIVE_SUMMARY] (state, payload) {
    let data = payload.data
    state.customerInfo = data.customerInfo
    state.investInfo = data.investInfo
    state.starStore = data.starStore
    let starStore = data.starStore
    // 如果是没有查询到数据
    if (Object.keys(starStore).length === 0) {
      state.starStore.totalArchive = 0
      state.starStore.isHaveData = false
    } else {
      state.starStore.isHaveData = true
    }
    if (data.starStore.isAlert === 1) {
      state.showUpdate = true
    }
    // totalArchive 当前业绩
    // lastArchive 上期剩余业绩
    // upgradeDistance 距离升星的差距金额
    // maintainDistance 距离保星的差距金额
    let baseWidth = 6.62
    let upgradeValue = starStore.upgradeDistance + starStore.totalArchive  // 大于升星或者等于升星的业绩
    // 星级进度的参数判断
    let progress = starStore.totalArchive / upgradeValue * baseWidth
    // 如果当前的业绩大于升星业绩，则显示在最右端
    if (starStore.upgradeDistance === 0) {
      state.starStore.progressValue = baseWidth
    } else {
      // 如果当前是处在升星的状态，则直接用比例
      if (starStore.rankLevel === 0 || starStore.isShowFlag === 0) {
        state.starStore.progressValue = progress
      } else {
        // 保星状态，则用对应左右两段的比例
        // 如果未保星成功，则显示在左一半的对应比例
        if (starStore.maintainDistance > 0) {
          state.starStore.progressValue = starStore.totalArchive / starStore.minInvestAmount * baseWidth / 2
        } else if (starStore.maintainDistance === 0) {
          // 如果保星成功了，则显示在右一半的对应比例
          state.starStore.progressValue = baseWidth / 2 + (starStore.totalArchive - starStore.minInvestAmount) / (upgradeValue - starStore.minInvestAmount) * baseWidth / 2
        }
      }
    }

    // 针对5星做特殊处理
    if (starStore.rankLevel === 5) {
      state.starStore.progressValue = starStore.totalArchive / starStore.minInvestAmount * baseWidth
    }

    // 如果是名下客户被调走的情况
    if (starStore.totalArchive < starStore.minInvestAmount || starStore.investorCount < starStore.investorMin) {
      state.starStore.flag = 2
      starStore.flag = 2
      state.starStore.investorDistance = (starStore.investorMin - starStore.investorCount) > 0 ? (starStore.investorMin - starStore.investorCount) : 0
    }

    // 如果溢出则显示最右端
    if (state.starStore.progressValue > baseWidth) {
      state.starStore.progressValue = baseWidth
    } else if (starStore.totalArchive === 0) {
      state.starStore.progressValue = 0
    }

    // 当前业绩显示框的位置
    if (state.starStore.progressValue < baseWidth / 2) {
      state.starStore.isShowLeft = true
    } else {
      state.starStore.isShowLeft = false
    }

    // 判断是升星还是保星
    if (starStore.rankLevel === 0 || starStore.flag === 1) {
      state.starStore.investorStarName = '升星'
    } else {
      state.starStore.investorStarName = '保星'
    }
  },
  [shoptypes.RECEIVE_IKNOW] (state, payload) {
    state.showUpdate = payload.status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
