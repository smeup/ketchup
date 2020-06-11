<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <layout-demo></layout-demo>
      </template>
    </comp>
  </div>
</template>

<script>
import LayoutDemo from '@/views/basic/layout/examples/LayoutDemo';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    LayoutDemo,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-layout',
      headtitle: 'Layout',
      titles: ['Playground'],
    };
  },
};
</script>
