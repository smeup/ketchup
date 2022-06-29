<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <family-tree-demo></family-tree-demo>
      </template>
      <template v-slot:1>
        <family-tree-basic></family-tree-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import FamilyTreeDemo from '@/views/components/advanced/familytree/examples/FamilyTreeDemo';
import FamilyTreeBasic from '@/views/components/advanced/familytree/examples/FamilyTreeBasic';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    FamilyTreeDemo,
    FamilyTreeBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-family-tree',
      headtitle: 'Family tree',
      titles: ['Playground', 'Basic usage'],
    };
  },
  title: 'Ketchup | Family tree',
};
</script>
