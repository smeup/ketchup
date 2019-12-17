<template>
  <comp :titles="titles" :headtitle="headtitle">
    <template v-slot:0>
      <image-basic></image-basic>
    </template>
  </comp>
</template>

<script>
import ImageBasic from '@/views/components/image/examples/ImageBasic';
import Comp from '@/views/components/page/templates/Comp';

export default {
  components: {
    ImageBasic,
    Comp,
  },
  data() {
    return {
      headtitle: 'Image',
      titles: ['Basic usage'],
    };
  },
};
</script>
