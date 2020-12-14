<template>
  <div class="wrapper" style="width: 800px; height: 1000px">
    <div style="width: 580px; height: 400px">
      <!-- bar -->
      <kup-echarts
        :objectData.prop="baseData"
        :types.prop="types"
        @kupEchartsClicked="onBarChartClicked"
      />
    </div>
    <div id="event">click on the graph to trigger the event</div>
    <div style="width: 580px; height: 400px">
      <!-- pie -->
      <kup-echarts
        :objectData.prop="baseData"
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
      baseData,
      types: ['Line'],
      types1: ['Pie'],
      conta: 0,
      conta1: 0,
    };
  },

  methods: {
    onBarChartClicked() {
      this.conta = this.conta + 1;
      document.getElementById('event').innerHTML =
        'kupEchartsClicked event received' + '<br>' + 'N:' + this.conta;
    },

    onPieChartClicked() {
      this.conta1 = this.conta1 + 1;
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
