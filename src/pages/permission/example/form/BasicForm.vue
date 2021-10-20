<script lang="ts">
import { defineComponent, ref } from "vue";
import { useReactive } from "@/hooks/vue";
import validate from "@/utils/validate";

export function validateForm() {
  return {
    input: validate.required(),
    autocomplete: [
      validate.required(),
      validate.length(6, 16, "blur"),
      validate.length(6, 16, "input"),
    ],
    color: validate.required(),
    checkbox: validate.checkbox(),
    datepicker: [validate.date()],
  };
}
export interface FormModel {
  input: string;
  autocomplete: string;
  color: string;
  checkbox: string[] | number[];
  datepicker: string | number;
}
export default defineComponent({
  name: "BasicForm",
  setup() {
    let formModel: FormModel = useReactive<FormModel>({
      input: "输入了一些字符",
      autocomplete: "自动填充了一些",
      color: "#37baa0",
      checkbox: ["Beijing"],
      datepicker: new Date().getTime(),
    });
    const validateRules = useReactive(validateForm());
    const formRef = ref();
    function submitForm() {
      formRef.value.validate((errors: Error) => {
        if (!errors) {
          return;
        }
        console.log(formModel);
      });
    }
    return {
      formModel,
      validateRules,
      submitForm,
      formRef,
    };
  },
  components: {},
});
</script>

<template>
  <n-card title="基础表单">
    <p>表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。表单域标签也可支持响应式。</p>
    <p class="warning-msg">表单验证复选框和日期选择框安装官方文档存在问题，已自定义验证，待修复。</p>
  </n-card>
  <n-card class="mt-12">
    <n-grid cols="1 800:3">
      <n-gi> </n-gi>
      <n-gi>
        <n-form
          ref="formRef"
          :label-width="80"
          label-placement="left"
          :model="formModel"
          :rules="validateRules"
        >
          <n-form-item path="input" label="输入框">
            <n-input
              clearable
              @keydown.enter.prevent
              placeholder="试试输入框"
              v-model:value="formModel.input"
            />
          </n-form-item>
          <n-form-item path="autocomplete" label="自动填充" :first="true">
            <n-auto-complete
              clearable
              v-model:value="formModel.autocomplete"
              @keydown.enter.prevent
              placeholder="试试自动填充"
            />
          </n-form-item>
          <n-form-item path="color" label="颜色选择">
            <n-color-picker
              clearable
              @keydown.enter.prevent
              placeholder="试试颜色选择"
              v-model:value="formModel.color"
            />
          </n-form-item>
          <n-form-item path="checkbox" label="复选框">
            <n-checkbox-group clearable v-model:value="formModel.checkbox">
              <n-space item-style="display: flex;">
                <n-checkbox value="Beijing" label="北京" />
                <n-checkbox value="Shanghai" label="上海" />
                <n-checkbox value="Guangzhou" label="广州" />
                <n-checkbox value="Shenzen" label="深圳" />
              </n-space>
            </n-checkbox-group>
          </n-form-item>
          <n-form-item path="datepicker" label="日期选择" :first="true">
            <n-date-picker
              type="date"
              clearable
              placeholder="试试日期选择"
              v-model:value="formModel.datepicker"
            />
          </n-form-item>
          <n-form-item label=" ">
            <n-space>
              <n-button type="primary" @click="submitForm"> 立即提交 </n-button>

              <n-button> 重置 </n-button>
            </n-space>
          </n-form-item>
        </n-form>
      </n-gi>
      <n-gi> </n-gi>
    </n-grid>
  </n-card>
</template>