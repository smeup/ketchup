<template>
  <div>
    <kup-chart
      :data.prop="calendarData"
      :types.prop="types"
      axis="Col1"
      :series.prop="[{ code: 'Col2', decode: 'Col2' }]"
    />
    <hr />
  </div>
</template>

<script>
import { calendarData } from '@/mock/chart';

export default {
  data() {
    return {
      types: ['Cal'],
      calendarData,
    };
  },
};
</script>
