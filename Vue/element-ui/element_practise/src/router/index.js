import Vue from 'vue'
import Router from 'vue-router'
import Prictise from '@/components/Prictise'
import Carousel from '@/components/Carousel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Prictise',
      component: Prictise
    },
    {
      path:'/Car',
      component:Carousel,
    }
  ]
})
