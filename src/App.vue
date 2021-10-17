<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { RouterView } from 'vue-router';
import { NConfigProvider,NDialogProvider,NMessageProvider,zhCN, dateZhCN } from 'naive-ui';

export default defineComponent({
  components: {
    RouterView, NConfigProvider,NDialogProvider,NMessageProvider
  },
  setup() {
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    const themeOverrides = reactive({
      common: {
        primaryColor: '#37baa0',
        primaryColorHover: '#37baa8d4',
        primaryColorPressed: '#37baa0',
        errorColor: '#F56C6C',
        errorColorHover: '#F56C68d4',
        errorColorPressed: '#F56C6C',
      },
    })
    return {
      themeOverrides,zhCN, dateZhCN
    };
  },
});
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides" :locale="zhCN" :date-locale="dateZhCN">
    <n-dialog-provider>
      <n-message-provider>
        <RouterView />
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
