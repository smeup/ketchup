<template>
  <div>
    <p>Single series chart.</p>
    <div style="margin: auto; width: 600px; height: 400px">
      <kup-echarts
        :axis.prop="axis"
        :data.prop="singleData"
        :types.prop="types"
      />
    </div>
    <br />
    <p>Multi series chart.</p>
    <div style="margin: auto; width: 600px; height: 400px">
      <kup-echarts
        :axis.prop="axis"
        :data.prop="baseData"
        :types.prop="types"
      />
    </div>
  </div>
</template>

<script>
import { baseData } from '@/mock/echarts';
import { singleData } from '@/mock/echarts';

export default {
  data() {
    return {
      axis: 'Col1',
      types: ['Line'],
      baseData,
      singleData,
    };
  },
};
</script>
