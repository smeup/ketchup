<template>
  <comp :titles="titles">
    <template v-slot:0>
      <dash-basic></dash-basic>
    </template>
  </comp>
</template>

<script>
import DashBasic from '@/views/components/dash/examples/DashBasic';
import Comp from '@/views/components/page/templates/Comp';

export default {
  components: {
    DashBasic,
    Comp,
  },
  data() {
    return {
      titles: ['Dash'],
    };
  },
};
</script>
