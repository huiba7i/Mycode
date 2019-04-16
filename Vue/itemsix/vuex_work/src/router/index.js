import Vue from 'vue'
import Router from 'vue-router'
import Work from '@/components/work'
import Success from '@/components/success' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Work',
      component: Work
    },{
      path:'/success',
      name:'Success',
      component:Success
    }
  ]
})
