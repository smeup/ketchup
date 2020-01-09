<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
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
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-image',
      headtitle: 'Image',
      titles: ['Basic usage'],
    };
  },
};
</script>
