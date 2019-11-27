<template>
  <comp :titles="titles">
    <template v-slot:0>
      <imagebutton-basic></imagebutton-basic>
    </template>
  </comp>
</template>

<script>
import ImagebuttonBasic from '@/views/imagebutton/examples/ImagebuttonBasic';
import Comp from '@/views/page/templates/Comp';

export default {
  components: {
    ImagebuttonBasic,
    Comp,
  },
  data() {
    return {
      titles: ['Image Button'],
    };
  },
};
</script>
