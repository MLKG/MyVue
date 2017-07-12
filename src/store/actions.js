import * as commontypes from './mutation-types/common'

export default {
  showMsg ({ commit }, o) {
    commit(commontypes.SET_POPMESSAGE, o)
    setTimeout(() => {
      commit(commontypes.CLEAR_POPSHOW)
      commit(commontypes.CLEAR_POPMESSAGE)
    }, 2000)
  }
}
