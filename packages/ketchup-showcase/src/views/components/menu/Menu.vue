<template>
  <comp :titles="titles">
    <template v-slot:0>
      <menu-basic/>
    </template>
  </comp>
</template>

<script>
import MenuBasic from '@/views/components/menu/examples/MenuBasic';
import Comp from '@/views/components/page/templates/Comp';

export default {
  components: {
    MenuBasic,
    Comp,
  },
  data() {
    return {
      titles: ['Menu basics'],
    };
  },
};
</script>
