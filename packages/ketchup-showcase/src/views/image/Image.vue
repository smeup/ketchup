<template>
  <comp :titles="titles">
    <template v-slot:0>
      <image-basic></image-basic>
    </template>
  </comp>
</template>

<script>
import ImageBasic from '@/views/image/examples/ImageBasic';
import Comp from '@/views/page/templates/Comp';

export default {
  components: {
    ImageBasic,
    Comp,
  },
  data() {
    return {
      titles: ['Image'],
    };
  },
};
</script>
