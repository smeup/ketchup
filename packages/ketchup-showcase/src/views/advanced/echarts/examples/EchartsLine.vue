<template>
  <div style="width: 800px; height: 1000px">
    <h3>Single serie</h3>
    <div style="width: 600px; height: 400px">
      <kup-echarts :objectData.prop="singleData" :types.prop="types" />
    </div>
    <hr />

    <h3> Multiple series</h3>
    <div style="width: 600px; height: 400px">
      <kup-echarts :objectData.prop="baseData" :types.prop="types" />
    </div>
    <hr />
  </div>
</template>

<script>
import { baseData } from '@/mock/echarts';
import { singleData } from '@/mock/echarts';

export default {
  data() {
    return {
      types: ['Line'],
      baseData,
      singleData,
    };
  },
};
</script>
