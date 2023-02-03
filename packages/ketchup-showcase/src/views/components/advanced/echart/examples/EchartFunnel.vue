<template>
  <div>
    <div class="demo-container">
      <div class="kup-container">
        <kup-echart
          :axis.prop="axis"
          :data.prop="data"
          :types.prop="types"
          :chartTitle.prop="chartTitle"
          :colors.prop="colors"
          :legend.prop="legend"
      /></div>
    </div>
  </div>
</template>

<script>
import { baseData } from '@/mock/chart';
export default {
  data() {
    return {
      axis: 'Col1',
      types: ['Funnel'],
      data: baseData,
      legend: 'top',
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
