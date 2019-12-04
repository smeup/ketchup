<template>
  <comp :titles="titles">
    <template v-slot:0>
      <tooltip-basic></tooltip-basic>
    </template>
  </comp>
</template>

<script>
import TooltipBasic from '@/views/components/tooltip/examples/TooltipBasic';
import Comp from '@/views/components/page/templates/Comp';

export default {
  components: {
    TooltipBasic,
    Comp,
  },
  data() {
    return {
      titles: ['Tooltip'],
    };
  },
};
</script>
