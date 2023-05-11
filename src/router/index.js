import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import ButtonView from '@/views/ButtonView.vue'
import HomeView from '@/views/HomeView.vue'

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomeView
   },
   
   {
      path: '/button',
      name: 'button',
      component: ButtonView,
   }
]

const router = createRouter({
   history: createWebHistory(),
   routes,
   
})


 


export default router