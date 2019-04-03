import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'
import './plugins/vuetify'
import App from './App.vue'

import store from '../store'

Vue.use(Vuetify, VueAxios, axios)

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
