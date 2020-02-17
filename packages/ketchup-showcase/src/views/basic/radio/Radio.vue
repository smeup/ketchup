<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <radio-demo></radio-demo>
    </template>
    <template v-slot:1>
      <radio-basic></radio-basic>
    </template>
    <template v-slot:2>
      <radio-labels></radio-labels>
    </template>
    <template v-slot:3>
      <radio-disabled></radio-disabled>
    </template>
  </comp>
</template>

<script>
import RadioDemo from '@/views/basic/radio/examples/RadioDemo';
import RadioBasic from '@/views/basic/radio/examples/RadioBasic';
import RadioLabels from '@/views/basic/radio/examples/RadioLabels';
import RadioDisabled from '@/views/basic/radio/examples/RadioDisabled';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    RadioDemo,
    RadioBasic,
    RadioLabels,
    RadioDisabled,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/wup-radio',
      headtitle: 'Radio',
      titles: ['Playground', 'Basic usage', 'Adding labels', 'Disabled'],
    };
  },
};
</script>
