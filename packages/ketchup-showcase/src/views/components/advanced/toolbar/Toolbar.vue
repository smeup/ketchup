<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <toolbar-basic></toolbar-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import Comp from '@/views/templates/Comp';
import ToolbarBasic from './examples/ToolbarBasic';

export default {
  components: {
    ToolbarBasic,
    Comp,
  },

  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-toolbar',
      headtitle: 'Toolbar',
      titles: ['Playground'],
    };
  },
  title: 'Ketchup | Toolbar',
};
</script>
