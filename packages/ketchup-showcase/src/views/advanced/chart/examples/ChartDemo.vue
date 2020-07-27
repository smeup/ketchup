<template>
  <div>
    <demo
      :demoTabs="demoTabs"
      :demoComp="demoComp"
      :demoProps="demoProps"
      :demoEvents="demoEvents"
      :demoData="demoData"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';
import { baseData } from '@/mock/chart';

export default {
  components: {
    Demo,
  },
  name: 'ChartDemo',
  data() {
    return {
      demoTabs: [
        {
          text: 'Props',
          icon: '',
          active: true,
        },
        {
          text: 'Events',
          icon: '',
          active: false,
        },
        {
          text: 'HTML',
          icon: '',
          active: false,
        },
        {
          text: 'JSON',
          icon: '',
          active: false,
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
          prop: 'legend',
          description: 'Displays the legend of the graph.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'offlineMode',
          description:
            'Renders charts without the Google API and using jQuery Sparkline.',
          type: 'ChartOfflineMode',
          default: 'undefined',
          try: 'json',
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
          prop: 'sizeX',
          description:
            'The width of the chart, defaults to 100%. Accepts any valid CSS format (px, %, vw, etc.).',
          type: 'string',
          default: '100%',
          try: 'field',
        },
        {
          prop: 'sizeY',
          description:
            'The height of the chart, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).',
          type: 'string',
          default: '100%',
          try: 'field',
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
      ],
      demoEvents: [
        {
          name: 'kupChartClicked',
          type: 'click',
        },
      ],
      demoData: {
        asp: '2D',
        axis: 'Col1',
        colors: ['#fc8e1c', 'Black', '#45c4ea'],
        data: baseData,
        series: ['Col2', 'Col3', 'Col4'],
        types: ['Hbar'],
      },
    };
  },
};
</script>
