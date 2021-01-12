<template>
  <div>
    <h3>2D</h3>
    <kup-chart
      :data.prop="baseData"
      :types.prop="types"
      axis="Col1"
      :series.prop="[{ code: 'Col2', decode: 'Col2' }]"
    />
    <hr />

    <h3>3D</h3>
    <kup-chart
      :data.prop="baseData"
      :types.prop="types"
      axis="Col1"
      asp="3D"
      :series.prop="[{ code: 'Col2', decode: 'Col2' }]"
    />
    <hr />
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
