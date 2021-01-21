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
import DropdownButtonDemo from '@/views/basic/dropdownbutton/examples/DropdownButtonDemo';
import DropdownButtonBasic from '@/views/basic/dropdownbutton/examples/DropdownButtonBasic';
import DropdownButtonStyling from '@/views/basic/dropdownbutton/examples/DropdownButtonStyling';
import DropdownButtonDisabled from '@/views/basic/dropdownbutton/examples/DropdownButtonDisabled';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    DropdownButtonDemo,
    DropdownButtonBasic,
    DropdownButtonStyling,
    DropdownButtonDisabled,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-dropdown-button',
      headtitle: 'Dropdown Button',
      titles: ['Playground', 'Basic usage', 'Styling', 'Disabled'],
    };
  },
};
</script>
