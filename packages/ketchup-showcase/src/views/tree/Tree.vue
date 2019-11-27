<template>
  <comp :titles="titles">
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
import TreeBasic from '@/views/tree/examples/TreeBasic';
import TreeDynamicExpansion from '@/views/tree/examples/TreeDynamicExpansion';
import TreeTable from '@/views/tree/examples/TreeTable';
import Comp from '@/views/page/templates/Comp';

export default {
  components: {
    TreeBasic,
    TreeDynamicExpansion,
    TreeTable,
    Comp,
  },
  data() {
    return {
      titles: ['Tree', 'Dynamic expansion', 'Table format'],
    };
  },
};
</script>
