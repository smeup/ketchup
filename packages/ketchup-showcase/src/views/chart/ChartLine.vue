<template>
  <div>
    <h1>Line charts</h1>
    <h3>Single serie</h3>
    <kup-chart
      :data.prop="baseData"
      :type="type"
      axis="Col1"
      :series.prop="['Col2']"
    />
    <hr />

    <h3>Multiple series</h3>
    <kup-chart
      :data.prop="baseData"
      :type="type"
      axis="Col1"
      :series.prop="series"
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
      type: 'Line',
      baseData,
      series: ['Col2', 'Col3', 'Col4'],
    };
  },
};
</script>
