<template>
  <div class="wrapper">
    <!-- bar -->
    <kup-chart
      :data.prop="baseData"
      :axis.prop="'Col1'"
      :series.prop="series"
      @kupChartClicked="onBarChartClicked"
    />

    <div>
      <ul v-if="barChartDetail">
        <li>Column: {{ barChartDetail.column }}</li>
        <li>Row: {{ barChartDetail.row }}</li>
      </ul>
    </div>

    <!-- pie -->
    <kup-chart
      :data.prop="baseData"
      :types.prop="['Pie']"
      axis="Col1"
      :series.prop="['Col3']"
      @kupChartClicked="onPieChartClicked"
    />

    <div>
      <ul v-if="pieChartDetail">
        <li>Column: {{ pieChartDetail.column }}</li>
        <li>Row: {{ pieChartDetail.row }}</li>
      </ul>
    </div>

    <!-- calendar -->
    <kup-chart
      :data.prop="calendarData"
      :types.prop="['Cal']"
      axis="Col1"
      :series.prop="['Col2']"
      @kupChartClicked="onCalChartClicked"
    />

    <div>
      <ul v-if="calChartDetail">
        <li>Column: {{ calChartDetail.datetime }}</li>
        <li>Row: {{ calChartDetail.row }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { baseData, calendarData } from '@/mock/chart';

export default {
  data() {
    return {
      baseData,
      calendarData,
      series: ['Col2', 'Col3', 'Col4'],
      barChartDetail: null,
      pieChartDetail: null,
      calChartDetail: null,
    };
  },

  methods: {
    onBarChartClicked({ detail }) {
      this.barChartDetail = {
        column: detail.column,
        row: detail.row,
      };
    },

    onPieChartClicked({ detail }) {
      this.pieChartDetail = {
        column: detail.column,
        row: detail.row,
      };
    },

    onCalChartClicked({ detail }) {
      this.calChartDetail = {
        datetime: new Date(detail.datetime),
        row: detail.row,
      };
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
