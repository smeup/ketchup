<template>
  <div>
    <h3>Single serie</h3>
    <kup-chart :data.prop="baseData" :types.prop="types" axis="Col1" :series.prop="['Col2']" />
    <hr />

    <h3>Multiple series</h3>
    <kup-chart :data.prop="baseData" :types.prop="types" axis="Col1" :series.prop="series" />
    <hr />
  </div>
</template>

<script>
import { baseData } from '@/mock/chart';

export default {
  data() {
    return {
      types: ['Area'],
      baseData,
      series: ['Col2', 'Col3', 'Col4'],
    };
  },
};
</script>
