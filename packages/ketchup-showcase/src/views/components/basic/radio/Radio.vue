<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <radio-demo></radio-demo>
    </template>
    <template v-slot:1>
      <radio-basic></radio-basic>
    </template>
    <template v-slot:2>
      <radio-styling></radio-styling>
    </template>
    <template v-slot:3>
      <radio-disabled></radio-disabled>
    </template>
  </comp>
</template>

<script>
import RadioDemo from '@/views/components/basic/radio/examples/RadioDemo';
import RadioBasic from '@/views/components/basic/radio/examples/RadioBasic';
import RadioStyling from '@/views/components/basic/radio/examples/RadioStyling';
import RadioDisabled from '@/views/components/basic/radio/examples/RadioDisabled';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    RadioDemo,
    RadioBasic,
    RadioStyling,
    RadioDisabled,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-radio',
      headtitle: 'Radio',
      titles: ['Playground', 'Basic usage', 'Styling', 'Disabled'],
    };
  },
  title: 'Ketchup | Radio',
};
</script>
