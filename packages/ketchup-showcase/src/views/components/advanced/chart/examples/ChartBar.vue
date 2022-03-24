<template>
  <div>
    <h3>Single serie</h3>
    <kup-chart
      :data.prop="baseData"
      :axis.prop="'Col1'"
      :series.prop="[{ code: 'Col2', decode: 'Col2' }]"
    />
    <hr />

    <h3>Multiple series</h3>
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
  data() {
    return {
      baseData,
      series: [
        { code: 'Col2', decode: 'Col2' },
        { code: 'Col3', decode: 'Col3' },
        { code: 'Col4', decode: 'Col4' },
      ],
    };
  },
};
</script>
