<template>
  <div>
    <div style="margin: auto; width: 600px; height: 400px">
      <kup-echarts :data.prop="baseData" :types.prop="types" legend="right" />
    </div>
  </div>
</template>

<script>
import { baseData } from '@/mock/chart';

export default {
  data() {
    return {
      types: ['Pie'],
      baseData,
    };
  },
};
</script>
