<template>
  <div>
    <div class="demo-container">
      <div class="kup-container">
        <kup-echart
          :axis.prop="axis"
          :data.prop="baseData"
          :types.prop="types"
          :series.prop="baseSeries"
          legend="top"
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
      baseSeries: ['Col2', 'Col3', 'Col4'],
      types: ['Pie'],
      baseData,
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
