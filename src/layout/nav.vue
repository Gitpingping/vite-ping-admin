<script lang="ts">
import {
  defineComponent,
  onMounted,
  onBeforeMount,
  reactive,
  ref,
  Ref,
  h,
  Component,
} from "vue";
import { permissionRoute } from "../router/permission";
import { NIcon } from "naive-ui";
import {
  useRoute,
  RouteRecordRaw,
  useRouter,
  RouterLink,
  RouteRecordName,
  RouteLocationNormalized,
} from "vue-router";
import logoImg from "../images/logo.png";


function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
export default defineComponent({
  components: {
    RouterLink,
  },
  setup() {
    onBeforeMount(function () {
      // console.log('nav onBeforeMount');
      // permissionRoute.forEach((route: RouteRecordRaw) => {
      //   router.addRoute(route);
      // });
      // console.log(router.getRoutes());
    });
    const route = useRoute();
    const router = useRouter();
    const currentMenu: Ref<null | string | undefined | RouteRecordName> =
      ref(null);
    router.afterEach((to: RouteLocationNormalized) => {
      currentMenu.value = to.name;
    });
    const menuOptions = usePermissionRoutes(permissionRoute);

    const { defaultValue } = init(route.name);
    return {
      logoImg,
      menuOptions,
      defaultValue,
    };
  },
});
// 递归路由
export function usePermissionRoutes(routes: RouteRecordRaw[]): any {
  return routes.map((route: RouteRecordRaw) => {
    const [key, icon] = [route.name, renderIcon(route.meta.icon)];
    const menuItem = {
      label: () =>
        h(
          RouterLink,
          {
            to: {
              name: route.name,
              params: {},
            },
          },
          { default: () => route.meta?.title }
        ),
    };
    const subMenu = {
      label: () =>
        h(
          "span",
          {
            to: {
              name: route.name,
              params: {},
            },
          },
          { default: () => route.meta?.title }
        ),
    };
    return reactive({
      ...(route.children
        ? {
            ...subMenu,
            children: usePermissionRoutes(route.children),
            key,
            icon,
          }
        : menuItem),
      key,
      icon,
    });
  });
}
// 初始化导航
export function init(routeName: RouteRecordName | null | undefined) {
  const defaultValue = ref(routeName);
  return {
    defaultValue,
  };
}
</script>
<template>
  <div class="logo">
    <img :src="logoImg" alt="logo" class="logo" />
  </div>
  <n-menu :options="menuOptions" :default-value="defaultValue" />
</template>
<style lang="less" scoped>
.logo {
  text-align: center;
  margin: 28px 0;
  img {
    height: 42px;
  }
}
:deep(.ant-menu-inline) {
  border-right: none !important;
}
</style>