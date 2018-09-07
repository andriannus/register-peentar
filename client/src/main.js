import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'
import App from './App'
import router from './router'

Vue.use(Vuetify)
Vue.use(Vuelidate)

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	document.title = to.meta.title
	next()
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
