<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <kup-tooltip-basic></kup-tooltip-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import KupTooltipBasic from '@/views/framework/kup-tooltip/examples/KupTooltipBasic';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    KupTooltipBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/managers/kup-tooltip',
      headtitle: 'KupTooltip',
      titles: ['What is it?'],
    };
  },
  title: 'Ketchup | KupTooltip',
};
</script>
