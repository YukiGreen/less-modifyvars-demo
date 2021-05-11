import Vue from 'vue'
import App from './App.vue'
import router from './router'
import btn from 'our-btn' // 引入包

Vue.use(btn)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
