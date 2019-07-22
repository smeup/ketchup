<template>
  <div>
    <h1>Bubble charts</h1>
    <kup-chart
      :data.prop="baseData"
      :type="type"
      axis="Col1"
      :series.prop="['Col3', 'Col4']"
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
      type: 'Bubble',
      baseData,
    };
  },
};
</script>
