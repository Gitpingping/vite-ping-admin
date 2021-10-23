<script lang="ts">
import { defineComponent, onMounted,getCurrentInstance } from "vue";
import * as echarts from "echarts/core";
import {
  BarChart,
  // 系列类型的定义后缀都为 SeriesOption
//   LineChart,
  BarSeriesOption,
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
  | BarSeriesOption
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
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LegendComponent,
]);

export default defineComponent({
  name: "Bar",
  setup() {
    const { proxy } = getCurrentInstance();
    // console.log(proxy);
    onMounted(() => {
      console.log('onMounted');
      var myChart = echarts.init(document.getElementById("bar"));
      // 绘制图表
      myChart.setOption({
        // title: {
        //   text: "ECharts 入门示例",
        // },
        color: ['#37baa0'],
        tooltip: {
          trigger: "axis",
          axisPoint: {
            snap: true,
          },
        },
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
            type: "bar",
            smooth: true,
            barWidth: 36,
            data: [120, 200, 150, 80, 70, 110, 130],
            
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
    <div id="bar" class="charts"></div>
  </div>
</template>
<style lang="less" scoped>
.charts {
  height: 100%;
  width: 100%;
  // background-color: #fff;
}
</style>