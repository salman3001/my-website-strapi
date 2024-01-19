import { RouteRecordRaw } from 'vue-router'
import { authRoutes } from './authRoute'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        component: () => import('pages/IndexPage.vue'),
        name: 'home'
      },
      {
        path: '/portfolio',
        component: () => import('pages/PortfolioPage.vue'),
        name: 'portfolio'
      }
    ]
  },
  ...authRoutes,

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
