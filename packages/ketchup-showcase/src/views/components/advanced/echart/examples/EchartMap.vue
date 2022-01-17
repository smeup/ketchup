<template>
  <div>
    <p>World map chart.</p>
    <div class="demo-container">
      <div class="kup-container">
        <kup-echart
          :axis.prop="axis"
          :data.prop="mapData"
          :types.prop="types"
          :mapType.prop="mapType"
        /> </div
    ></div>
    <br />
    <p>Europe map chart.</p>
    <div class="demo-container">
      <div class="kup-container">
        <kup-echart
          :axis.prop="axis"
          :data.prop="mapData"
          :types.prop="types"
          :mapType.prop="mapType1"
        /> </div
    ></div>
  </div>
</template>

<script>
import { mapData } from '@/mock/echarts';
export default {
  data() {
    return {
      axis: 'Col1',
      types: ['map'],
      mapData,
      mapType: 'world',
      mapType1: 'europe',
    };
  },
};
</script>

<style scoped lang="scss">
.kup-container {
  height: 300px;
  padding: 0;
}
</style>
