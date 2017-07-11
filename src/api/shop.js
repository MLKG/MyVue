import fetch from '../config/fetch'

export default {
  general (cb, errorCb) {
    fetch('onlinestore/general', {}).then(cb).catch(errorCb)
  },
  incomeList (o, cb, errorCb) {
    fetch('onlinestore/incomeList', {page: o.page, rows: o.rows}).then(cb).catch(errorCb)
  },
  incomeDetail (o, cb, errorCb) {
    fetch('onlinestore/incomeDetail', {month: o.month}).then(cb).catch(errorCb)
  },
  zxInvestList (o, cb, errorCb) {
    fetch('onlinestore/zxInvestList', {date: o.date, page: o.page, rows: o.rows}).then(cb).catch(errorCb)
  },
  psInvestList (o, cb, errorCb) {
    fetch('onlinestore/psInvestList', {date: o.date, page: o.page, rows: o.rows}).then(cb).catch(errorCb)
  },
  customerList (o, cb, errorCb) {
    fetch('onlinestore/customerList', {type: o.type, page: o.page, rows: o.rows}).then(cb).catch(errorCb)
  },
  customerInfo (o, cb, errorCb) {
    fetch('onlinestore/customerInfo', {customerId: o.customerId}).then(cb).catch(errorCb)
  },
  customerProduct (o, cb, errorCb) {
    fetch('onlinestore/customerProduct', {customerId: o.customerId, page: o.page, rows: o.rows}).then(cb).catch(errorCb)
  },
  customerCoupons (o, cb, errorCb) {
    fetch('onlinestore/customerCoupons', {customerId: o.customerId}).then(cb).catch(errorCb)
  },
  customerLoginInfo (o, cb, errorCb) {
    fetch('onlinestore/customerLoginInfo', {customerId: o.customerId}).then(cb).catch(errorCb)
  },
  notificationSettings (o, cb, errorCb) {
    fetch('onlinestore/notificationSettings', o).then(cb).catch(errorCb)
  },
  mobilePromoList (cb, errorCb) {
    fetch('onlinestore/mobilePromoList').then(cb).catch(errorCb)
  },
  searchCustomer (o, cb, errorCb, pop) {
    fetch('onlinestore/searchCustomer', {condition: o.condition, page: o.page, rows: o.rows}, pop).then(cb).catch(errorCb)
  },
  rankTypeList (cb, errorCb) {
    fetch('onlinestore/rankTypeList').then(cb).catch(errorCb)
  },
  promoRankList (o, cb, errorCb) {
    fetch('onlinestore/promoRankList', {type: o.type}).then(cb).catch(errorCb)
  }
}
