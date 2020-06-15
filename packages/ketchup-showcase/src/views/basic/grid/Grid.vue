<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <grid-demo></grid-demo>
      </template>
    </comp>
  </div>
</template>

<script>
import GridDemo from '@/views/basic/grid/examples/GridDemo';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    GridDemo,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-grid',
      headtitle: 'Grid',
      titles: ['Playground'],
    };
  },
};
</script>
