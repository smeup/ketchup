<template>
  <comp :titles="titles">
    <template v-slot:0>
      <imagebutton-basic></imagebutton-basic>
    </template>
  </comp>
</template>

<script>
import ImagebuttonBasic from '@/views/components/imagebutton/examples/ImagebuttonBasic';
import Comp from '@/views/components/page/templates/Comp';

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
