// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/main.css'

import VueResource from 'vue-resource'

import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueResource)

window.$g = {
  name: null,
  email: null,
  country: null,
  phone: null,
  imageConsultancy: [],
  dateCoaching: [],
  token: null
} // a special ver that is used for save global data

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
