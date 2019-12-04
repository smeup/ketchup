<template>
  <comp :titles="titles">
    <template v-slot:0>
      <button-basic></button-basic>
    </template>
  </comp>
</template>

<script>
import ButtonBasic from '@/views/components/button/examples/ButtonBasic';
import Comp from '@/views/components/page/templates/Comp';

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
