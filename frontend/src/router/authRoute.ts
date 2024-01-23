import { RouteRecordRaw } from 'vue-router'

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/auth/login',
    component: () => import('pages/auth/LoginPage.vue'),
    name: 'login',
    meta: { noAuthOnly: true }
  },
  {
    path: '/auth/register',
    component: () => import('pages/auth/RegisterPage.vue'),
    name: 'register',
    meta: { noAuthOnly: true }
  },
  {
    path: '/auth/email-confirmed',
    component: () => import('pages/auth/EmailConfirmed.vue'),
    name: 'email-confirmed'
  },
  {
    path: '/auth/forgot-password',
    component: () => import('pages/auth/ForgotPassword.vue'),
    name: 'forgot-password',
    meta: { noAuthOnly: true }
  },
  {
    path: '/auth/reset-password',
    component: () => import('pages/auth/ResetPassword.vue'),
    name: 'reset-password',
    meta: { noAuthOnly: true }
  }
]
