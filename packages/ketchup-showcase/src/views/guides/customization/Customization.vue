<template>
  <comp :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <customization-basic></customization-basic>
    </template>
    <template v-slot:1>
      <customization-variables></customization-variables>
    </template>
    <template v-slot:2>
      <customization-examples></customization-examples>
    </template>
  </comp>
</template>

<script>
import CustomizationBasic from '@/views/guides/customization/examples/CustomizationBasic';
import CustomizationVariables from '@/views/guides/customization/examples/CustomizationVariables';
import CustomizationExamples from '@/views/guides/customization/examples/CustomizationExamples';
import Comp from '@/views/templates/Comp';

export default {
  components: {
    CustomizationBasic,
    CustomizationVariables,
    CustomizationExamples,
    Comp,
  },
  data() {
    return {
      headtitle: 'Customization',
      titles: ['customStyle prop', 'Using variables', 'Additional examples'],
    };
  },
  title: 'Ketchup | CSS Customization',
};
</script>
