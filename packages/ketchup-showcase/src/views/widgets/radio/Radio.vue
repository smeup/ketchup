<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <radio-basic></radio-basic>
    </template>
    <template v-slot:1>
      <radio-labels></radio-labels>
    </template>
    <template v-slot:2>
      <radio-disabled></radio-disabled>
    </template>
    <template v-slot:3>
      <radio-customization></radio-customization>
    </template>
  </comp>
</template>

<script>
import RadioBasic from '@/views/widgets/radio/examples/RadioBasic';
import RadioLabels from '@/views/widgets/radio/examples/RadioLabels';
import RadioDisabled from '@/views/widgets/radio/examples/RadioDisabled';
import RadioCustomization from '@/views/widgets/radio/examples/RadioCustomization';
import Comp from '@/views/components/page/templates/Comp';
export default {
  components: {
    RadioBasic,
    RadioLabels,
    RadioDisabled,
    RadioCustomization,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/wup-radio',
      headtitle: 'Radio',
      titles: ['Basic usage', 'Adding labels', 'Disabled', 'Customization'],
    };
  },
};
</script>
