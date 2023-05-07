import { createRouter, createWebHashHistory } from 'vue-router';
import ButtonView from '../views/ButtonView.vue'

const router = createRouter({
   history: createWebHashHistory(),
   routes: [
      {
         path: '/',
         name: 'button',
         component: ButtonView
      }
   ],
})

export default router