<template>
  <comp :titles="titles">
    <template v-slot:0>
      <checkbox-basic></checkbox-basic>
    </template>
  </comp>
</template>

<script>
import CheckboxBasic from '@/views/components/checkbox/examples/CheckboxBasic';
import Comp from '@/views/components/page/templates/Comp';

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
