import Vue from 'vue'
import Router from 'vue-router'
import dalin from './dalin'

Vue.use(Router)

export default new Router({
  routes: [
    ...dalin.router
  ]
})
