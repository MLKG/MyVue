import fetch from '../config/fetch'

export default {
  dalinPost (o, cb, errorCb) {
    fetch('dalin/getSuccess', {name: o.name, age: o.age}).then(cb).catch(errorCb)
  }
}
