<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <grid-demo></grid-demo>
      </template>
      <template v-slot:1>
        <grid-basic></grid-basic>
      </template>
      <template v-slot:2>
        <grid-singleline></grid-singleline>
      </template>
    </comp>
  </div>
</template>

<script>
import GridDemo from '@/views/basic/grid/examples/GridDemo';
import GridBasic from '@/views/basic/grid/examples/GridBasic';
import GridSingleline from '@/views/basic/grid/examples/GridSingleline';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    GridDemo,
    GridBasic,
    GridSingleline,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-grid',
      headtitle: 'Grid',
      titles: ['Playground', 'Basic usage', 'Single line'],
    };
  },
};
</script>
