const Layout = () => import('@/layout/index.vue');

// 基础列表
const BaseList = () => import('@/pages/permission/example/list/BaseList.vue');
import { ListCircleOutline,List } from '@vicons/ionicons5';
export default {
    path: '/list',
    component: Layout,
    name: 'List',
    redirect: '/list/baselist',
    meta: {
        isLeaf: false,
        title: '列表',
        icon: ListCircleOutline
    },
    children: [
        {
            path: '/list/baselist',
            component: BaseList,
            name: 'ListBaseList',
            meta: {
                isLeaf: false,
                title: '基础列表',
                icon: List
            },
        },
        
    ]
}