<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoProps="demoProps"
      :demoTabs="demoTabs"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';
import { baseData } from '@/mock/echarts';

export default {
  components: {
    Demo,
  },
  name: 'EchartsDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kupEchartsClicked',
          type: 'click',
        },
      ],
      demoProps: [
        {
          prop: 'objectData',
          description: 'The actual data of the chart.',
          type: 'DataTable',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'graphTitle',
          description: 'Title of the graph.',
          type: 'string',
          default: 'TitolaProva',
          try: 'field',
        },
        {
          prop: 'graphTitleColor',
          description: "Title of the graph's color.",
          type: 'string',
          default: 'orange',
          try: 'field',
        },
        {
          prop: 'graphTitleSize',
          description: 'Size of title of the graph (in pixels).',
          type: 'number',
          default: 20,
          try: 'field',
        },

        {
          prop: 'legend',
          description:
            'Sets the position of the legend. Supported values: bottom, left, right, top. Keep in mind that legend types are tied to chart types',
          type: 'string',
          default: 'right',
          try: 'field',
        },

        {
          prop: 'types',
          description:
            'The type of the chart. Supported formats: Bar, Line, Pie, Scatter',
          type: 'string',
          default: 'line',
          try: 'field',
        },
      ],
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
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-echarts');
  comp.objectData = baseData;
  comp.id = 'demo-component';
  comp.graphTitle = 'TitoloProva';
  comp.graphTitleColor = 'orange';
  comp.graphTitleSize = 10;
  comp.legend = 'right';
  comp.types = 'Line';
  return comp;
}
</script>
