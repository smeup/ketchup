<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <demo
        :demoTabs="demoTabs"
        :demoComp="demoComp"
        :demoProps="demoProps"
        :demoEvents="demoEvents"
      ></demo>
      <switch-basic></switch-basic>
    </template>
    <template v-slot:1>
      <switch-labels></switch-labels>
    </template>
    <template v-slot:2>
      <switch-disabled></switch-disabled>
    </template>
  </comp>
</template>

<script>
import SwitchBasic from '@/views/basic/switch/examples/SwitchBasic';
import SwitchLabels from '@/views/basic/switch/examples/SwitchLabels';
import SwitchDisabled from '@/views/basic/switch/examples/SwitchDisabled';
import Comp from '@/views/advanced/page/templates/Comp';
import Demo from '@/views/advanced/page/templates/Demo';
export default {
  components: {
    SwitchBasic,
    SwitchLabels,
    SwitchDisabled,
    Comp,
    Demo,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/wup-switch',
      headtitle: 'Switch',
      titles: ['Basic usage', 'Adding labels', 'Disabled'],
      demoTabs: [
        {
          text: 'Props',
          icon: '',
          status: 'Active',
        },
        {
          text: 'Events',
          icon: '',
          status: '',
        },
        {
          text: 'HTML',
          icon: '',
          status: '',
        },
      ],
      demoComp: '<wup-switch id="demo-component"></wup-switch>',
      demoProps: [
        {
          prop: 'checked',
          description: 'Sets the component to checked state.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'disabled',
          description:
            'Sets the component to disabled state, making it not interactable.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'labelleft',
          description:
            'Displays the value of this prop on the left of the component as a label. Attribute labelleft must be null.',
          type: 'string',
          default: 'null',
          try: 'field',
        },
        {
          prop: 'labelright',
          description:
            'Displays the value of this prop on the right of the component as a label. Attribute labelright must be null.',
          type: 'string',
          default: 'null',
          try: 'field',
        },
      ],
      demoEvents: [
        {
          name: 'kupSwitchClick',
          type: 'click',
        },
        {
          name: 'kupSwitchChange',
          type: 'change',
        },
        {
          name: 'kupSwitchInput',
          type: 'input',
        },
        {
          name: 'kupSwitchFocus',
          type: 'focus',
        },
        {
          name: 'kupSwitchBlur',
          type: 'blur',
        },
      ],
    };
  },
};
</script>
