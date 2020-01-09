<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
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
      giturl:
        'https://github.com/smeup/ketchup/blob/develop/packages/ketchup/src/utils/recalc-position.ts',
      headtitle: 'Tip positioning',
      titles: ['Basic usage', 'On an image'],
    };
  },
};
</script>
