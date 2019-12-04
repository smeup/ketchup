<template>
  <comp :titles="titles">
    <template v-slot:0>
      <chips-basic></chips-basic>
    </template>
    <template v-slot:1>
      <chips-knowledge></chips-knowledge>
    </template>
  </comp>
</template>

<script>
import ChipsBasic from '@/views/components/chips/examples/ChipsBasic';
import ChipsKnowledge from '@/views/components/chips/examples/ChipsKnowledge';
import Comp from '@/views/components/page/templates/Comp';

export default {
  components: {
    ChipsBasic,
    ChipsKnowledge,
    Comp,
  },
  data() {
    return {
      titles: ['Chips', 'Chips knowledge'],
    };
  },
};
</script>
