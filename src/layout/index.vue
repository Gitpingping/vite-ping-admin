<template>
  <!-- <a-layout style="height: 100vh">
    <a-layout-sider width="200" class="layout-sider">
      <Nav />
    </a-layout-sider>
    <a-layout>
      <Header />
      <a-layout-content
        :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
      >
        <RouterView />
      </a-layout-content>
    </a-layout>
  </a-layout> -->
  <n-layout has-sider>
      <n-layout-sider content-style="padding: 24px;height:100vh;" bordered>
        <Nav />
      </n-layout-sider>
      <n-layout>
        <n-layout-header bordered ><Header /></n-layout-header>
        <n-layout-content content-style="padding: 6px;height: calc(100vh - 65px);background-color:#f0f2f5">
                <RouterView />
        </n-layout-content>
        <!-- <n-layout-footer>成府路</n-layout-footer> -->
      </n-layout>
    </n-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { RouterView, RouterLink, useRouter } from 'vue-router';
import { useMessage } from 'naive-ui';
import Header from './Header.vue';
import Nav from './Nav.vue';

export default defineComponent({
  components: {
    RouterView, RouterLink,  Header,Nav
  },
  setup() {
    const router = useRouter();
    const clickOnSubMenuItem: (route: string) => void = function (route: string): void {
      router.push(route)
    }
    window['Message'] = useMessage();
    return {
      
    };
  },
});

</script>
<style lang="less">
:deep(.n-layout-header){
  height: 60px !important;
}

</style>