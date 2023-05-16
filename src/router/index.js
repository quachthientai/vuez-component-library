import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import ButtonView from '@/views/ButtonView.vue'
import HomeView from '@/views/HomeView.vue'

const routes = [
   {
      path: '/',
      name: 'home',
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
   }
]

const router = createRouter({
   history: createWebHistory(),
   routes,
   
})


 


export default router