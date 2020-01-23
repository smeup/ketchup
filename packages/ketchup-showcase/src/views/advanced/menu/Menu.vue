<template>
  <comp :titles="titles">
    <template v-slot:0>
      <menu-basic />
    </template>
    <template v-slot:1>
      <menu-checkbox />
    </template>
  </comp>
</template>

<script>
import MenuBasic from '@/views/advanced/menu/examples/MenuBasic';
import MenuCheckbox from '@/views/advanced/menu/examples/MenuCheckbox';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    MenuBasic,
    MenuCheckbox,
    Comp,
  },
  data() {
    return {
      titles: ['Menu basics', 'Checkbox menu'],
    };
  },
};
</script>
