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
      axis: 'Col1',
      types: ['Radar'],
      data: radarData,
      legend: 'top',
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
