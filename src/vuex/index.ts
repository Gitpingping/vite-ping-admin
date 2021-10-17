import { createStore } from 'vuex'
import { auth } from './modules/auth';
import { admin } from './modules/system/admin';
import { permissionRoute } from "@/router/permission";
import { router,notFoundRoute } from "@/router";
import { RouteRecordRaw } from "vue-router";
import { MessageApi } from "naive-ui";

export interface RootState {
    isRouteExist: boolean,
}
export const ADDROUTE = 'ADDROUTE';
// 创建一个新的 store 实例
export default createStore({
    state() {
        return {
            // 动态路由是否添加
            isRouteExist: false,
            // Message
        }
    },
    mutations: {
        [ADDROUTE](state:RootState) {
            permissionRoute.forEach((route: RouteRecordRaw) => {
              router.addRoute(route);
            });
            router.addRoute(notFoundRoute);
            state.isRouteExist = true;
        },
        
    },
    actions: {

    },
    modules: {
        auth,admin
    }
})

