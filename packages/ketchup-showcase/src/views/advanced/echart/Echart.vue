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
  </comp>
</template>

<script>
import EchartDemo from '@/views/advanced/echart/examples/EchartDemo';
import EchartBar from '@/views/advanced/echart/examples/EchartBar';
import EchartEvents from '@/views/advanced/echart/examples/EchartEvents';
import EchartLine from '@/views/advanced/echart/examples/EchartLine';
import EchartPie from '@/views/advanced/echart/examples/EchartPie';
import EchartScatter from '@/views/advanced/echart/examples/EchartScatter';
import EchartMap from '@/views/advanced/echart/examples/EchartMap';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    EchartDemo,
    EchartBar,
    EchartEvents,
    EchartLine,
    EchartPie,
    EchartScatter,
    EchartMap,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-echart',
      headtitle: 'Echart',
      titles: ['Playground', 'Events', 'Bar', 'Line', 'Pie', 'Scatter', 'Map'],
    };
  },
};
</script>
