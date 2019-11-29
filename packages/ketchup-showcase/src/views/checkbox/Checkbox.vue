<template>
  <comp :titles="titles">
    <template v-slot:0>
      <checkbox-basic></checkbox-basic>
    </template>
  </comp>
</template>

<script>
import CheckboxBasic from '@/views/checkbox/examples/CheckboxBasic';
import Comp from '@/views/page/templates/Comp';

export default {
  components: {
    CheckboxBasic,
    Comp,
  },

  data() {
    return {
      titles: ['Checkbox'],
    };
  },
};
</script>
