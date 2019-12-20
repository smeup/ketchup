<template>
  <comp :titles="titles" :headtitle="headtitle">
    <template v-slot:0>
      <textfield-basic></textfield-basic>
    </template>
    <template v-slot:1>
      <textfield-styling></textfield-styling>
    </template>
    <template v-slot:2>
      <textfield-labels></textfield-labels>
    </template>
    <template v-slot:3>
      <textfield-textarea-variant></textfield-textarea-variant>
    </template>
    <template v-slot:4>
      <textfield-disabled></textfield-disabled>
    </template>
    <template v-slot:5>
      <textfield-customization></textfield-customization>
    </template>
  </comp>
</template>

<script>
import TextfieldBasic from '@/views/widgets/textfield/examples/TextfieldBasic';
import TextfieldStyling from '@/views/widgets/textfield/examples/TextfieldStyling';
import TextfieldLabels from '@/views/widgets/textfield/examples/TextfieldLabels';
import TextfieldDisabled from '@/views/widgets/textfield/examples/TextfieldDisabled';
import TextfieldTextareaVariant from '@/views/widgets/textfield/examples/TextfieldTextareaVariant';
import TextfieldCustomization from '@/views/widgets/textfield/examples/TextfieldCustomization';
import Comp from '@/views/components/page/templates/Comp';
export default {
  components: {
    TextfieldBasic,
    TextfieldStyling,
    TextfieldLabels,
    TextfieldDisabled,
    TextfieldTextareaVariant,
    TextfieldCustomization,
    Comp,
  },
  data() {
    return {
      headtitle: 'Text Field',
      titles: [
        'Basic usage',
        'Styling',
        'Adding labels',
        'Text area variant',
        'Disabled',
        'Customization',
      ],
    };
  },
};
</script>
