<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoMethods="demoMethods"
      :demoProps="demoProps"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/templates/Demo';
import { baseData } from '@/mock/chart';

export default {
  components: {
    Demo,
  },
  name: 'ChartDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-chart-click',
          type: 'click',
        },
      ],
      demoMethods: [
        {
          name: 'getProps',
          description:
            "Returns the props' values of the component. When invoked giving true as the only argument, returns the props descriptions instead.",
        },
        {
          name: 'refresh',
          description:
            'This method is used to trigger a new render of the component.',
        },
        {
          name: 'resizeCallback',
          description:
            'This method is invoked by KupManager whenever the component changes size.',
        },
        {
          name: 'setProps',
          description: 'Sets the props to the component.',
        },
      ],
      demoProps: [
        {
          prop: 'asp',
          description:
            'Sets the chart to a 2D or 3D aspect. 3D only works for Pie graphs.',
          type: 'ChartAspect',
          default: 'undefined',
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
          prop: 'chartTitle',
          description: 'Title of the chart.',
          type: 'ChartTitle',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'colors',
          description: 'Colors of the chart.',
          type: 'string',
          isArray: true,
          default: '[]',
          try: 'json',
        },
        {
          prop: 'customStyle',
          description:
            'Custom style of the component. For more information: https://smeup.github.io/ketchup/#/customization.',
          type: 'string',
          default: '""',
          try: 'css',
        },
        {
          prop: 'data',
          description: 'The actual data of the chart.',
          type: 'KupDataDataset',
          default: 'undefined',
          try: 'json',
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
          description:
            'Sets the position of the legend. Supported values: bottom, labeled, left, none, right, top. Keep in mind that legend types are tied to chart types, some combinations might not work.',
          type: 'string',
          default: 'right',
          try: 'field',
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
          type: 'ChartSerie',
          isArray: true,
          default: 'undefined',
          try: 'json',
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
          prop: 'sorting',
          description: 'Used to sort series.',
          type: 'KupChartSort',
          isArray: true,
          default: 'null',
          try: 'json',
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
          type: 'ChartType',
          isArray: true,
          default: '[ChartType.Hbar]',
          try: 'json',
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
          prop: 'vAxes',
          description: 'Customization vertical axis',
          type: 'ChartAxis',
          isArray: true,
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'hAxes',
          description: 'Customization horizontal axis',
          type: 'ChartAxis',
          isArray: true,
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'trendlines',
          description: 'Trendline definition',
          type: 'KupChartTrendlines',
          default: 'undefined',
          try: 'json',
        },
      ],
    };
  },
};

function createComp() {
  const comp = document.createElement('kup-chart');
  comp.asp = '2D';
  comp.axis = 'Col1';
  comp.chartTitle = {
    value: 'This is a title.',
    color: 'red',
    size: 16,
  };
  comp.data = baseData;
  comp.id = 'demo-component';
  comp.legend = 'right';
  comp.series = [
    { code: 'Col2', decode: 'Something' },
    { code: 'Col3', decode: 'Something else' },
    { code: 'Col4', decode: 'Something else entirely' },
  ];
  comp.type = ['Hbar'];
  return comp;
}
</script>
