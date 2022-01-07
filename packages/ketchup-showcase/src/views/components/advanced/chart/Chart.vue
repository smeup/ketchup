<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <chart-demo></chart-demo>
    </template>
    <template v-slot:1>
      <chart-basic></chart-basic>
    </template>
    <template v-slot:2>
      <chart-area></chart-area>
    </template>
    <template v-slot:3>
      <chart-bar></chart-bar>
    </template>
    <template v-slot:4>
      <chart-bubble></chart-bubble>
    </template>
    <template v-slot:5>
      <chart-calendar></chart-calendar>
    </template>
    <template v-slot:6>
      <chart-candlestick></chart-candlestick>
    </template>
    <template v-slot:7>
      <chart-column></chart-column>
    </template>
    <template v-slot:8>
      <chart-combo></chart-combo>
    </template>
    <template v-slot:9>
      <chart-events></chart-events>
    </template>
    <template v-slot:10>
      <chart-geo></chart-geo>
    </template>
    <template v-slot:11>
      <chart-line></chart-line>
    </template>
    <template v-slot:12>
      <chart-pie></chart-pie>
    </template>
    <template v-slot:13>
      <chart-sankey></chart-sankey>
    </template>
    <template v-slot:14>
      <chart-scatter></chart-scatter>
    </template>
    <template v-slot:15>
      <chart-trend></chart-trend>
    </template>
  </comp>
</template>

<script>
import ChartDemo from '@/views/components/advanced/chart/examples/ChartDemo';
import ChartArea from '@/views/components/advanced/chart/examples/ChartArea';
import ChartBar from '@/views/components/advanced/chart/examples/ChartBar';
import ChartBubble from '@/views/components/advanced/chart/examples/ChartBubble';
import ChartCalendar from '@/views/components/advanced/chart/examples/ChartCalendar';
import ChartCandlestick from '@/views/components/advanced/chart/examples/ChartCandlestick';
import ChartColumn from '@/views/components/advanced/chart/examples/ChartColumn';
import ChartCombo from '@/views/components/advanced/chart/examples/ChartCombo';
import ChartEvents from '@/views/components/advanced/chart/examples/ChartEvents';
import ChartGeo from '@/views/components/advanced/chart/examples/ChartGeo';
import ChartLine from '@/views/components/advanced/chart/examples/ChartLine';
import ChartPie from '@/views/components/advanced/chart/examples/ChartPie';
import ChartBasic from '@/views/components/advanced/chart/examples/ChartBasic';
import ChartSankey from '@/views/components/advanced/chart/examples/ChartSankey';
import ChartScatter from '@/views/components/advanced/chart/examples/ChartScatter';
import ChartTrend from '@/views/components/advanced/chart/examples/ChartTrend';
import Comp from '@/views/templates/Comp';

export default {
  components: {
    ChartDemo,
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
    ChartTrend,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-chart',
      headtitle: 'Chart',
      titles: [
        'Playground',
        'Basic usage',
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
        'Trendlines',
      ],
    };
  },
  title: 'Ketchup | Chart',
};
</script>
