import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      redirect: '/log' // 重定向到另外一个路由路径
    },
    { path: '/log', component: Login},
    // 添加路由验证的元信息
    { path: '/home', component: Home, meta: {requireAuth: true}}
  ]
})

/*
到达目标路由之前调用beforeEach()这个钩子函数
to - 即将要访问的目标路由
from - 要离开的路由
next - 
*/
router.beforeEach((to, from, next)=>{
  // console.log(to);
  // console.log(from);
  if(to.meta.requireAuth){ // 要求已登录才能访问
    // 验证登录登录
    let userValue = localStorage.getItem('user');
    if(userValue){
      next();
    }else{
      next({path: '/log'})  //重定向到登陆的路由
    }
  }else{ // 不需要登录就能访问
    next(); // 正常通过
  }

})
export default router;