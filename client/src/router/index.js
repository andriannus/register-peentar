import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
	mode: 'history',
	// base: '/register-peentar/',
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register,
      meta: {
      	title: 'Register | PT Harmonix Teknologi Peentar'
      }
    }
  ]
})
