<template>
  <comp :titles="titles">
    <template v-slot:0>
      <progressbar-basic></progressbar-basic>
    </template>
  </comp>
</template>

<script>
import ProgressbarBasic from '@/views/progressbar/examples/ProgressbarBasic';
import Comp from '@/views/page/templates/Comp';

export default {
  components: {
    ProgressbarBasic,
    Comp,
  },
  data() {
    return {
      titles: ['Progress Bar'],
    };
  },
};
</script>
