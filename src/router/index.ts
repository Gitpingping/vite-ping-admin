import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import store, { ADDROUTE } from '@/vuex';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
const Layout = () => import('@/layout/index.vue');
/**
 * 
 * @returns RouteRecordRaw[]
 */
const Login = () => import('@/pages/no-permission/Login.vue');
// 1. 定义路由组件.
// 也可以从其他文件导入
const NotFound = () => import('@/pages/no-permission/Not-Found.vue');

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/board',
    name: 'Index',
    meta: {
      isLeaf: false,
    }
  },
  {
    path: '/login',
    component: Login,
    name: 'Login',
    meta: {
      title: '用户登录',
      isLeaf: false
    }
  },

]
export const notFoundRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: NotFound,
  meta: {
    title: '404',
    isLeaf: false
  }
}
// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
export const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
// GOOD
router.beforeEach((to, from) => {
  NProgress.start();
  const jwtoken: string | null = localStorage.getItem('jwtoken');
  if (routes.some((route: RouteRecordRaw) => route.path === to.path) && to.name !== 'NotFound') {
    return true
  } else {
    if (!jwtoken) {
      return '/login'
    } else {
      if (!store.state.isRouteExist) {
        store.commit(ADDROUTE)
        router.replace(to.path)
      } else {
        return true

      }
      // router.addRoute(permissionRoute)
      // if(!router.hasRoute(to.name as string)){
      //   permissionRoute.forEach((route: RouteRecordRaw) => {
      //     router.addRoute(route)
      //   })
      //   router.addRoute(notFoundRoute);
      //   router.replace(to.path)
      // }
      // return true
    }
  }
})
router.afterEach(() => {
  NProgress.done();
})
// 5. 创建并挂载根实例
//确保 _use_ 路由实例使
//整个应用支持路由。
export default router