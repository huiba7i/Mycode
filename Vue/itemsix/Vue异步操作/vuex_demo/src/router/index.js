import Vue from 'vue'
import Router from 'vue-router'
import One from '@/components/One'
import Two from '@/components/Two'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/one',
      name: 'One',
      component: One
    },
    { path: '/two', component: Two}
  ]
})
