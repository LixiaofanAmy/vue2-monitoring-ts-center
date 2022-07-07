<template>
  <div class="map-container" ref="mapContainer"></div>
</template>

<script lang="ts">
import Vue from 'vue'
let map
export default Vue.extend({
  name: 'BaiduMap',
  data() {
    return {}
  },
  mounted() {
    map = new BMapGL.Map(this.$refs.mapContainer)
    const point = new BMapGL.Point(116.404, 39.915)
    map.enableScrollWheelZoom(true)
    map.centerAndZoom(point, 15)
    map.setMapStyleV2({
      styleId: '02b07042d6a205a839fc7cff62d6d4d1',
    })
  },
  methods: {},
})
</script>

<style scoped>
.map-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
}
</style>