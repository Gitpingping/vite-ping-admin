const Layout = () => import('@/layout/index.vue');

// 基础表单
const BasicForm = () => import('@/pages/permission/example/form/BasicForm.vue');
import { ReceiptOutline, } from '@vicons/ionicons5';
import { InputOutlined, } from '@vicons/material';
export default {
    path: '/form',
    component: Layout,
    name: 'Form',
    redirect: '/form/basic-form',
    meta: {
        isLeaf: false,
        title: '表单',
        icon: ReceiptOutline
    },
    children: [
        {
            path: '/form/basic-form',
            component: BasicForm,
            name: 'FormBasicForm',
            meta: {
                isLeaf: false,
                title: '基础表单',
                icon: InputOutlined
            },
        }
    ]
}