import { createApp,App } from 'vue';
import AppVue from '@/App.vue';
import router from '@/router';
import '@/styles/reset.less';
import '@/styles/common.less';
let app: App = createApp(AppVue);
import { naive } from '@/components/naive-ui';
app.use(naive)
import { registerTableOptions } from '@/components';
app = registerTableOptions(app);
import store from './vuex';
app.use(router).use(store).mount('#app')
app.directive('search-form',{
    updated(el, binding) {
        el.style.marginTop = binding.value?-el.clientHeight+'px':0;
        el.style.opacity = !binding.value?1:0;
    }
})