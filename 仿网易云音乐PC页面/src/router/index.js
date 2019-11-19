import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Details from '@/components/SongOrderDetails'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    }
  ]
})
