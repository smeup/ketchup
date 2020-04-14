<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <progressbar-demo></progressbar-demo>
    </template>
    <template v-slot:1>
      <progressbar-basic></progressbar-basic>
    </template>
  </comp>
</template>

<script>
import ProgressbarDemo from '@/views/basic/progressbar/examples/ProgressbarDemo';
import ProgressbarBasic from '@/views/basic/progressbar/examples/ProgressbarBasic';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    ProgressbarDemo,
    ProgressbarBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-progress-bar',
      headtitle: 'Progress bar',
      titles: ['Playground', ' Basic usage'],
    };
  },
};
</script>
