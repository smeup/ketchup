<template>
  <div>
    <h1>Bar Charts</h1>
    <h3>Single serie</h3>
    <kup-chart
      :data.prop="baseData"
      :axis.prop="'Col1'"
      :series.prop="['Col2']"
    />
    <hr />

    <h3>Multiple serie</h3>
    <kup-chart
      :data.prop="baseData"
      :axis.prop="'Col1'"
      :series.prop="series"
    />
    <hr />

    <h3>Stacked</h3>
    <kup-chart
      :data.prop="baseData"
      :axis.prop="'Col1'"
      :series.prop="series"
      stacked
    />
  </div>
</template>

<script>
import { baseData } from '@/mock/chart';

export default {
  name: 'KupCharts',
  data() {
    return {
      baseData,
      series: ['Col2', 'Col3', 'Col4'],
    };
  },
};
</script>
