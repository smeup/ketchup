<template>
  <div style="width: 800px; height: 1000px">
    <h3>Single serie</h3>
    <div style="width: 600px; height: 400px">
      <kup-echarts :objectData.prop="singleData" :types.prop="types" />
      <hr />
    </div>
    <h3> Multiple series</h3>
    <div style="width: 600px; height: 400px">
      <kup-echarts :objectData.prop="baseData" :types.prop="types" />
      <hr />
    </div>
  </div>
</template>

<script>
import { baseData } from '@/mock/chart';
import { singleData } from '@/mock/echarts';

export default {
  data() {
    return {
      types: ['Bar', 'Bar', 'Bar'],
      baseData,
      singleData,
    };
  },
};
</script>
