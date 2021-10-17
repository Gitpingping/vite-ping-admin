
<script lang="ts">
import { defineComponent } from "vue";
import {
  AddOutline,
  TrashOutline,
  RefreshOutline,
  SearchOutline,
} from "@vicons/ionicons5";
export default defineComponent({
  name: "OptionsList",
  setup(props, { emit }) {
    function add() {
      emit("add");
    }
    function del() {
      emit("del");
    }
    function refresh() {
      emit("refresh");
    }
    function triggerSearchForm() {
      emit("triggerSearchForm");
    }
    return {
      add,
      del,
      refresh,
      triggerSearchForm,
    };
  },
  components: {
    AddOutline,
    TrashOutline,
    RefreshOutline,
    SearchOutline,
  },
});
</script>

<template>
  <div class="options-list">
    <n-space justify="space-between">
      <n-space>
        <n-button @click="add" type="primary">
          <template #icon>
            <n-icon><AddOutline /></n-icon>
          </template>
          新增
        </n-button>
        <n-button @click="del" type="error" ghost>
          <template #icon>
            <n-icon><TrashOutline /></n-icon>
          </template>
          删除
        </n-button>
        <slot></slot>
      </n-space>
      <n-space class="options-right">
        <n-button @click="refresh" circle>
          <template #icon>
            <n-icon><RefreshOutline /></n-icon>
          </template>
        </n-button>
        <n-button @click="triggerSearchForm" circle>
          <template #icon>
            <n-icon><SearchOutline /></n-icon>
          </template>
        </n-button>
      </n-space>
    </n-space>
  </div>
</template>
<style lang="less" scoped>
.options-list {
  margin: 12px 0;
  .options-right {
    float: right;
  }
}
</style>