<script lang="ts">
import { defineComponent } from "vue";
import { SearchOutline, SyncOutline } from "@vicons/ionicons5";
export default defineComponent({
  name: "SearchOptions",
  setup(props, { emit }) {
    function search() {
      emit("search");
    }
    function reset() {
      emit("reset");
    }
    return {
      search,
      reset,
    };
  },
  components: {
    SearchOutline,
    SyncOutline,
  },
});
</script>

<template>
  <div class="search-options">
    <n-space>
      <n-button @click="search" type="primary">
        <template #icon>
          <n-icon><SearchOutline /></n-icon>
        </template>
        搜索
      </n-button>
      <n-button @click="reset">
        <template #icon>
          <n-icon><SyncOutline /></n-icon>
        </template>
        重置
      </n-button>
    </n-space>
  </div>
</template>
<style lang="less" scoped>
</style>