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
import ChartArea from '@/views/components/chart/examples/ChartArea';
import ChartBar from '@/views/components/chart/examples/ChartBar';
import ChartBubble from '@/views/components/chart/examples/ChartBubble';
import ChartCalendar from '@/views/components/chart/examples/ChartCalendar';
import ChartCandlestick from '@/views/components/chart/examples/ChartCandlestick';
import ChartColumn from '@/views/components/chart/examples/ChartColumn';
import ChartCombo from '@/views/components/chart/examples/ChartCombo';
import ChartEvents from '@/views/components/chart/examples/ChartEvents';
import ChartGeo from '@/views/components/chart/examples/ChartGeo';
import ChartLine from '@/views/components/chart/examples/ChartLine';
import ChartPie from '@/views/components/chart/examples/ChartPie';
import ChartBasic from '@/views/components/chart/examples/ChartBasic';
import ChartSankey from '@/views/components/chart/examples/ChartSankey';
import ChartScatter from '@/views/components/chart/examples/ChartScatter';
import Comp from '@/views/components/page/templates/Comp';

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
