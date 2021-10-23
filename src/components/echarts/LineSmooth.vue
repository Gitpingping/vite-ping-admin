<script lang="ts">
import { defineComponent, onMounted,getCurrentInstance } from "vue";
import * as echarts from "echarts/core";
import {
  // BarChart,
  // 系列类型的定义后缀都为 SeriesOption
  LineChart,
  LineSeriesOption,
} from "echarts/charts";
import {
  TitleComponent,
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  GridComponent,
  GridComponentOption,
  // 数据集组件
  DatasetComponent,
  DatasetComponentOption,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  | LineSeriesOption
  | TitleComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LegendComponent,
]);

export default defineComponent({
  name: "LineSmooth",
  setup() {
    const { proxy } = getCurrentInstance();
    // console.log(proxy);
    onMounted(() => {
      var myChart = echarts.init(document.getElementById("line-smooth"));
      // 绘制图表
      myChart.setOption({
        // title: {
        //   text: "ECharts 入门示例",
        // },
        tooltip: {
          trigger: "axis",
          axisPoint: {
            snap: true,
          },
        },
        xAxis: {
          boundaryGap: false,
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
          splitLine: {
            show: true,
          },
        },
        yAxis: {
          // splitLine: true,
        },
        grid: {
          left: "10%",
          right: "5%",
        },
        legend: {
          show: true,
          // data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        boundaryGap: ["50%", "50%"],
        series: [
          {
            name: "销量",
            type: "line",
            smooth: true,
            data: [0, 12000, 0, 12000, 0, 12000],
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#37baa0",
                },
                {
                  offset: 1,
                  color: "#37baff",
                },
              ]),
            },
          },
          {
            name: "销售额",
            type: "line",
            smooth: true,
            data: [12000, 0, 12000, 0, 12000, 0],
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(0, 221, 255)",
                },
                {
                  offset: 1,
                  color: "rgba(77, 119, 255)",
                },
              ]),
            },
          },
        ],
      });
      window.onresize = function () {
	    	myChart.resize();
	    }
    });
    // 基于准备好的dom，初始化echarts实例
    return {};
  },
  components: {},
});
</script>

<template>
  <div>
    <div id="line-smooth" class="charts"></div>
  </div>
</template>
<style lang="less" scoped>
.charts {
  height: 100%;
  width: 100%;
  // background-color: #fff;
}
</style>