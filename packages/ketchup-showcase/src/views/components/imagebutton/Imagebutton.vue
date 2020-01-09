<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
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
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/fields/kup-image-button',
      headtitle: 'Image button',
      titles: ['Basic usage'],
    };
  },
};
</script>
