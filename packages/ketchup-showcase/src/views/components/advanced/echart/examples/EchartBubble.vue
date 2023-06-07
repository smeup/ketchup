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
import { bubbleChartData } from '@/mock/chart';
export default {
  data() {
    return {
      axis: '',
      types: ['Bubble'],
      data: bubbleChartData,
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
