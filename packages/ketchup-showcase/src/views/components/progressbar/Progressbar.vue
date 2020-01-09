<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <progressbar-basic></progressbar-basic>
    </template>
  </comp>
</template>

<script>
import ProgressbarBasic from '@/views/components/progressbar/examples/ProgressbarBasic';
import Comp from '@/views/components/page/templates/Comp';

export default {
  components: {
    ProgressbarBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-progress-bar',
      headtitle: 'Progress bar',
      titles: ['Basic usage'],
    };
  },
};
</script>
