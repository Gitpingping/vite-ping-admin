<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "DepartmentList",
  setup() {
    return {
      options1: [
        {
          label: 'David Tao',
          key: 1
        },
        {
          label: '黑色柳丁',
          key: 2
        }
      ],
      options2: [
        {
          label: '小镇姑娘',
          key: 1
        },
        {
          label: '普通朋友',
          key: 2
        }
      ]
    };
  },
  components: {},
});
</script>

<template>
  <div class="fl bread-crumb flex align-center">
    <n-breadcrumb>
      <n-breadcrumb-item>
        <n-dropdown :options="options1">I'm ok</n-dropdown>
      </n-breadcrumb-item>
      <n-breadcrumb-item>
        <n-dropdown :options="options2">I'm ok</n-dropdown>
      </n-breadcrumb-item>
    </n-breadcrumb>
  </div>
</template>

<style lang="less" scoped>
.bread-crumb {
  height: 64px;
  padding-left: 24px;
}
</style>