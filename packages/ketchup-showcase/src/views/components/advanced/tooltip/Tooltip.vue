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
import TooltipBasic from '@/views/components/advanced/tooltip/examples/TooltipBasic';
import TooltipBox from '@/views/components/advanced/tooltip/examples/TooltipBox';
import TooltipTree from '@/views/components/advanced/tooltip/examples/TooltipTree';
import TooltipDataTable from '@/views/components/advanced/tooltip/examples/TooltipDataTable';
import TooltipDemo from '@/views/components/advanced/tooltip/examples/TooltipDemo';
import Comp from '@/views/templates/Comp';

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
      titles: ['Playground', 'Basic usage', 'Box', 'Tree', 'Data Table'],
    };
  },
  title: 'Ketchup | Tooltip',
};
</script>
