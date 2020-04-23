<template>
  <comp :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <customization-basic></customization-basic>
    </template>
    <template v-slot:1>
      <customization-examples></customization-examples>
    </template>
  </comp>
</template>

<script>
import CustomizationBasic from '@/views/css/customization/examples/CustomizationBasic';
import CustomizationExamples from '@/views/css/customization/examples/CustomizationExamples';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    CustomizationBasic,
    CustomizationExamples,
    Comp,
  },
  data() {
    return {
      headtitle: 'Customization',
      titles: ['Basic usage', 'Additional examples'],
    };
  },
};
</script>
