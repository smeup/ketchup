<template>
  <div class="wrapper">
    <div style="width: 580px; height: 400px">
      <kup-echarts
        :axis.prop="axis"
        :data.prop="baseData"
        :types.prop="types"
        @kupEchartsClicked="onBarChartClicked"
      />
    </div>
    <div id="event">click on the graph to trigger the event</div>
    <div style="width: 580px; height: 400px">
      <kup-echarts
        :data.prop="baseData"
        :types.prop="types1"
        @kupEchartsClicked="onPieChartClicked()"
      />
    </div>
    <div id="event1">click on the graph to trigger the event</div>
  </div>
</template>

<script>
import { baseData } from '@/mock/echarts';

export default {
  data() {
    return {
      axis: 'Col1',
      baseData,
      types: ['Line'],
      types1: ['Pie'],
      cnt: 0,
      cnt1: 0,
    };
  },

  methods: {
    onBarChartClicked() {
      this.cnt++;
      document.getElementById('event').innerHTML =
        'kupEchartsClicked event received' + '<br>' + 'N:' + this.conta;
    },

    onPieChartClicked() {
      this.cnt1++;
      document.getElementById('event1').innerHTML =
        'kupEchartsClicked event received' + '<br>' + 'N:' + this.conta1;
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
</style>
