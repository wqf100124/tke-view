<template>
  <view v-show="visible">
    <div id="chart" style="width: 100%; height: 120px;margin: 60px auto 0;"></div>
  </view>
</template>

<script setup>
import * as echarts from "echarts";
import {onMounted, ref, reactive} from "vue";

const texts = ref([
  '青春由磨砺而出彩，人生因奋斗而升华！',
  '既然选择远方，当不负青春，砥砺前行。',
  '只有极致的拼搏，才能配得上极致的风景。',
    '你可以一无所有，但绝不能一无是处。',
    '抱怨身处黑暗，不如提灯前行。',
    '心态决定高度，细节决定成败。',
    '过去的价值不代表未来的地位。'
]);

const randomText = () => {
  return texts.value[Math.floor(Math.random() * texts.value.length)];
}

const visible = ref(true);
const option = reactive({
  graphic: {
    elements: [
      {
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
          text: 'MOVE BEYOND',
          fontSize: 68,
          fontWeight: '600',
          lineDash: [0, 300],
          lineDashOffset: 0,
          fill: 'transparent',
          stroke: '#ffffff',
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
                lineDash: [300, 0]
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
                fill: '#ffffff'
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