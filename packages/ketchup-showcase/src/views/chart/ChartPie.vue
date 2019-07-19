<template>
  <div>
    <h1>Pie Charts</h1>
    <h3>2D</h3>
    <kup-chart
      :data.prop="baseData"
      type="Pie"
      axe="Col1"
      :series.prop="['Col2']"
    />
    <hr />

    <h3>3D</h3>
    <kup-chart
      :data.prop="baseData"
      type="Pie"
      axe="Col1"
      asp="3D"
      :series.prop="['Col2']"
    />
    <hr />
  </div>
</template>

<script>
import { baseData } from '@/mock/chart';

export default {
  name: 'KupCharts',
  data() {
    return {
      baseData,
    };
  },
};
</script>
