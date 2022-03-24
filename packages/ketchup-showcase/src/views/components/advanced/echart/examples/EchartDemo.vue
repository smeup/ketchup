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
import { baseData } from '@/mock/echarts';
export default {
  components: {
    Demo,
  },
  name: 'EchartDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-echart-click',
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
          prop: 'axis',
          description: 'Sets the axis of the chart.',
          type: 'string',
          default: '""',
          try: 'field',
        },
        {
          prop: 'chartTitle',
          description: 'Title of the graph.',
          type: 'KupEchartTitle',
          default: 'null',
          try: 'json',
        },
        {
          prop: 'colors',
          description: "Overrides theme's colors.",
          type: 'string',
          default: 'null',
          isArray: true,
          try: 'json',
        },
        {
          prop: 'consistencyCheck',
          description:
            'When true, performs checks in order to properly initialize props which could be missing (i.e.: axis). For performances purposes, this prop will run only once when the component is initially created.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'data',
          description: 'The actual data of the chart.',
          type: 'KupDataDataset',
          default: 'null',
          try: 'json',
        },
        {
          prop: 'legend',
          description:
            'Sets the position of the legend. Supported values: bottom, left, right, top, hidden. Keep in mind that legend types are tied to chart types',
          type: 'KupEchartLegendPlacement',
          default: 'right',
          try: 'field',
        },
        {
          prop: 'map',
          description: `Choose which map you want to view, supported values: "europe", "africa", "asia", "oceania", "america", "italy" and "world". It's possible to supply a custom JSON too.`,
          type: 'KupEchartMaps | string | GeoJSON.GeoJSON',
          default: 'null',
          try: 'field',
        },
        {
          prop: 'series',
          description:
            'The data series to be displayed. They must be of the same type.',
          type: 'string',
          isArray: true,
          default: '[]',
          try: 'json',
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
          prop: 'types',
          description:
            'The type of the chart. Supported formats: Bar, Gaussian, Line, Map, Pie, Scatter. It is possible for line bar and scatter types to pass multiple values ​​to create series of different types',
          type: 'KupEchartTypes',
          isArray: true,
          default: "['Line']",
          try: 'json',
        },
        {
          prop: 'xAxis',
          description: 'Customization options for the x Axis.',
          type: 'echarts.XAXisComponentOption',
          default: 'null',
          try: 'json',
        },
        {
          prop: 'yAxis',
          description: 'Customization options for the y Axis.',
          type: 'echarts.YAXisComponentOption',
          default: 'null',
          try: 'json',
        },
      ],
    };
  },
};
function createComp() {
  let comp = document.createElement('kup-echart');
  comp.axis = 'Col1';
  comp.chartTitle = {
    value: 'This is a title.',
    color: 'red',
    position: 'top',
    size: 16,
  };
  comp.data = baseData;
  comp.id = 'demo-component';
  comp.legend = 'bottom';
  comp.types = ['Line'];
  return comp;
}
</script>
