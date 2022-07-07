<template>
  <div class="bar-echarts" ref="barEcharts"></div>
</template>

<script lang="ts">
import Vue from 'vue'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let charts: any
export default Vue.extend({
  name: 'BarEcharts',
  data() {
    return {}
  },
  mounted() {
    charts = echarts.init(this.$refs.barEcharts)
    const option = {
      legend: {
        orient: 'horizontal',
        left: 'center',
        top: 10,
        textStyle: {
          color: '#ccc',
        },
      },
      dataset: {
        source: [
          ['product', '2015', '2016', '2017'],
          ['Matcha Latte', 43.3, 85.8, 93.7],
          ['Milk Tea', 83.1, 73.4, 55.1],
          ['Cheese Cocoa', 86.4, 65.2, 82.5],
          ['Walnut Brownie', 72.4, 53.9, 39.1],
        ],
      },
      xAxis: { type: 'category' },
      yAxis: {},
      series: [
        {
          type: 'bar',
          stack: 'x',
        },
        {
          type: 'bar',
          stack: 'x',
        },
        {
          type: 'bar',
          stack: 'x',
        },
      ],
    }
    charts.setOption(option)
    charts.on('click', function (params: object) {
      console.log(params)
    })
  },
  destroyed() {
    charts.dispose()
  },
})
</script>

<style>
.bar-echarts {
  width: 300px;
  height: 300px;
  background-color: #0d1426;
}
</style>