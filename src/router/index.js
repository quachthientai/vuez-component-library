import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

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
    path: '/switch',
    name: 'switch',
    component: () => import('@/views/SwitchView.vue')
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: () => import('@/views/CheckboxView.vue')
  },
  {
    path: '/button-group',
    name: 'button-group',
    component: () => import('@/views/ButtonGroupView.vue')
  },
  {
    path: '/radio',
    name: 'radio',
    component: () => import('@/views/RadioView.vue')
  },
  {
    path: '/toast',
    name: 'toast',
    component: () => import('@/views/ToastView.vue')
  },
  {
    path: '/card',
    name: 'card',
    component: () => import('@/views/CardView.vue')
  },
  {
    path: '/drag-and-drop',
    name: 'drag-and-drop',
    component: () => import('@/views/DragDropView.vue')
  },
  {
    path: '/buttontest',
    name: 'buttontest',
    component: () => import('@/views/ButtonTestView.vue')
  },
  {
    path: '/badgetest',
    name: 'badgetest',
    component: () => import('@/views/BadgeTestView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
