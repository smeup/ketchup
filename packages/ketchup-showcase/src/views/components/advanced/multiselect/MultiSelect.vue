<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <multi-select-demo></multi-select-demo>
    </template>
    <template v-slot:1>
      <multi-select-basic></multi-select-basic>
    </template>
  </comp>
</template>

<script>
import MultiSelectBasic from '@/views/components/advanced/multiselect/examples/MultiSelectBasic';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    MultiSelectBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-multi-select',
      headtitle: 'Multi select',
      titles: ['Playground', 'Basic usage'],
    };
  },
  title: 'Ketchup | Multi select',
};
</script>
