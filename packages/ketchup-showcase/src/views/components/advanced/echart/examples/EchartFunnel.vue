<template>
  <div>
    <div class="demo-container">
      <div class="kup-container">
        <kup-echart
          :axis.prop = "axis"
          :data.prop = "singleData"
          :types.prop ="types"
          :chartTitle.prop = "chartTitle"
          :colors.prop = "colors"
          :legend.prop = "legend"
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
      chartTitle:{
        value: 'Funnel',
        color: 'red',
        position: 'top',
        size: 16,
      },
      colors:['blue'],
      legend:'top'
    }
  }
};

</script>

<style scoped lang="scss">
.kup-container {
  height: 300px;
  padding: 0;
}
</style>
