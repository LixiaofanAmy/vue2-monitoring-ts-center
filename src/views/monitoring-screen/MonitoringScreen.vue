<template>
  <div class="monitoring-screen">
    <baidu-map></baidu-map>
    <div class="aside-left">
      <bar-echarts></bar-echarts>
      <category-echarts></category-echarts>
    </div>
    <div class="aside-right">
      <pie-echarts></pie-echarts>
      <scatter-echarts></scatter-echarts>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaiduMap from './components/BaiduMap.vue'
import BarEcharts from './components/BarEcharts.vue'
import CategoryEcharts from './components/CategoryEcharts.vue'
import PieEcharts from './components/PieEcharts.vue'
import ScatterEcharts from './components/ScatterEcharts.vue'
export default Vue.extend({
  name: 'MonitoringScreen',
  components: {
    BaiduMap,
    BarEcharts,
    CategoryEcharts,
    PieEcharts,
    ScatterEcharts,
  },

  methods: {},
})
</script>

<style scoped>
.aside-left,
.aside-right {
  position: absolute;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  height: 100vh;
  width: 340px;
  padding: 20px;
}
.aside-left {
  left: 0;
}
.aside-right {
  right: 0;
}
</style>