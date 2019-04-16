import Vue from 'vue'
import Router from 'vue-router'
import Prictise from '@/components/Prictise'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Prictise',
      component: Prictise
    }
  ]
})
