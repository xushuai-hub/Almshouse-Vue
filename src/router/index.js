import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AlmsHouse',
      meta: {requiresAuth: false},
      component: () => import("../components/HelloWorld")
    },
    {
      path: '/login',
      name: 'login',
      meta: {requiresAuth: false},
      component: () => import("../components/login")
    },
    {
      path: '/register',
      name: 'register',
      meta: {requiresAuth: false},
      component: () => import("../components/register")
    },
    {
      path: '/MainPage',
      name: 'MainPage',
      meta: {requiresAuth: true},
      component: () => import("../components/MainPage"),
      children: [
        {
          path: '/MainPage/Camera',
          name: 'Camera',
          meta: {requiresAuth: false},
          component: () => import("../components/Camera")
        },
        {
          path: '/MainPage/Settings',
          name: 'Settings',
          meta: {requiresAuth: false},
          component: () => import("../components/Settings")
        },
        {
          path: '/MainPage/ChangeMessage',
          name: 'ChangeMessage',
          meta: {requiresAuth: false},
          component: () => import("../components/ChangeMessage")
        }
      ]
    },
  ]
})
