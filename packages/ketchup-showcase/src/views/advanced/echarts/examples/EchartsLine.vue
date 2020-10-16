<template>
  <div>
    <h3>Single serie</h3>

    <kup-echarts :objectData.prop="singleData" :types.prop="types" />
    <hr />
    <h3> Multiple series</h3>

    <kup-echarts :objectData.prop="baseData" :types.prop="types" />
    <hr />
  </div>
</template>

<script>
import { baseData } from '@/mock/echarts';
import { singleData } from '@/mock/echarts';

export default {
  data() {
    return {
      types: 'Line',
      baseData,
      singleData,
    };
  },
};
</script>
