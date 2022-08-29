<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <family-tree-demo></family-tree-demo>
      </template>
      <template v-slot:1>
        <family-tree-basic></family-tree-basic>
      </template>
      <template v-slot:2>
        <family-tree-stacked></family-tree-stacked>
      </template>
      <template v-slot:3>
        <family-tree-layout></family-tree-layout>
      </template>
      <template v-slot:4>
        <family-tree-staff></family-tree-staff>
      </template>
    </comp>
  </div>
</template>

<script>
import FamilyTreeDemo from '@/views/components/advanced/familytree/examples/FamilyTreeDemo';
import FamilyTreeBasic from '@/views/components/advanced/familytree/examples/FamilyTreeBasic';
import FamilyTreeLayout from '@/views/components/advanced/familytree/examples/FamilyTreeLayout';
import FamilyTreeStacked from '@/views/components/advanced/familytree/examples/FamilyTreeStacked';
import FamilyTreeStaff from '@/views/components/advanced/familytree/examples/FamilyTreeStaff';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    FamilyTreeDemo,
    FamilyTreeBasic,
    FamilyTreeLayout,
    FamilyTreeStacked,
    FamilyTreeStaff,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-family-tree',
      headtitle: 'Family tree',
      titles: [
        'Playground',
        'Basic usage',
        'Stacked leaves',
        'With layout',
        'Staff nodes',
      ],
    };
  },
  title: 'Ketchup | Family tree',
};
</script>
