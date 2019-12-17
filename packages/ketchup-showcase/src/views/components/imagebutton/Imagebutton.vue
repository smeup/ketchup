<template>
  <comp :titles="titles" :headtitle="headtitle">
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
      headtitle: 'Image button',
      titles: ['Basic usage'],
    };
  },
};
</script>
