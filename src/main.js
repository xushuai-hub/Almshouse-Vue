// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import api from './request/api'
import store from './vuex'
import 'element-ui/lib/theme-chalk/index.css'

//axios.defaults.baseURL='http://172.27.135.66/api'
Vue.prototype.$API=api;
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
