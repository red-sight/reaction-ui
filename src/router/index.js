import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from "../views/Home.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('@/layouts/LayoutDefault.vue'),
    children: [
      {
        path: '',
        name: 'Главная',
        component: () => import('@/views/PageHome.vue')
      }
    ]
  },

  {
    path: '/game',
    name: 'Game',
    component: () => import('@/views/PageGame.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
