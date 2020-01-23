<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <switch-basic></switch-basic>
    </template>
    <template v-slot:1>
      <switch-labels></switch-labels>
    </template>
    <template v-slot:2>
      <switch-disabled></switch-disabled>
    </template>
    <template v-slot:3>
      <switch-customization></switch-customization>
    </template>
  </comp>
</template>

<script>
import SwitchBasic from '@/views/basic/switch/examples/SwitchBasic';
import SwitchLabels from '@/views/basic/switch/examples/SwitchLabels';
import SwitchDisabled from '@/views/basic/switch/examples/SwitchDisabled';
import SwitchCustomization from '@/views/basic/switch/examples/SwitchCustomization';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    SwitchBasic,
    SwitchLabels,
    SwitchDisabled,
    SwitchCustomization,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/wup-switch',
      headtitle: 'Switch',
      titles: ['Basic usage', 'Adding labels', 'Disabled', 'Customization'],
    };
  },
};
</script>
