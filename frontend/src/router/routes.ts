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
        component: () => import('pages/portfolio/PortfolioPage.vue'),
        name: 'portfolio'
      },
      {
        path: '/portfolio/projects',
        component: () =>
          import('pages/portfolio/projects/ProjectsIndex.vue'),
        name: 'portfolio.projects.index'
      },
      {
        path: '/portfolio/projects/:slug/',
        component: () =>
          import('pages/portfolio/projects/ProjectShow.vue'),
        name: 'portfolio.projects.show'
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
