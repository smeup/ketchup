<template>
  <div>
    <div style="margin: auto; width: 600px; height: 400px">
      <kup-echarts
        :axis.prop="axis"
        :data.prop="baseData"
        :types.prop="types"
        legend="right"
      />
    </div>
  </div>
</template>

<script>
import { baseData } from '@/mock/chart';

export default {
  data() {
    return {
      axis: 'Col1',
      types: ['Pie'],
      baseData,
    };
  },
};
</script>
