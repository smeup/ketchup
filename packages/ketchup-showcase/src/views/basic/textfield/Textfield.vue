<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
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
import TextfieldBasic from '@/views/basic/textfield/examples/TextfieldBasic';
import TextfieldStyling from '@/views/basic/textfield/examples/TextfieldStyling';
import TextfieldLabels from '@/views/basic/textfield/examples/TextfieldLabels';
import TextfieldDisabled from '@/views/basic/textfield/examples/TextfieldDisabled';
import TextfieldTextareaVariant from '@/views/basic/textfield/examples/TextfieldTextareaVariant';
import TextfieldCustomization from '@/views/basic/textfield/examples/TextfieldCustomization';
import Comp from '@/views/advanced/page/templates/Comp';
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
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/wup-text-field',
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
