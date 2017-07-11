import fetch from '../config/fetch'

export default {
  general (cb, errorCb) {
    fetch('starStore/general', {}).then(cb).catch(errorCb)
  },
  upgradeConfirm (cb, errorCb) {
    fetch('starStore/upgradeConfirm', {}, false).then(cb).catch(errorCb)
  },
  weeklyDetail (o, cb, errorCb) {
    fetch('starStore/weeklyDetail', {date: o.date}).then(cb).catch(errorCb)
  },
  weeklyCustomer (o, cb, errorCb) {
    fetch('starStore/weeklyCustomer', {date: o.date}).then(cb).catch(errorCb)
  },
  couponsUsedDetail (o, cb, errorCb) {
    fetch('starStore/couponsUsedDetail', {page: o.page, rows: o.rows}).then(cb).catch(errorCb)
  },
  starSystem (cb, errorCb) {
    fetch('starStore/starSystem', {}).then(cb).catch(errorCb)
  },
  couponsUsed (o, cb, errorCb) {
    fetch('starStore/couponsUsed', {date: o.date, page: o.page, rows: o.rows}).then(cb).catch(errorCb)
  },
  couponsNotUsed (o, cb, errorCb) {
    fetch('starStore/couponsNotUsed', {date: o.date, page: o.page, rows: o.rows}).then(cb).catch(errorCb)
  },
  starLevel (o, cb, errorCb) {
    fetch('starStore/starLevel', {page: o.page, rows: o.rows}).then(cb).catch(errorCb)
  },
  couponUsedGeneral (cb, errorCb) {
    fetch('starStore/couponUsedGeneral', {}).then(cb).catch(errorCb)
  }
}
