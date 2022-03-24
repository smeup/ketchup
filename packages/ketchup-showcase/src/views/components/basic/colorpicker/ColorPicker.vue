<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <color-picker-demo></color-picker-demo>
    </template>
    <template v-slot:1>
      <color-picker-basic></color-picker-basic>
    </template>
    <template v-slot:2>
      <color-picker-disabled></color-picker-disabled>
    </template>
  </comp>
</template>

<script>
import ColorPickerDemo from '@/views/components/basic/colorpicker/examples/ColorPickerDemo';
import ColorPickerBasic from '@/views/components/basic/colorpicker/examples/ColorPickerBasic';
import ColorPickerDisabled from '@/views/components/basic/colorpicker/examples/ColorPickerDisabled';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    ColorPickerDemo,
    ColorPickerBasic,
    ColorPickerDisabled,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-color-picker',
      headtitle: 'Color Picker',
      titles: ['Playground', 'Basic usage', 'Disabled'],
    };
  },
  title: 'Ketchup | Color picker',
};
</script>
