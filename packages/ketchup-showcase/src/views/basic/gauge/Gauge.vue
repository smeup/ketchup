<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <gauge-demo></gauge-demo>
      </template>
      <template v-slot:1>
        <gauge-basic></gauge-basic>
      </template>
      <template v-slot:2>
        <gauge-styling></gauge-styling>
      </template>
    </comp>
  </div>
</template>

<script>
import GaugeDemo from '@/views/basic/gauge/examples/GaugeDemo';
import GaugeBasic from '@/views/basic/gauge/examples/GaugeBasic';
import GaugeStyling from '@/views/basic/gauge/examples/GaugeStyling';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    GaugeDemo,
    GaugeBasic,
    GaugeStyling,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-gauge',
      headtitle: 'Gauge',
      titles: ['Playground', 'Basic usage', 'Styling'],
    };
  },
};
</script>
