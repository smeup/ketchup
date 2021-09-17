<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <tooltip-basic></tooltip-basic>
    </template>
    <template v-slot:1>
      <tooltip-box></tooltip-box>
    </template>
    <template v-slot:2>
      <tooltip-tree></tooltip-tree>
    </template>
  </comp>
</template>

<script>
import TooltipBasic from '@/views/advanced/tooltip/examples/TooltipBasic';
import TooltipBox from '@/views/advanced/tooltip/examples/TooltipBox';
import TooltipTree from '@/views/advanced/tooltip/examples/TooltipTree';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    TooltipBasic,
    TooltipBox,
    TooltipTree,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-tooltip',
      headtitle: 'Tooltip',
      titles: ['Basic usage', 'Box','Tree'],
    };
  },
};
</script>
