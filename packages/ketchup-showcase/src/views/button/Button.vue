<template>
  <comp :titles="titles">
    <template v-slot:0>
      <button-basic></button-basic>
    </template>
  </comp>
</template>

<script>
import ButtonBasic from '@/views/button/examples/ButtonBasic';
import Comp from '@/views/page/templates/Comp';

export default {
  components: {
    ButtonBasic,
    Comp,
  },
  data() {
    return {
      titles: ['Button'],
    };
  },
};
</script>
