<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <echarts-demo></echarts-demo>
    </template>
    <template v-slot:1>
      <echarts-bar></echarts-bar>
    </template>
    <template v-slot:2>
      <echarts-events></echarts-events>
    </template>
    <template v-slot:3>
      <echarts-line></echarts-line>
    </template>
    <template v-slot:4>
      <echarts-pie></echarts-pie>
    </template>
    <template v-slot:5>
      <echarts-scatter></echarts-scatter>
    </template>
  </comp>
</template>

<script>
import EchartsDemo from '@/views/advanced/echarts/examples/EchartsDemo';
import EchartsBar from '@/views/advanced/echarts/examples/EchartsBar';
import EchartsEvents from '@/views/advanced/echarts/examples/EchartsEvents';
import EchartsLine from '@/views/advanced/echarts/examples/EchartsLine';
import EchartsPie from '@/views/advanced/echarts/examples/EchartsPie';
import EchartsScatter from '@/views/advanced/echarts/examples/EchartsScatter';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    EchartsDemo,
    EchartsBar,
    EchartsEvents,
    EchartsLine,
    EchartsPie,
    EchartsScatter,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-echarts',
      headtitle: 'Echarts',
      titles: ['Playground', 'Bar', 'Events', 'Line', 'Pie', 'Scatter'],
    };
  },
};
</script>
