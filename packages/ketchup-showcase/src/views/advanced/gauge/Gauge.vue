<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <gauge-usage></gauge-usage>
      </template>
    </comp>
  </div>
</template>

<script>
import GaugeUsage from './examples/GaugeUsage';
import Comp from '../page/templates/Comp';
export default {
  components: {
    GaugeUsage,
    Comp,
  },

  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-gauge',
      headtitle: 'Gauge',
      titles: ['Usage'],
    };
  },
};
</script>
