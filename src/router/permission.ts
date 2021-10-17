import { RouteRecordRaw } from 'vue-router';
import {
    ManageAccountsOutlined,
  } from '@vicons/material';
import {
    Dashboard,
    DeviceDesktopAnalytics,
    Route as IconRoute,
    User as IconUser
} from '@vicons/tabler';
import {
    PeopleOutline
} from '@vicons/ionicons5'
const Layout = () => import('@/layout/index.vue');
// 管理员
const Admin = () => import('@/pages/permission/system/Admin.vue');
// 用户管理
const User = () => import('@/pages/permission/system/User.vue');
// 部门管理
const Department = () => import('@/pages/permission/system/Department.vue');
// 路由管理
const Route = () => import('@/pages/permission/system/Route.vue');
// const modules = import.meta.glob('../pages/permission/*/*.vue')
// console.log('modules',modules);
export const permissionRoute: RouteRecordRaw[] = [
    
    {
        path: '/dashboard',
        component: Layout,
        name: 'Dashboard',
        meta: {
            isLeaf: false,
            title: '看板',
            icon: Dashboard
        }
    },
    {
        path: '/system',
        component: Layout,
        redirect: '/system/admin',
        name: 'System',
        meta: {
            title: '系统管理',
            isLeaf: false,
            icon: DeviceDesktopAnalytics
        },
        children: [
            {
                path: '/system/admin',
                component: Admin,
                name: 'SystemAdmin',
                meta: {
                    title: '系统管理员',
                    isLeaf: true,
                    icon: ManageAccountsOutlined
                },
            },
            {
                path: '/system/user',
                component: User,
                name: 'SystemUser',
                meta: {
                    title: '用户管理',
                    isLeaf: true,
                    icon: IconUser
                },
            },
            {
                path: '/system/department',
                component: Department,
                name: 'SystemDepartment',
                meta: {
                    title: '部门管理',
                    isLeaf: true,
                    icon: PeopleOutline
                },
            },
            {
                path: '/system/route',
                component: Route,
                name: 'SystemRoute',
                meta: {
                    title: '路由管理',
                    isLeaf: true,
                    icon: IconRoute
                },
            },
        ]
    },
]