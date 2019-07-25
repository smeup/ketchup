<template>
  <div>
    <h1>Calendar charts</h1>
    <kup-chart
      :data.prop="calendarData"
      :types.prop="types"
      axis="Col1"
      :series.prop="['Col2']"
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
