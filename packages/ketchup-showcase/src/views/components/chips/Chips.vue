<template>
  <comp :titles="titles">
    <template v-slot:0>
      <chips-basic></chips-basic>
    </template>
  </comp>
</template>

<script>
import ChipsBasic from '@/views/components/chips/examples/ChipsBasic';
import Comp from '@/views/components/page/templates/Comp';

export default {
  components: {
    ChipsBasic,
    Comp,
  },
  data() {
    return {
      titles: ['Chips'],
    };
  },
};
</script>
