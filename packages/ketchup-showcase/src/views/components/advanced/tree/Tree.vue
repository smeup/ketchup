<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <tree-demo></tree-demo>
    </template>
    <template v-slot:1>
      <tree-basic></tree-basic>
    </template>
    <template v-slot:2>
      <tree-dynamic-expansion></tree-dynamic-expansion>
    </template>
    <template v-slot:3>
      <tree-table></tree-table>
    </template>
  </comp>
</template>

<script>
import TreeDemo from '@/views/components/advanced/tree/examples/TreeDemo';
import TreeBasic from '@/views/components/advanced/tree/examples/TreeBasic';
import TreeDynamicExpansion from '@/views/components/advanced/tree/examples/TreeDynamicExpansion';
import TreeTable from '@/views/components/advanced/tree/examples/TreeTable';
import Comp from '@/views/templates/Comp';

export default {
  components: {
    TreeDemo,
    TreeBasic,
    TreeDynamicExpansion,
    TreeTable,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-tree',
      headtitle: 'Tree',
      titles: [
        'Playground',
        'Basic usage',
        'Dynamic expansion',
        'Table format',
      ],
    };
  },
  title: 'Ketchup | Tree',
};
</script>
