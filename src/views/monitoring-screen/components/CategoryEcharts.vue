<template>
  <div class="category-echarts" ref="categoryEcharts"></div>
</template>

<script lang="ts">
import Vue from 'vue'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let charts: any
export default Vue.extend({
  name: 'CategoryEcharts',
  data() {
    return {}
  },
  mounted() {
    charts = echarts.init(this.$refs.categoryEcharts)
    const option = {
      dataset: {
        source: [
          ['Mon', 120],
          ['Tue', 200],
          ['Wed', 150],
          ['Thu', 80],
          ['Fri', 70],
          ['Sat', 110],
          ['Sun', 130],
        ],
      },
      xAxis: {
        type: 'category',
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          type: 'line',
          smooth: true,
        },
      ],
    }
    charts.setOption(option)
  },
  destroyed() {
    charts.dispose()
  },
})
</script>

<style>
.category-echarts {
  width: 300px;
  height: 300px;
  background-color: #0d1426;
}
</style>