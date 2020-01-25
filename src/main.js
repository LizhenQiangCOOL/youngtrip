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

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
