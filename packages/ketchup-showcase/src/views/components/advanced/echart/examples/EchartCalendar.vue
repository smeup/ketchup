<template>
  <div>
    <div class="demo-container">
      <div class="kup-container">
        <kup-echart
          :axis.prop="axis"
          :data.prop="data"
          :types.prop="types"
          :legend.prop="legend"
          :colors.prop="colors"
      /></div>
    </div>
  </div>
</template>

<script>
import { calendarChartData } from '@/mock/chart';
export default {
  data() {
    return {
      axis: '',
      types: ['Calendar'],
      data: calendarChartData,
      legend: 'top',
      colors: ['blue'],
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
