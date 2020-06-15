import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import './assets/sass/global.sass' //Global styles
import 'vue-material-design-icons/styles.css' // MD Icons

// Fonts
import './assets/fonts/segment/Segment7.css'
import './assets/fonts/astra/PT Astra Sans.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
