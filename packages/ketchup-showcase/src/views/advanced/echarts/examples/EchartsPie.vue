<template>
  <div>
    <kup-echarts :objectData.prop="baseData" :types.prop="types" />

    <hr />
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
