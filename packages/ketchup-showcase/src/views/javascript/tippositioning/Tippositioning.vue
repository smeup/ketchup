<template>
  <comp :titles="titles">
    <template v-slot:0>
      <tippositioning-basic></tippositioning-basic>
    </template>
    <template v-slot:1>
      <tippositioning-image></tippositioning-image>
    </template>
  </comp>
</template>

<script>
import TippositioningBasic from '@/views/javascript/tippositioning/examples/TippositioningBasic';
import TippositioningImage from '@/views/javascript/tippositioning/examples/TippositioningImage';
import Comp from '@/views/components/page/templates/Comp';

export default {
  components: {
    TippositioningBasic,
    TippositioningImage,
    Comp,
  },
  data() {
    return {
      titles: ['Tip positioning', 'On an image'],
    };
  },
};
</script>
