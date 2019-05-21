import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/register'
import Login from '@/components/login'
import Userlist from '@/components/userlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path:'/reg',
      component: Register
    },
    {
      path:'/userlist',
      component:Userlist
    }
  ]
})
