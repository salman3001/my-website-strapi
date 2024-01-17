import { route } from 'quasar/wrappers'
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router'

import routes from './routes'
import { AuthApi } from 'src/utils/api/AuthApi'
import { Cookies } from 'quasar'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (
  /* { store, ssrContext } */ { store, ssrContext }
) {
  const cookies = process.env.SERVER ? Cookies.parseSSR(ssrContext) : Cookies

  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  Router.beforeEach(async (to, from) => {
    const token = cookies.get('token')
    if (to.meta?.authOnly) {
      if (!token) {
        return { name: 'login' }
      }
      const { data } = await AuthApi.varifyMyAuth({
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (data.value) {
        return true
      } else {
        cookies.remove('user', {
          path: '/'
        })

        cookies.remove('token', {
          path: '/'
        })

        return { name: 'login' }
      }
    }

    if (to.meta?.noAuthOnly) {
      const user = cookies.get('user')
      console.log(user)

      if (user) {
        return { name: 'dashboard' }
      } else {
        return true
      }
    }

    return true
  })

  return Router
})
