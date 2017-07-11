import starApi from '../../../api/starstore'
import * as commontypes from '../../mutation-types/common'
import * as startypes from '../../mutation-types/starstore'

var numberToText = function (n) {
  switch (n) {
    case 1:
      return '一'
    case 2:
      return '二'
    case 3:
      return '三'
    case 4:
      return '四'
    case 5:
      return '五'
  }
}

const PERPAGE_ROWS = 10

const state = {
  page: 1,
  total: null,
  noMoreFlag: false,
  achievementList: []
}

const getters = {
  total: state => state.total,
  noMoreFlag: state => state.noMoreFlag,
  achievementList: state => state.achievementList
}

const actions = {
  starLevel ({ commit }) {
    starApi.starLevel(
      {page: state.page, rows: PERPAGE_ROWS},
      res => commit(startypes.RECEIVE_ACHIEVEMENTS, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  }
}

const mutations = {
  [startypes.RECEIVE_ACHIEVEMENTS] (state, payload) {
    let list = payload.data.starLevel
    let rows = list.rows
    let total = list.total

    state.total = total

    if (rows.length) {
      state.page++
      for (let one of rows) {
        var starMsg = ''
        var starState = 0
        if (one.newRank === 0) {
          starMsg = one.investorCount >= 2 ? '合格理财师' : '见习理财师'
          starState = 2
        } else {
          switch (one.rankChangeType) {
            case 1:
              starMsg = '升为' + numberToText(one.newRank) + '星'
              break
            case 2:
              starMsg = '保' + numberToText(one.newRank) + '星成功'
              break
            case 3:
              starMsg = '降为' + numberToText(one.newRank) + '星'
              break
          }
          starState = one.rankChangeType
        }
        let item = {
          startYear: Number(one.checkStartDate.split('-')[0]),
          startMonth: Number(one.checkStartDate.split('-')[1]),
          endYear: Number(one.checkEndDate.split('-')[0]),
          endMonth: Number(one.checkEndDate.split('-')[1]),
          totalArchive: one.totalArchive || 0,
          lastRestArchive: one.lastRestArchive || 0,
          halfDhtArchive: one.halfDhtArchive || 0,
          halfPsArchive: one.halfPsArchive || 0,
          starMsg: starMsg,
          starState: starState
        }
        state.achievementList.push(item)
      }
    }

    if (rows.length < PERPAGE_ROWS) {
      state.noMoreFlag = true
    }
  },
  [startypes.REST_ACHIEVEMENTLIST] (state) {
    state.page = 1
    state.total = null
    state.noMoreFlag = false
    state.achievementList = []
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
