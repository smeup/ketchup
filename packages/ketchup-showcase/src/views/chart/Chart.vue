<template>
  <comp :titles="titles">
    <template v-slot:0>
      <chart-basic></chart-basic>
    </template>
    <template v-slot:1>
      <chart-area></chart-area>
    </template>
    <template v-slot:2>
      <chart-bar></chart-bar>
    </template>
    <template v-slot:3>
      <chart-bubble></chart-bubble>
    </template>
    <template v-slot:4>
      <chart-calendar></chart-calendar>
    </template>
    <template v-slot:5>
      <chart-candlestick></chart-candlestick>
    </template>
    <template v-slot:6>
      <chart-column></chart-column>
    </template>
    <template v-slot:7>
      <chart-combo></chart-combo>
    </template>
    <template v-slot:8>
      <chart-events></chart-events>
    </template>
    <template v-slot:9>
      <chart-geo></chart-geo>
    </template>
    <template v-slot:10>
      <chart-line></chart-line>
    </template>
    <template v-slot:11>
      <chart-pie></chart-pie>
    </template>
    <template v-slot:12>
      <chart-sankey></chart-sankey>
    </template>
    <template v-slot:13>
      <chart-scatter></chart-scatter>
    </template>
  </comp>
</template>

<script>
import ChartArea from '@/views/chart/examples/ChartArea';
import ChartBar from '@/views/chart/examples/ChartBar';
import ChartBubble from '@/views/chart/examples/ChartBubble';
import ChartCalendar from '@/views/chart/examples/ChartCalendar';
import ChartCandlestick from '@/views/chart/examples/ChartCandlestick';
import ChartColumn from '@/views/chart/examples/ChartColumn';
import ChartCombo from '@/views/chart/examples/ChartCombo';
import ChartEvents from '@/views/chart/examples/ChartEvents';
import ChartGeo from '@/views/chart/examples/ChartGeo';
import ChartLine from '@/views/chart/examples/ChartLine';
import ChartPie from '@/views/chart/examples/ChartPie';
import ChartBasic from '@/views/chart/examples/ChartBasic';
import ChartSankey from '@/views/chart/examples/ChartSankey';
import ChartScatter from '@/views/chart/examples/ChartScatter';
import Comp from '@/views/page/templates/Comp';

export default {
  components: {
    ChartBasic,
    ChartArea,
    ChartBar,
    ChartBubble,
    ChartCalendar,
    ChartCandlestick,
    ChartColumn,
    ChartCombo,
    ChartEvents,
    ChartGeo,
    ChartLine,
    ChartPie,
    ChartSankey,
    ChartScatter,
    Comp,
  },
  data() {
    return {
      titles: [
        'Chart',
        'Area',
        'Bar',
        'Bubble',
        'Calendar',
        'Candlestick',
        'Column',
        'Combo',
        'Events',
        'Geo',
        'Line',
        'Pie',
        'Sankey',
        'Scatter',
      ],
    };
  },
};
</script>
