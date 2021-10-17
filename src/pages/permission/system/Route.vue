<script lang="ts">
import { defineComponent, ref, reactive, h } from "vue";
import { RouteRecordRaw } from "vue-router";
import { useReactive } from "../../../hooks/vue";
import { permissionRoute } from "../../../router/permission";
import { NIcon } from "naive-ui";
export default defineComponent({
  setup() {
    const searchForm = useReactive({});
    const data = formatRoutes(permissionRoute);
    return {
      data,
      renderPrefix,
    };
  },
  components: {},
});

function formatRoutes(routes: RouteRecordRaw[]) {
  return routes.map((route: RouteRecordRaw) =>
    (function () {
      const normalObj = {
        key: route.name,
        label: route.meta.title,
        icon: route.meta.icon,
      };
      if (route.children) {
        return {
          ...normalObj,
          children: formatRoutes(route.children),
        };
      } else {
        return normalObj;
      }
    })()
  );
}
function renderPrefix({ option }) {
  return h(NIcon, {}, () => h(option.icon));
}
</script>

<template>
  <n-tree
    block-line
    :data="data"
    :render-prefix="renderPrefix"
    cascade
    checkable
    selectable
  />
</template>