import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Home from '@/views/home.vue'
import About from '@/views/about.vue'
import Todo from '@/views/todo/todo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/todo',
    name: 'todo',
    component: Todo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
