import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'

Vue.use(Vant)

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.$bus = new Vue()
axios.defaults.baseURL = 'http://novel.kele8.cn'

Vue.filter('setLatelyFollower', LatelyFollower => {
  return LatelyFollower < 10000 ? LatelyFollower : (LatelyFollower / 10000).toFixed(1) + ' 万'
})
Vue.filter('setUpdated', updated => {
  return updated ='' ? updated.substring(0, 9) : updated.substring(0, 9)
})
Vue.use(axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
