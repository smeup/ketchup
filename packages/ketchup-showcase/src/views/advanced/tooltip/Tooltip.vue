<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <tooltip-demo></tooltip-demo>
    </template>
    <template v-slot:1>
      <tooltip-basic></tooltip-basic>
    </template>
    <template v-slot:2>
      <tooltip-box></tooltip-box>
    </template>
    <template v-slot:3>
      <tooltip-tree></tooltip-tree>
    </template>
    <template v-slot:4>
      <tooltip-data-table></tooltip-data-table>
    </template>
  </comp>
</template>

<script>
import TooltipBasic from '@/views/advanced/tooltip/examples/TooltipBasic';
import TooltipBox from '@/views/advanced/tooltip/examples/TooltipBox';
import TooltipTree from '@/views/advanced/tooltip/examples/TooltipTree';
import TooltipDataTable from '@/views/advanced/tooltip/examples/TooltipDataTable';
import TooltipDemo from '@/views/advanced/tooltip/examples/TooltipDemo';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    TooltipBasic,
    TooltipBox,
    TooltipTree,
    TooltipDataTable,
    TooltipDemo,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-tooltip',
      headtitle: 'Tooltip',
      titles: ['Demo','Basic usage', 'Box', 'Tree', 'Data Table'],
    };
  },
};
</script>
