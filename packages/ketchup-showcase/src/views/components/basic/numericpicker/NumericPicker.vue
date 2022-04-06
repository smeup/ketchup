<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <numeric-picker-demo></numeric-picker-demo>
      </template>
      <template v-slot:1>
        <numeric-picker-basic></numeric-picker-basic>
      </template>
      <template v-slot:2>
        <numeric-picker-standard></numeric-picker-standard>
      </template>
    </comp>
  </div>
</template>

<script>
import NumericPickerDemo from '@/views/components/basic/numericpicker/examples/NumericPickerDemo';
import NumericPickerBasic from '@/views/components/basic/numericpicker/examples/NumericPickerBasic';
import NumericPickerStandard from '@/views/components/basic/numericpicker/examples/NumericPickerStandard';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    NumericPickerDemo,
    NumericPickerBasic,
    NumericPickerStandard,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-numeric-picker',
      headtitle: 'Numeric Picker',
      titles: ['Playground', 'Basic usage', 'Standard'],
    };
  },
  title: 'Ketchup | Numeric picker',
};
</script>
