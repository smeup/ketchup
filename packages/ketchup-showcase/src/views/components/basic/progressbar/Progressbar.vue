<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <progressbar-demo></progressbar-demo>
    </template>
    <template v-slot:1>
      <progressbar-basic></progressbar-basic>
    </template>
    <template v-slot:2>
      <progressbar-styling></progressbar-styling>
    </template>
    <template v-slot:3>
      <progressbar-radial></progressbar-radial>
    </template>
  </comp>
</template>

<script>
import ProgressbarDemo from '@/views/components/basic/progressbar/examples/ProgressbarDemo';
import ProgressbarBasic from '@/views/components/basic/progressbar/examples/ProgressbarBasic';
import ProgressbarStyling from '@/views/components/basic/progressbar/examples/ProgressbarStyling';
import ProgressbarRadial from '@/views/components/basic/progressbar/examples/ProgressbarRadial';
import Comp from '@/views/templates/Comp';

export default {
  components: {
    ProgressbarDemo,
    ProgressbarBasic,
    ProgressbarStyling,
    ProgressbarRadial,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-progress-bar',
      headtitle: 'Progress bar',
      titles: ['Playground', ' Basic usage', 'Styling', 'Radial variant'],
    };
  },
  title: 'Ketchup | Progress bar',
};
</script>
