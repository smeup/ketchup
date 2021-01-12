<template>
  <div>
    <kup-chart
      :data.prop="baseData"
      :types.prop="types"
      axis="Col1"
      :series.prop="[
        { code: 'Col3', decode: 'Col3' },
        { code: 'Col4', decode: 'Col4' },
      ]"
    />
    <hr />
  </div>
</template>

<script>
import { baseData } from '@/mock/chart';

export default {
  data() {
    return {
      types: ['Bubble'],
      baseData,
    };
  },
};
</script>
