import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    props: false
  }, {
    path: '/:section',
    name: 'section',
    component: Home,
    props: true
  }, {
    path: '/:section/:id',
    name: 'post',
    component: Post,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.NODE_ENV === 'production' && process.env.DIST_PUBLIC_PATH ? `/${process.env.DIST_PUBLIC_PATH}/` : '/'),
  routes
})

export default router
