<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <demo
        :demoTabs="demoTabs"
        :demoComp="demoComp"
        :demoProps="demoProps"
        :demoEvents="demoEvents"
        :demoData="demoData"
      ></demo>
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
import ChartArea from '@/views/advanced/chart/examples/ChartArea';
import ChartBar from '@/views/advanced/chart/examples/ChartBar';
import ChartBubble from '@/views/advanced/chart/examples/ChartBubble';
import ChartCalendar from '@/views/advanced/chart/examples/ChartCalendar';
import ChartCandlestick from '@/views/advanced/chart/examples/ChartCandlestick';
import ChartColumn from '@/views/advanced/chart/examples/ChartColumn';
import ChartCombo from '@/views/advanced/chart/examples/ChartCombo';
import ChartEvents from '@/views/advanced/chart/examples/ChartEvents';
import ChartGeo from '@/views/advanced/chart/examples/ChartGeo';
import ChartLine from '@/views/advanced/chart/examples/ChartLine';
import ChartPie from '@/views/advanced/chart/examples/ChartPie';
import ChartBasic from '@/views/advanced/chart/examples/ChartBasic';
import ChartSankey from '@/views/advanced/chart/examples/ChartSankey';
import ChartScatter from '@/views/advanced/chart/examples/ChartScatter';
import Comp from '@/views/advanced/page/templates/Comp';
import Demo from '@/views/advanced/page/templates/Demo';
import { baseData } from '@/mock/chart';

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
    Demo,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-chart',
      headtitle: 'Chart',
      titles: [
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
      ],
      demoTabs: [
        {
          text: 'Props',
          icon: '',
          status: 'Active',
        },
        {
          text: 'Events',
          icon: '',
          status: '',
        },
        {
          text: 'HTML',
          icon: '',
          status: '',
        },
        {
          text: 'JSON',
          icon: '',
          status: '',
        },
      ],
      demoComp: '<kup-chart legend id="demo-component"></kup-chart>',
      demoProps: [
        {
          prop: 'asp',
          description:
            'Sets the chart to a 2D or 3D aspect. 3D only works for Pie graphs.',
          type: 'string',
          default: '2D',
          try: 'field',
        },
        {
          prop: 'axis',
          description: 'Sets the axis of the chart.',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'colors',
          description: 'Colors of the chart.',
          type: 'string[]',
          default: '[]',
          try: 'array',
        },
        {
          prop: 'data',
          description: 'The actual data of the chart.',
          type: 'DataTable',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'graphTitle',
          description: 'Title of the graph.',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'graphTitleColor',
          description: "Title of the graph's color.",
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'graphTitleSize',
          description: 'Size of title of the graph (in pixels).',
          type: 'number',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'hAxis',
          description: 'Customize the hAxis.',
          type: 'ChartAxis',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'height',
          description: 'Height of the graph (in pixels).',
          type: 'number',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'legend',
          description: 'Displays the legend of the graph.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'series',
          description:
            'The data series to be displayed. They must be of the same type.',
          type: 'string[]',
          default: 'undefined',
          try: 'array',
        },
        {
          prop: 'showMarks',
          description: 'Displays the numerical values.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'stacked',
          description:
            'Displays the data columns of an object on top of each other.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'types',
          description:
            'The type of the chart. Supported formats: Area, Bubble, Cal, Candlestick, Combo, Geo, Hbar, Line, Ohlc, Pie, Sankey, Scatter, Unk, Vbar.',
          type: 'ChartType[]',
          default: '[ChartType.Hbar]',
          try: 'array',
        },
        {
          prop: 'vAxis',
          description: 'Customize the vAxis.',
          type: 'ChartAxis',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'version',
          description: 'Google Charts version to load.',
          type: 'string',
          default: '45.2',
          try: 'field',
        },
        {
          prop: 'width',
          description: 'Width of the graph (in pixels).',
          type: 'number',
          default: 'undefined',
          try: 'field',
        },
      ],
      demoEvents: [
        {
          name: 'kupChartClicked',
          type: 'click',
        },
      ],
      demoData: [
        {
          prop: 'data',
          value: baseData,
        },
        {
          prop: 'series',
          value: ['Col2', 'Col3', 'Col4'],
        },
        {
          prop: 'colors',
          value: ['#fc8e1c', 'Black', '#45c4ea'],
        },
        {
          prop: 'axis',
          value: 'Col1',
        },
        {
          prop: 'types',
          value: ['Hbar'],
        },
        {
          prop: 'asp',
          value: '2D',
        },
      ],
    };
  },
};
</script>
