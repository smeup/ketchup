<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <textfield-demo></textfield-demo>
    </template>
    <template v-slot:1>
      <textfield-basic></textfield-basic>
    </template>
    <template v-slot:2>
      <textfield-styling></textfield-styling>
    </template>
    <template v-slot:3>
      <textfield-labels></textfield-labels>
    </template>
    <template v-slot:4>
      <textfield-textarea-variant></textfield-textarea-variant>
    </template>
    <template v-slot:5>
      <textfield-disabled></textfield-disabled>
    </template>
  </comp>
</template>

<script>
import TextfieldDemo from '@/views/components/basic/textfield/examples/TextfieldDemo';
import TextfieldBasic from '@/views/components/basic/textfield/examples/TextfieldBasic';
import TextfieldStyling from '@/views/components/basic/textfield/examples/TextfieldStyling';
import TextfieldLabels from '@/views/components/basic/textfield/examples/TextfieldLabels';
import TextfieldDisabled from '@/views/components/basic/textfield/examples/TextfieldDisabled';
import TextfieldTextareaVariant from '@/views/components/basic/textfield/examples/TextfieldTextareaVariant';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    TextfieldDemo,
    TextfieldBasic,
    TextfieldStyling,
    TextfieldLabels,
    TextfieldDisabled,
    TextfieldTextareaVariant,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-text-field',
      headtitle: 'Text Field',
      titles: [
        'Playground',
        'Basic usage',
        'Styling',
        'Adding labels',
        'Text area variant',
        'Disabled',
      ],
    };
  },
  title: 'Ketchup | Text field',
};
</script>
