<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <switch-demo></switch-demo>
    </template>
    <template v-slot:1>
      <switch-basic></switch-basic>
    </template>
    <template v-slot:2>
      <switch-labels></switch-labels>
    </template>
    <template v-slot:3>
      <switch-disabled></switch-disabled>
    </template>
    <template v-slot:4>
      <switch-sizing></switch-sizing>
    </template>
  </comp>
</template>

<script>
import SwitchDemo from '@/views/components/basic/switch/examples/SwitchDemo';
import SwitchBasic from '@/views/components/basic/switch/examples/SwitchBasic';
import SwitchLabels from '@/views/components/basic/switch/examples/SwitchLabels';
import SwitchDisabled from '@/views/components/basic/switch/examples/SwitchDisabled';
import SwitchSizing from '@/views/components/basic/switch/examples/SwitchSizing';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    SwitchDemo,
    SwitchBasic,
    SwitchLabels,
    SwitchDisabled,
    SwitchSizing,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-switch',
      headtitle: 'Switch',
      titles: [
        'Playground',
        'Basic usage',
        'Adding labels',
        'Disabled',
        'Sizing',
      ],
    };
  },
  title: 'Ketchup | Switch',
};
</script>
