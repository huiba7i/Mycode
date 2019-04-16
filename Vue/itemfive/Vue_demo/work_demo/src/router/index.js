import Vue from 'vue'
import Router from 'vue-router'
import userList from '@/components/userList'
import userInfo from '@/components/userInfo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:userList
    },
    {
      path:'/userInfo/:id',
      component:userInfo
    }
  ]
})
