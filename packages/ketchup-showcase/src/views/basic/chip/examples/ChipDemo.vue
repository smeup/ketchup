<template>
  <div>
    <demo :demoComp="demoComp" :demoEvents="demoEvents" :demoProps="demoProps" :demoTabs="demoTabs"></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'ChipDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kupChipClick',
          type: 'click',
        },
        {
          name: 'kupChipFocus',
          type: 'focus',
        },
        {
          name: 'kupChipBlur',
          type: 'blur',
        },
        {
          name: 'kupChipIconClick',
          type: 'click',
        },
      ],
      demoProps: [
        {
          prop: 'data',
          description:
            'Object array containing the data of the chips: value, icon, label to be shown and checked status.',
          type: 'ComponentChipElement[]',
          default: '[]',
          try: 'json',
        },
        {
          prop: 'customStyle',
          description:
            'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
          type: 'string',
          default: 'undefined',
          try: 'css',
        },
        {
          prop: 'type',
          description:
            'The type of chip. Available types: input, filter, choice or empty for default.',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
      ],
      demoTabs: [
        {
          text: 'Props',
          icon: '',
          active: true,
        },
        {
          text: 'Events',
          icon: '',
          active: false,
        },
        {
          text: 'HTML',
          icon: '',
          active: false,
        },
        {
          text: 'JSON',
          icon: '',
          active: false,
        },
        {
          text: 'CSS',
          icon: '',
          active: false,
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-chip');
  comp.data = [
    {
      value: '1_chip',
      icon: 'filter_1',
      label: 'First chip',
      checked: false,
    },
    {
      value: '2_chip',
      icon: 'filter_2',
      label: 'Second chip',
      checked: true,
    },
    {
      value: '3_chip',
      icon: 'filter_3',
      label: 'Third chip',
      checked: false,
    },
  ];
  comp.id = 'demo-component';
  return comp;
}
</script>
