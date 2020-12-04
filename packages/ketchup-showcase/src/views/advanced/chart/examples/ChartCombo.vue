<template>
  <div>
    <kup-chart
      axis="Col1"
      :data.prop="comboData"
      :types.prop="types"
      :series.prop="series"
    />
  </div>
</template>

<script>
import { comboData } from '@/mock/chart';

export default {
  data() {
    return {
      comboData,
      types: ['Area', 'Line'],
      series: [
        { code: 'Col2', decode: 'Col2' },
        { code: 'Col3', decode: 'Col3' },
      ],
    };
  },
};
</script>
