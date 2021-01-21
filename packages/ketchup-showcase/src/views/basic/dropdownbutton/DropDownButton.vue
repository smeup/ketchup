<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <dropdown-button-demo></dropdown-button-demo>
    </template>
    <template v-slot:1>
      <dropdown-button-basic></dropdown-button-basic>
    </template>
    <template v-slot:2>
      <dropdown-button-styling></dropdown-button-styling>
    </template>
    <template v-slot:3>
      <dropdown-button-disabled></dropdown-button-disabled>
    </template>
  </comp>
</template>

<script>
import DropDownButtonDemo from '@/views/basic/dropdownbutton/examples/DropDownButtonDemo';
import DropDownButtonBasic from '@/views/basic/dropdownbutton/examples/DropDownButtonBasic';
import DropDownButtonStyling from '@/views/basic/dropdownbutton/examples/DropDownButtonStyling';
import DropDownButtonDisabled from '@/views/basic/dropdownbutton/examples/DropDownButtonDisabled';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    DropDownButtonDemo,
    DropDownButtonBasic,
    DropDownButtonStyling,
    DropDownButtonDisabled,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-dropdown-button',
      headtitle: 'DropDownButton',
      titles: ['Playground', 'Basic usage', 'Styling', 'Disabled'],
    };
  },
};
</script>
