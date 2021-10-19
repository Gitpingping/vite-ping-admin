<script lang="ts">
import { Component, defineComponent, markRaw } from "vue";
import CountTo from "@/components/custom/CountTo.vue";
import { CaretDown, CaretUp } from "@vicons/ionicons5";
import { LineSmooth, Bar } from "@/components/echarts";
import {
  Users,
  ChartBar,
  ShoppingCart,
  ClipboardList,
  Mail,
  Ticket,
  Tag,
  Settings,
} from "@vicons/tabler";
import { useReactive } from "@/hooks/vue";
export interface IconItem {
  icon: Component;
  title: string;
  color: string;
}
export default defineComponent({
  name: "Dashboard",
  setup() {
    const iconsList = useReactive<IconItem[]>([
      {
        icon: markRaw(Users),
        title: "用户",
        color: "#69c0ff",
      },
      {
        icon: markRaw(ChartBar),
        title: "分析",
        color: "#69c0ff",
      },
      {
        icon: markRaw(ShoppingCart),
        title: "商品",
        color: "#ff9c6e",
      },
      {
        icon: markRaw(ClipboardList),
        title: "订单",
        color: "#b37feb",
      },
      {
        icon: markRaw(Ticket),
        title: "票据",
        color: "#ffd666",
      },
      {
        icon: markRaw(Mail),
        title: "消息",
        color: "#5cdbd3",
      },
      {
        icon: markRaw(Tag),
        title: "标签",
        color: "#ff85c0",
      },
      {
        icon: markRaw(Settings),
        title: "配置",
        color: "#ffd666",
      },
    ]);

    function handleTabsChange(value: string | number) {
      console.log(value);
    }
    return {
      CaretDown,
      CaretUp,
      CountTo,
      iconsList,
      LineSmooth,
      Bar,
      handleTabsChange,
    };
  },
  components: {
    CountTo,
    CaretDown,
    CaretUp,
    Users,
    ShoppingCart,
    ChartBar,
    ClipboardList,
    Mail,
    Ticket,
    Tag,
    Settings,
    LineSmooth,
  },
});
</script>

<template>
  <n-grid cols="800:2 1200:4 1920:6" :x-gap="12" :y-gap="12">
    <n-grid-item>
      <n-card title="访问量" hoverable>
        <template #header-extra><n-tag type="primary">日</n-tag></template>
        <span class="count">
          <count-to :startVal="1" :endVal="33415" class="text-3xl" />
        </span>
        <template #footer
          >日同比<count-to :startVal="1" :endVal="96" class="text-3xl" />%
          <n-icon size="12" color="#ffde66">
            <component :is="CaretDown" />
          </n-icon>
        </template>
        <template #action>
          <div class="flex justify-between">
            <span>总访问量：</span>
            <count-to :startVal="1" :endVal="960326" class="text-3xl" />
          </div>
        </template>
      </n-card>
    </n-grid-item>
    <n-grid-item>
      <n-card title="销售额" hoverable>
        <template #header-extra><n-tag type="info">月</n-tag></template>
        <span class="count">
          <count-to :startVal="1" :endVal="81348" class="text-3xl" />
        </span>
        <template #footer>
          <n-progress
            color="#37baa0"
            type="line"
            :percentage="50"
            :height="24"
          />
        </template>
        <template #action>
          <div class="flex justify-between">
            <span>总销售额：</span>
            <span
              >￥<count-to :startVal="1" :endVal="358965" class="text-3xl"
            /></span>
          </div>
        </template>
      </n-card>
    </n-grid-item>
    <n-grid-item>
      <n-card title="订单量" hoverable>
        <template #header-extra><n-tag type="warning">周</n-tag></template>
        <span class="count">
          <count-to :startVal="1" :endVal="88114" class="text-3xl" />
        </span>
        <template #footer>
          <div class="flex justify-between">
            <span
              >日同比<count-to
                :startVal="1"
                :endVal="94"
                class="text-3xl" />%<n-icon size="12" color="#37baa0">
                <component :is="CaretUp" /> </n-icon
            ></span>
            <span
              >周同比<count-to
                :startVal="1"
                :endVal="94"
                class="text-3xl" />%<n-icon size="12" color="#37baa0">
                <component :is="CaretUp" /> </n-icon
            ></span>
          </div>
        </template>
        <template #action>
          <div class="flex justify-between">
            <span>转化率：</span>
            <span
              ><count-to
                :startVal="1"
                :endVal="96.2587"
                class="text-3xl"
              />%</span
            >
          </div>
        </template>
      </n-card>
    </n-grid-item>
    <n-grid-item>
      <n-card title="成交额" hoverable>
        <template #header-extra><n-tag type="error">月</n-tag></template>
        <span class="count">
          <count-to :startVal="1" :endVal="368545" class="text-3xl" />
        </span>
        <template #footer>
          <div class="flex justify-between">
            <span
              >日同比<count-to
                :startVal="1"
                :endVal="94"
                class="text-3xl" />%<n-icon size="12" color="#37baa0">
                <component :is="CaretUp" /> </n-icon
            ></span>
            <span
              >周同比<count-to
                :startVal="1"
                :endVal="94"
                class="text-3xl" />%<n-icon size="12" color="#37baa0">
                <component :is="CaretUp" /> </n-icon
            ></span>
          </div>
        </template>
        <template #action>
          <div class="flex justify-between">
            <span>转化率：</span>
            <span
              ><count-to
                :startVal="1"
                :endVal="96.2587"
                class="text-3xl"
              />%</span
            >
          </div>
        </template>
      </n-card>
    </n-grid-item>
  </n-grid>
  <div class="mt-12">
    <n-grid cols="800:4 1200:8 1920:12" :x-gap="12" :y-gap="12">
      <n-grid-item v-for="(icon, index) in iconsList" :key="index">
        <n-card content-style="padding-top: 0;">
          <template #footer>
            <div class="flex justify-center direction-column align-center">
              <n-icon :size="28" :color="icon.color">
                <component :is="icon.icon"></component>
              </n-icon>
              <span>{{ icon.title }}</span>
            </div>
          </template>
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
  <div class="mt-12 bg-white" style="padding: 20px">
    <n-tabs type="line" :on-update:value="handleTabsChange">
      <n-tab-pane name="1" tab="销售额">
        <component :is="LineSmooth" tag="div" class="charts"
      /></n-tab-pane>
      <n-tab-pane name="2" tab="访问量"
        ><component :is="Bar" tag="div" class="charts"
      /></n-tab-pane>
    </n-tabs>
  </div>
</template>
<style lang="less" scoped>
.count {
  font-size: 30px;
}
.charts {
  height: 400px;
  background-color: #fff;
  // padding: 20px;
  box-sizing: border-box;

}
</style>