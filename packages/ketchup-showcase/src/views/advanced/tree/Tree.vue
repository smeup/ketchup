<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <tree-basic></tree-basic>
    </template>
    <template v-slot:1>
      <tree-dynamic-expansion></tree-dynamic-expansion>
    </template>
    <template v-slot:2>
      <tree-table></tree-table>
    </template>
  </comp>
</template>

<script>
import TreeBasic from '@/views/advanced/tree/examples/TreeBasic';
import TreeDynamicExpansion from '@/views/advanced/tree/examples/TreeDynamicExpansion';
import TreeTable from '@/views/advanced/tree/examples/TreeTable';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
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
      titles: ['Basic usage', 'Dynamic expansion', 'Table format'],
    };
  },
};
</script>
