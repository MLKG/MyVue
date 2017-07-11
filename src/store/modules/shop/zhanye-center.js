import shopApi from '../../../api/shop'
import * as commontypes from '../../mutation-types/common'
import * as shoptypes from '../../mutation-types/shop'
import { systemUrl } from '../../../config/env'

const state = {
  currentNav: '',
  notificationSettings: {},
  promoList: [],
  activityID: 0,
  userIdForActivity: 0,
  userName: '',
  goLink: ''
}

const getters = {
  currentNav: state => state.currentNav,
  notificationSettings: state => state.notificationSettings,
  promoList: state => state.promoList,
  goLink: state => state.goLink
}

const actions = {
  setNotificationSettings ({ commit }, params) {
    shopApi.notificationSettings(
      params,
      res => commit(shoptypes.RECEIVE_NOTIFICATION_SETTING, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  },
  getMobilePromoList ({ commit }) {
    shopApi.mobilePromoList(
      res => commit(shoptypes.RECEIVE_MOBILEPROMOLIST, res),
      err => commit(commontypes.AUTH_FAILURE, err, {root: true})
    )
  }
}

const mutations = {
  [shoptypes.CHANGE_ZYCURRENTNAV] (state, payload) {
    state.currentNav = payload.type
  },
  [shoptypes.RECEIVE_NOTIFICATION_SETTING] (state, payload) {
    state.notificationSettings = payload.data.notificationSettings
  },
  [shoptypes.RECEIVE_MOBILEPROMOLIST] (state, payload) {
    state.promoList = []
    state.activityID = payload.data.activityId
    state.userName = payload.data.user.displayName
    state.userIdForActivity = payload.data.user.promoCode

    let rows = payload.data.promoList.rows

    if (rows.length) {
      for (let one of rows) {
        let item = {
          title: one.title,
          content: one.content,
          imgUrlPath: systemUrl + one.imgUrl,
          id: one.id,
          activeType: one.activeType,
          url: one.url,
          redirectUrl: one.redirectUrl,
          imgUrl: one.imgUrl
        }
        state.promoList.push(item)
      }

      // let additionalItem = {
      //   title: '一起加入会理财的普益投',
      //   content: state.promoList[0].content,
      //   imgUrlPath: systemUrl + 'banner/20160812/20160812100102.png',
      //   id: 23,
      //   activeType: 1,
      //   url: 'https://www.puyitou.com/wechat/#/my-register-qrcode',
      //   redirectUrl: 'https://www.puyitou.com/wechat/#/activity-register-step1'
      // }
      // state.promoList.push(additionalItem)
    }
  },
  [shoptypes.SHARE_TO_FRIENDS] (state, payload) {
    let id = payload.id
    let data = state.promoList.find(val => id === val.id)
    let link = ''

    if (state.activityID) {
      if (data.url.split('#/')[1]) {
        link = data.url.split('#/')[0] + 'redirect.html?v=' + data.url.split('#/')[1] + '&a=' + state.activityID + '&u=' + state.userIdForActivity + '&n=' + state.userName + '&shareTitle=' + data.title + '&shareDesc=' + data.content + '&shareImgUrl=' + systemUrl + data.imgUrl
      } else {
        link = data.url + '&u=' + state.userIdForActivity + '&a=' + state.activityID + '&n=' + state.userName + '&shareTitle=' + data.title + '&shareDesc=' + data.content + '&shareImgUrl=' + systemUrl + data.imgUrl
      }
    } else {
      if (data.url.split('#/')[1]) {
        link = data.url.split('#/')[0] + 'redirect.html?v=' + data.url.split('#/')[1] + '&u=' + state.userIdForActivity
      } else {
        link = data.url + '&u=' + state.userIdForActivity
      }
    }

    // 如果不是二维码推广
    if (data.url.indexOf('register-qrcode') === -1) {
      // 设置COOKIES值用来添加指引标识
      link = link + '&ShopNet=true'
    } else {
      localStorage.setItem('qrcode', data.redirectUrl)
    }
    // console.log(link)
    state.goLink = link
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
