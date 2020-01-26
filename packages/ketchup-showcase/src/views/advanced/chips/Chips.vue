<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <chips-basic></chips-basic>
    </template>
    <template v-slot:1>
      <chips-knowledge></chips-knowledge>
    </template>
  </comp>
</template>

<script>
import ChipsBasic from '@/views/advanced/chips/examples/ChipsBasic';
import ChipsKnowledge from '@/views/advanced/chips/examples/ChipsKnowledge';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    ChipsBasic,
    ChipsKnowledge,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-chip',
      headtitle: 'Chips',
      titles: ['Basic usage', 'Chips knowledge'],
    };
  },
};
</script>
