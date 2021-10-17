<script lang="ts">
import { defineComponent, defineEmits,SetupContext, } from "vue";
import {EyeOutline,CreateOutline,TrashOutline} from '@vicons/ionicons5';
export default defineComponent({
  name: "TableOptions",
  setup(props,{emit}) {
      function view(){
          emit('view')
      }
      function edit(){
          emit('edit')
      }
      function del(){
          emit('del')
      }
    return {
        view,edit,del
    };
  },
  components: {
      EyeOutline,CreateOutline,TrashOutline
  },
});
</script>

<template>
  <div class="table-options">
    <n-button-group>
      <n-button round :bordered="false" @click="view">
        <template #icon>
          <n-icon><EyeOutline  /></n-icon>
        </template>
      </n-button>
      <n-button round :bordered="false"  @click="edit">
        <template #icon>
          <n-icon><CreateOutline /></n-icon>
        </template>
      </n-button>
      <n-button round :bordered="false" @click="del">
        <template #icon>
          <n-icon><TrashOutline /></n-icon>
        </template>
      </n-button>
    </n-button-group>
  </div>
</template>
<style lang="less" scoped>

</style>