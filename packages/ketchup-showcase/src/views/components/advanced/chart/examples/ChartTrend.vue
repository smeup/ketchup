<template>
  <div>
    <kup-chart
      :data.prop="trendLinesData"
      :types.prop="types"
      axis="COL1"
      :series.prop="series"
      :trendlines.prop="trendlines"
      vAxis="{'minValue': 0,'viewWindow': {'min': 0}}"
    />
    <hr />
  </div>
</template>

<script>
import { trendLinesData } from '@/mock/chart';

export default {
  data() {
    return {
      types: ['Line'],
      trendLinesData,
      series: [{ code: 'COL2', decode: 'COL2' }],
      trendlines: { '0': {} },
    };
  },
};
</script>
