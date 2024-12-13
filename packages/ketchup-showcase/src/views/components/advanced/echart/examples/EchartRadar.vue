<template>
  <div>
    <div class="demo-container">
      <div class="kup-container">
        <kup-echart
          :axis.prop="axis"
          :data.prop="data"
          :types.prop="types"
          :legend.prop="legend"
      /></div>
    </div>
  </div>
</template>

<script>
import { radarData } from '@/mock/chart';
export default {
  data() {
    return {
      axis: 'COL1',
      types: ['Radar'],
      data: radarData,
      legend: 'right',
      series: ['COL2', 'COL3'],
    };
  },
};
</script>

<style scoped lang="scss">
.kup-container {
  height: 400px;
  padding: 0;
}
</style>
