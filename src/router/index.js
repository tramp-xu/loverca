import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/index/Login'
import register from '@/views/index/Register'
import dashboard from '@/views/dashboard/Index'
import home from '@/views/dashboard/home/Index'
import setting from '@/views/dashboard/setting/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/dashboard',
      redirect: 'home',
      component: dashboard,
      children: [
        {
          path: 'index',
          name: 'index',
          component: home,
          meta: '主页',
          icon: `<i class='iconfont'>&#xe78b;</i>`
        },
        {
          path: 'setting',
          name: 'setting',
          component: setting,
          meta: '系统设置',
          icon: `<i class='iconfont'>&#xe78e;</i>`
        }
      ]
    }
  ]
})

// 路由全局钩子
