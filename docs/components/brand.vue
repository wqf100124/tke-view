<template>
  <view v-show="visible">
    <div id="chart" style="width: 100%; height: 120px;margin: 60px auto 0;"></div>
  </view>
</template>

<script setup>
import * as echarts from "echarts";
import {onMounted, defineProps, ref, reactive} from "vue";

const props = defineProps({
  text: {
    required: true,
    type: String
  }
});

const visible = ref(true);
const option = reactive({
  graphic: {
    elements: [
      {
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
          text: props.text,
          fontSize: 68,
          fontWeight: 'bold',
          lineDash: [0, 200],
          lineDashOffset: 0,
          fill: 'transparent',
          stroke: '#bc41a0',
          lineWidth: 1
        },
        keyframeAnimation: {
          duration: 3000,
          loop: false,
          keyframes: [
            {
              percent: 0.6,
              style: {
                fill: 'transparent',
                lineDashOffset: 200,
                lineDash: [200, 0]
              }
            },
            {
              // Stop for a while.
              percent: 0.8,
              style: {
                fill: 'transparent'
              }
            },
            {
              percent: 1,
              style: {
                fill: '#f16b09'
              }
            }
          ]
        }
      }
    ]
  }
});

const myChart = ref(null);

const echartInit = () => {
  myChart.value = echarts.init(document.getElementById("chart"));
  updateChart();
};

const updateChart = () => {
  visible.value = document.documentElement.clientWidth > 960;
  if (visible.value) {
    myChart.value.setOption(option);
  }
}

onMounted(() => {
  echartInit();

  window.onresize = () => {
    updateChart();
  };
});
</script>

<style scoped>
</style>