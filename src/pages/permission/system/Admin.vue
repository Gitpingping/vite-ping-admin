<script lang="ts">
import { defineComponent, computed, h, ref, Ref, ComputedRef } from "vue";
import { useReadonly, useReactive } from "@/hooks/vue";
import { useSelection, useRowKey } from "@/hooks/naive-ui";
import { AdminSearchForm, AdminTableItem } from "@/interface/Admin";
import { QUERYADMINTABLE } from "@/vuex/modules/system/admin";
import TableOptions from "@/components/custom/TableOptions.vue";
import SearchOptions from "@/components/custom/SearchOptions.vue";
import OptionsList from "@/components/custom/OptionsList.vue";
import { useStore, Store } from "vuex";
import { FormValidationError, NForm } from "naive-ui";
import validate from "@/utils/validate";

export default defineComponent({
  name: "AdminList",
  setup() {
    const store: Store<any> = useStore();
    // 表单实例
    const formRef = ref<InstanceType<typeof NForm>>();
    // 表单数据
    let formData: AdminSearchForm = useReactive<AdminSearchForm>({
      account: "",
      name: "",
    });
    // const rules = {
    //   account: validate.required(),
    //   name: [validate.required()],
    //   loginCode: validate.required(),
    // };
    function search() {
      formRef.value.validate((errors: Array<FormValidationError>) => {});
    }
    function reset() {
      console.log("重置");
      formRef.value.restoreValidation();
      Object.keys(formData).forEach((key: string) => (formData[key] = ""));
    }
    function add() {}
    function del() {}
    { foo: 123 }
    // 表格列
    const columns = useReadonly([
      {
        type: "selection",
        disabled(row, index) {
          return row.name === "Edward King 3";
        },
      },
      {
        title: "登录账户",
        key: "account",
        width: 120,
      },
      {
        title: "管理员名称",
        key: "name",
        width: 180,
      },
      {
        title: "密码",
        key: "password",
        width: 120,
      },
      {
        title: "操作",
        key: "options",
        width: 120,
        fixed: "right",
        align: "center",
        render: (rowData, rowIndex: number) =>
          h(TableOptions, {
            onView: queryTableData,
            onEdit: clickOnTableEdit,
            onDel: clickOnTableDel,
          }),
      },
    ]);
    // 表格数据
    queryTableData.call(store);
    // 获取数据
    function queryTableData() {
      store.dispatch(QUERYADMINTABLE);
    }
    const tableTotal: ComputedRef<number> = computed(
      () => store.state.admin.tableTotal
    );
    const pagination = useReactive({
      page: 1,
      pageSize: 10,
      showSizePicker: true,
      pageSizes: [10, 20, 50],
      itemCount: 100,
      onChange: (page: number) => {
        console.log(page);
        pagination.page = page;
      },
      onPageSizeChange: (pageSize: number) => {
        console.log(pageSize);
        pagination.pageSize = pageSize;
        pagination.page = 1;
      },
    });

    // 编辑按钮
    function clickOnTableEdit() {}
    // 删除按钮
    function clickOnTableDel() {}
    // 隐藏搜索框
    function triggerSearchForm() {
      searchFormShow.value = !searchFormShow.value;
    }
    let searchFormShow: Ref<boolean> = ref<boolean>(false);
    return {
      columns,
      tableList: computed(() => store.state.admin.tableList),
      tableTotal: computed(() => store.state.admin.tableTotal),
      search,
      reset,
      formRef,
      formData,
      add,
      del,
      triggerSearchForm,
      searchFormShow,
      pagination,
      useRowKey,
      // rules,
    };
  },
  components: {
    TableOptions,
    SearchOptions,
    OptionsList,
  },
});
</script>

<template>
  <div class="container shadow">
    <div class="search-form" v-search-form="searchFormShow">
      <n-form
        inline
        label-placement="left"
        :label-width="120"
        ref="formRef"
        :model="formData"
      >
        <n-grid cols="2 900:3 1200:4">
          <n-grid-item>
            <n-form-item label="管理员账户" path="account">
              <n-input
                type="text"
                placeholder="请输入"
                v-model:value="formData.account"
                clearable
              />
            </n-form-item>
          </n-grid-item>
          <n-grid-item>
            <n-form-item label="管理员名称" path="name">
              <n-input
                type="text"
                placeholder="请输入"
                v-model:value="formData.name"
                clearable
              />
            </n-form-item>
          </n-grid-item>
          <n-grid-item>
            <n-form-item label=" ">
              <search-options @search="search" @reset="reset"></search-options>
            </n-form-item>
          </n-grid-item>
        </n-grid>
      </n-form>
    </div>
    <options-list
      @add="add"
      @del="del"
      @triggerSearchForm="triggerSearchForm"
    />
    <n-data-table
      ref="table"
      :columns="columns"
      :row-key="(row) => row.id"
      :data="tableList"
      :scroll-x="1200"
    />
    <div class="pagin">
      <n-pagination
        :item-count="pagination.itemCount"
        :page-sizes="pagination.pageSizes"
        showSizePicker
        :on-update:page="pagination.onChange"
        :on-update:page-size="pagination.onPageSizeChange"
      />
    </div>
  </div>
</template>