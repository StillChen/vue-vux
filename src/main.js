import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import {WechatPlugin, AjaxPlugin, LoadingPlugin, ToastPlugin, AlertPlugin} from 'vux'
import router from './router'
import App from './App'

Vue.use(Vuex)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
