// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import { VueAxios } from './utils/request'
import config from '@/config/defaultSettings'
// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
// import './mock'

import bootstrap from './core/bootstrap'
import './core/lazy_use'
import './permission' // permission control
import './utils/filter' // global filter
import './components/global.less'

Vue.config.productionTip = false

Vue.mixin({
  computed: {
    globalToken () {
      return Vue.ls.get('Access-Token')
    }
  }
})
// mount axios Vue.$http and this.$http
Vue.use(VueAxios)
Vue.prototype.BASE_URL = config.BASE_URL
new Vue({
  router,
  store,
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')
