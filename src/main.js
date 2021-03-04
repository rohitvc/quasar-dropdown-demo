import Vue from 'vue'
import App from './App.vue'
import './quasar'

Vue.config.productionTip = false

Vue.config.ignoredElements = ['quasar-dropdown-wc']

new Vue({
  render: h => h(App)
}).$mount('#app')
