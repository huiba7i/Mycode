import Vue from 'vue'
import Router from 'vue-router'
import UserList from '@/components/UserList.vue'
import UserInfo from '@/components/UserInfo.vue'

Vue.use(Router)

export default new Router({
  /* routes: [
    {
      path: '/',
      component: UserList
    },
    {
      path: '/userInfo/:id',
      component: UserInfo
    }
  ] */

  // 路由嵌套
  routes: [
    {
      path: '/',
      component: UserList,
      // 添加子路由
      children: [
        {path: '/userInfo/:id', component: UserInfo}
      ]
    }
  ]
})
