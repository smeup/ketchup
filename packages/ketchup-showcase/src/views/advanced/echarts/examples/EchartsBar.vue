<template>
  <div>
    <p>Single series.</p>
    <div style="margin: auto; width: 600px; height: 400px">
      <kup-echarts
        :axis.prop="axis"
        :data.prop="singleData"
        :types.prop="types"
      />
    </div>
    <br />
    <p>Multi series.</p>
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
import { baseData } from '@/mock/chart';
import { singleData } from '@/mock/echarts';

export default {
  data() {
    return {
      axis: 'Col1',
      baseData,
      singleData,
      types: ['Bar', 'Bar', 'Bar'],
    };
  },
};
</script>
