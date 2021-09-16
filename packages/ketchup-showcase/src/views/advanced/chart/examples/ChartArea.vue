<template>
  <div>
    <h3>Single serie</h3>
    <kup-chart
      :data.prop="baseData"
      :types.prop="types"
      axis="Col1"
      :series.prop="[{ code: 'Col2', decode: 'Col2' }]"
    />
    <hr />

    <h3>Multiple series</h3>
    <kup-chart
      :data.prop="baseData"
      :types.prop="['Area', 'Area', 'Area']"
      axis="Col1"
      :series.prop="series"
      :vAxes.prop="vAxes"
    />
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
      series: [
        { code: 'Col2', decode: 'Col2' },
        { code: 'Col3', decode: 'Col3' },
        { code: 'Col4', decode: 'Col4' },
      ],
      vAxes: [
        { textPosition: 'out' },
        { textPosition: 'out' },
        { textPosition: 'in' },
      ],
    };
  },
};
</script>
