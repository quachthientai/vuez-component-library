import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
   {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
   },
   {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue')
   },
   {
      path: '/button',
      name: 'button',
      component: () => import('@/views/ButtonView.vue')
   }
]

const router = createRouter({
   history: createWebHashHistory(),
   routes: routes,
   
})


export default router