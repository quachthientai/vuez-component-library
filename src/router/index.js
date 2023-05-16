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
      path:'/buttonGroup',
      name:'buttonGroup',
      component: ()=>import('@/views/ButtonGroupView.vue')
   },
   {
      path:'/switchButton',
      name:'switchButton',
      component:()=>import('@/views/SwitchButtonView.vue')
   }
]

const router = createRouter({
   history: createWebHistory(),
   routes,
   
})


 


export default router