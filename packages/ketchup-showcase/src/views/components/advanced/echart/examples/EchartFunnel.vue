<template>
  <div>
    <div class="demo-container">
      <div class="kup-container">
        <kup-echart
          :axis.prop="axis"
          :data.prop="singleData"
          :types.prop="types"
          legend="right"
      /></div>
    </div>
  </div>
</template>

<script>
import { singleData } from '@/mock/echarts';
export default {
  data() {
    return {
      axis: 'Col1',
      types: ['Funnel'],
      singleData,
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
