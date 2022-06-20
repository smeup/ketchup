<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <kup-tooltip-basic></kup-tooltip-basic>
      </template>
      <template v-slot:1>
        <kup-tooltip-features></kup-tooltip-features>
      </template>
    </comp>
  </div>
</template>

<script>
import KupTooltipBasic from '@/views/framework/kup-tooltip/examples/KupTooltipBasic';
import KupTooltipFeatures from '@/views/framework/kup-tooltip/examples/KupTooltipFeatures';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    KupTooltipBasic,
    KupTooltipFeatures,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/managers/kup-tooltip',
      headtitle: 'KupTooltip',
      titles: ['What is it?', 'Features'],
    };
  },
  title: 'Ketchup | KupTooltip',
};
</script>
