<template>
  <comp :titles="titles">
    <template v-slot:0>
      <menu-basic/>
    </template>
    <template v-slot:1>
      <menu-checkbox/>
    </template>
  </comp>
</template>

<script>
import MenuBasic from '@/views/components/menu/examples/MenuBasic';
import MenuCheckbox from '@/views/components/menu/examples/MenuCheckbox';
import Comp from '@/views/components/page/templates/Comp';

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
