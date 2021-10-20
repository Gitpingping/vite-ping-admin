<script lang="ts">
import { defineComponent, computed, h, ref, Ref, ComputedRef,reactive } from "vue";
import { useReadonly, useReactive } from "@/hooks/vue";
import { useSelection, useRowKey } from "@/hooks/naive-ui";
import { BaseListSearchForm, BaseListTableItem } from "@/interface/example/list/BaseList";
import { BaseTableResponse } from "@/interface";
import { QUERYADMINTABLE } from "@/vuex/modules/system/admin";
import TableOptions from "@/components/custom/TableOptions.vue";
import SearchOptions from "@/components/custom/SearchOptions.vue";
import OptionsList from "@/components/custom/OptionsList.vue";
import { useStore, Store } from "vuex";
import { FormValidationError, NForm,NAvatar } from "naive-ui";
import validate from "@/utils/validate";
import Mock from 'mockjs';
const { Random } = Mock;
export function initTableData():BaseTableResponse<BaseListTableItem>{
  let arrData:BaseListTableItem[] = [];
  const len:number = Random.natural(0,20);
  arrData = new Array(len).fill('').map(():BaseListTableItem => ({
    id: Random.string(5),
    name: Random.cname(),
    avatar: Random.image('100x100', Random.color(), '#FFF', 'png', Random.cfirst()),
    address: Random.city(true),
    startTime: Random.date(),
    endTime: Random.date(),
    createTime: Random.date(),
  }))
  return {
    list: arrData,
    total: len
  }
}
export default defineComponent({
  name: "BaseList",
  setup() {
    const store: Store<any> = useStore();
    // 表单实例
    const formRef = ref<InstanceType<typeof NForm>>();
    // 表单数据
    let formData: BaseListSearchForm = useReactive<BaseListSearchForm>({
      name: "",
      startTime: null,
      endTime: null,
      createTime: null,
    });
    // const rules = {
    //   account: validate.required(),
    //   name: [validate.required()],
    //   loginCode: validate.required(),
    // };
      
    function search() {
      // formRef.value.validate((errors: Array<FormValidationError>) => {});
      queryTableData()
      // a.name=Math.random()
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
      },
      {
        title: "id",
        key: "id",
        width: 80,
      },
      {
        title: "名称",
        key: "name",
        width: 80,
      },
      {
        title: "头像",
        key: "avatar",
        width: 120,
        render: (rowData:BaseListTableItem, rowIndex: number) => h(NAvatar,{
          src: rowData.avatar
        })
      },
      {
        title: "地址",
        key: "address",
        width: 160,
      },
      {
        title: "开始时间",
        key: "startTime",
        width: 180,
      },
      {
        title: "结束时间",
        key: "endTime",
        width: 180,
      },
      {
        title: "创建日期",
        key: "createTime",
        width: 180,
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
    let tableInfo:BaseTableResponse<BaseListTableItem> = useReactive({
      list: [],
      total: 0
    })
    
    const tableTotal: ComputedRef<number> = computed(
      () => store.state.admin.tableTotal
    );
    let pagination = useReactive({
      page: 1,
      pageSize: 10,
      showSizePicker: true,
      pageSizes: [10, 20, 50],
      itemCount: tableInfo.total,
      onChange: (page: number) => {
        pagination.page = page;
      },
      onPageSizeChange: (pageSize: number) => {
        console.log(pageSize);
        pagination.pageSize = pageSize;
        pagination.page = 1;
      },
    });
    queryTableData.call(store);
    // 获取数据
    function queryTableData() {
      // store.dispatch(QUERYADMINTABLE);
      const data = initTableData();
      tableInfo.list = data.list;
      tableInfo.total = data.total;
      pagination.itemCount = tableInfo.total;
    }

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
      // tableList: computed(() => store.state.admin.tableList),
      // tableTotal: computed(() => store.state.admin.tableTotal),
      tableInfo,
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
            <n-form-item label="姓名" path="name">
              <n-input
                type="text"
                placeholder="请输入"
                v-model:value="formData.name"
                clearable
              />
            </n-form-item>
          </n-grid-item>
          <n-grid-item>
            <n-form-item label="开始时间" path="startTime">
              <n-date-picker
                type="datetime"
                placeholder="请选择"
                v-model:value="formData.startTime"
                clearable
              />
            </n-form-item>
          </n-grid-item>
          <n-grid-item>
            <n-form-item label="结束时间" path="endTime">
              <n-date-picker
                type="datetime"
                placeholder="请选择"
                v-model:value="formData.endTime"
                clearable
              />
            </n-form-item>
          </n-grid-item>
          <n-grid-item>
            <n-form-item label="创建日期" path="createTime">
              <n-date-picker
                type="date"
                placeholder="请选择"
                v-model:value="formData.createTime"
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
      remote
      ref="table"
      :columns="columns"
      :row-key="(row) => row.id"
      :data="tableInfo.list"
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