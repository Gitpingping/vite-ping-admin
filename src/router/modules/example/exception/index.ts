const Layout = () => import('@/layout/index.vue');

// 404
const NotFound = () => import('@/pages/no-permission/Not-Found.vue');
// 403
const NoPermission = () => import('@/pages/no-permission/No-Permission.vue');
// 500
const Error = () => import('@/pages/no-permission/Error.vue');
import { AlertCircleOutline,RemoveCircleOutline,CloseCircleOutline,TriangleOutline } from '@vicons/ionicons5';
export default {
    path: '/exception',
    component: Layout,
    name: 'Exception',
    redirect: '/exception/404',
    meta: {
        isLeaf: false,
        title: '异常页面',
        icon: AlertCircleOutline
    },
    children: [
        {
            path: '/exception/404',
            component: NotFound,
            name: 'ExceptionNotFound',
            meta: {
                isLeaf: false,
                title: '404',
                icon: TriangleOutline
            },
        },{
            path: '/exception/403',
            component: NoPermission,
            name: 'ExceptionNoPermission',
            meta: {
                isLeaf: false,
                title: '403',
                icon: RemoveCircleOutline
            },
        },{
            path: '/exception/500',
            component: Error,
            name: 'ExceptionError',
            meta: {
                isLeaf: false,
                title: '500',
                icon: CloseCircleOutline
            },
        },
        
    ]
}