import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

const routes = [
   {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue')
   },
   {
      path: '/badge',
      name: 'badge',
      component: () => import('@/views/BadgeView.vue')
   },
   {
      path: '/button',
      name: 'button',
      component: () => import('@/views/ButtonView.vue')
   },
   {
      path: '/dropdown',
      name: 'dropdown',
      component: () => import('@/views/DropDownView.vue')
   },
   {
      path: '/button-group',
      name: 'button-group',
      component: () => import('@/views/ButtonGroupView.vue')
   }
]

const router = createRouter({
   history: createWebHistory(),
   routes,
   
})


 


export default router