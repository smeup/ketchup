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
      <echart-line></echart-line>
    </template>
    <template v-slot:4>
      <echart-pie></echart-pie>
    </template>
    <template v-slot:5>
      <echart-scatter></echart-scatter>
    </template>
    <template v-slot:6>
      <echart-map></echart-map>
    </template>
    <template v-slot:7>
      <echart-gaussian></echart-gaussian>
    </template>
    <template v-slot:8>
      <echart-funnel></echart-funnel>
    </template>
  </comp>
</template>

<script>
import EchartDemo from '@/views/components/advanced/echart/examples/EchartDemo';
import EchartBar from '@/views/components/advanced/echart/examples/EchartBar';
import EchartEvents from '@/views/components/advanced/echart/examples/EchartEvents';
import EchartLine from '@/views/components/advanced/echart/examples/EchartLine';
import EchartPie from '@/views/components/advanced/echart/examples/EchartPie';
import EchartScatter from '@/views/components/advanced/echart/examples/EchartScatter';
import EchartMap from '@/views/components/advanced/echart/examples/EchartMap';
import EchartGaussian from '@/views/components/advanced/echart/examples/EchartGaussian';
import EchartFunnel from '@/views/components/advanced/echart/examples/EchartFunnel';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    EchartDemo,
    EchartBar,
    EchartEvents,
    EchartLine,
    EchartPie,
    EchartScatter,
    EchartMap,
    EchartGaussian,
    EchartFunnel,
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
        'Line',
        'Pie',
        'Scatter',
        'Map',
        'Gaussian',
        'Funnel'
      ],
    };
  },
  title: 'Ketchup | EChart',
};
</script>
