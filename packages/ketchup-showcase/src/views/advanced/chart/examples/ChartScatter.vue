<template>
  <div>
    <kup-chart
      :data.prop="ageWeightData"
      :types.prop="types"
      axis="Col1"
      :series.prop="[{ code: 'Col2', decode: 'Col2' }]"
    />
    <hr />
  </div>
</template>

<script>
import { ageWeightData } from '@/mock/chart';

export default {
  data() {
    return {
      types: ['Scatter'],
      ageWeightData,
    };
  },
};
</script>
