<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <echart-demo></echart-demo>
    </template>
    <template v-slot:1>
      <echart-events></echart-events>
    </template>
    <template v-slot:2>
      <echart-bar></echart-bar>
    </template>
    <template v-slot:3>
      <echart-h-bar></echart-h-bar>
    </template>
    <template v-slot:4>
      <echart-line></echart-line>
    </template>
    <template v-slot:5>
      <echart-area></echart-area>
    </template>
    <template v-slot:6>
      <echart-pie></echart-pie>
    </template>
    <template v-slot:7>
      <echart-scatter></echart-scatter>
    </template>
    <template v-slot:8>
      <echart-map></echart-map>
    </template>
    <template v-slot:9>
      <echart-gaussian></echart-gaussian>
    </template>
    <template v-slot:10>
      <echart-funnel></echart-funnel>
    </template>
    <template v-slot:11>
      <echart-radar></echart-radar>
    </template>
    <template v-slot:12>
      <echart-bubble></echart-bubble>
    </template>
     <template v-slot:12>
      <echart-candle></echart-candle>
    </template>
  </comp>
</template>

<script>
import EchartDemo from '@/views/components/advanced/echart/examples/EchartDemo';
import EchartArea from '@/views/components/advanced/echart/examples/EchartArea';
import EchartBar from '@/views/components/advanced/echart/examples/EchartBar';
import EchartHBar from '@/views/components/advanced/echart/examples/EchartHBar';
import EchartEvents from '@/views/components/advanced/echart/examples/EchartEvents';
import EchartLine from '@/views/components/advanced/echart/examples/EchartLine';
import EchartPie from '@/views/components/advanced/echart/examples/EchartPie';
import EchartScatter from '@/views/components/advanced/echart/examples/EchartScatter';
import EchartMap from '@/views/components/advanced/echart/examples/EchartMap';
import EchartGaussian from '@/views/components/advanced/echart/examples/EchartGaussian';
import EchartFunnel from '@/views/components/advanced/echart/examples/EchartFunnel';
import EchartRadar from '@/views/components/advanced/echart/examples/EchartRadar';
import EchartBubble from '@/views/components/advanced/echart/examples/EchartBubble';
import EchartSankey from '@/views/components/advanced/echart/examples/EchartSankey';
import EchartCandle from '@/views/components/advanced/echart/examples/EchartCandle';

import Comp from '@/views/templates/Comp';
export default {
  components: {
    EchartDemo,
    EchartArea,
    EchartBar,
    EchartHBar,
    EchartEvents,
    EchartLine,
    EchartPie,
    EchartScatter,
    EchartMap,
    EchartGaussian,
    EchartFunnel,
    EchartRadar,
    EchartBubble,
    EchartSankey,
    EchartCandle,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-echart',
      headtitle: 'EChart',
      titles: [
        'Playground',
        'Events',
        'Bar',
        'Horizontal Bar',
        'Line',
        'Area',
        'Pie',
        'Scatter',
        'Map',
        'Gaussian',
        'Funnel',
        'Radar',
        'Bubble',
        'Sankey',
        'Candle'
      ],
    };
  },
  title: 'Ketchup | EChart',
};
</script>
