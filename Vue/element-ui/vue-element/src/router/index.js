import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Login from '@/components/Login'
import Registe from '@/components/Registe'
import DisplayStudent from '@/components/DisplayStudent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    { path: '/log', component: Login},
    { path: '/reg', component: Registe},
    { path: '/stuList', component: DisplayStudent}
  ]
})
