import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../pages/HomePage.vue'), // lazy loaded
    },
    {
      path: '/post/:id',
      component: () => import('../pages/DetailPage.vue'), // lazy loaded
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../pages/NotFound.vue'), // lazy loaded
    },
  ],
})

export default router
