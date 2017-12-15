// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import CMap from '@/core/CMap'

Vue.use(elementUI)
// Vue.use(Submenu)

Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
window.app = app

CMap.setVue(app)
