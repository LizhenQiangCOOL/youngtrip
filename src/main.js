import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import vueAxios from 'vue-axios'
import axios from 'axios'

// axios全局设置
axios.defaults.baseURL = process.env.VUE_APP_APIURL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.use(vueAxios, axios)

Vue.config.productionTip = false

// vue-router Uncaught(in promise)  (in promise) NavigationDuplicated {_name: "NavigationDuplicated", name: "NavigationDuplicated"}
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

new Vue({
  router,
  store,
  vuetify,

  render: h => h(App)
}).$mount('#app')
