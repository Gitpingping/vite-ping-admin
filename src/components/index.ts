import { App } from 'vue';
// 注册全局组件
import TableOptions from './custom/TableOptions.vue';
export function registerTableOptions(app:App):App{
    return app.component('TableOptions',{
        ...TableOptions
    })
}