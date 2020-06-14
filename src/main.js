import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import './assets/sass/global.sass'
import './assets/fonts/segment/Segment7.css'
import './assets/fonts/astra/PT Astra Sans.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
