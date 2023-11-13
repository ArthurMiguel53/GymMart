import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home/Home.vue'),
    },
    {
      path: '/redefine-password-page',
      name: 'redefine-password-page',
      component: () => import('@/views/RedefinePassword/RedefinePasswordPage.vue'),
    },
  ]
})

export default router