<template>
  <div style="width: 600px; height: 400px">
    <kup-echarts :objectData.prop="baseData" :types.prop="types" />
  </div>
</template>

<script>
import { baseData } from '@/mock/chart';

export default {
  data() {
    return {
      types: 'Pie',
      baseData,
    };
  },
};
</script>
