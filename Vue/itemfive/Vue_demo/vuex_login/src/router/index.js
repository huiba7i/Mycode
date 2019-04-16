import Vue from 'vue'
import Router from 'vue-router'
import One from '@/components/One'
import Two from '@/components/Two'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import store from '@store'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',name:'HelloWorld', component: HelloWorld
    },
    {
      path: '/one',
      name: 'One',
      component: One,
      meta: {
        requireAuth: true
      }
    },
    { path: '/two', component: Two, meta: {requireAuth: true}},
    { path: '/log', component: Login}
    
  ]
})
router.beforeEach((to, from ,next)=>{
  if(to.meta.requireAuth){
    if(store.state.isLogin){ // 获得取store中的登录状态值
      next();
    }else{
      next({path: '/log'}); // 路由跳转到Login
    }
  }else{
    next();
  }
})

export default router;
