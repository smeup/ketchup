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
  name: 'RadioDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kupRadioClick',
          type: 'click',
        },
        {
          name: 'kupRadioChange',
          type: 'change',
        },
        {
          name: 'kupRadioInput',
          type: 'input',
        },
        {
          name: 'kupRadioFocus',
          type: 'focus',
        },
        {
          name: 'kupRadioBlur',
          type: 'blur',
        },
      ],
      demoProps: [
        {
          prop: 'customStyle',
          description:
            'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
          type: 'string',
          default: 'undefined',
          try: 'css',
        },
        {
          prop: 'data',
          description:
            'Object array containing the data of the radio list: value, label to be shown and status (if checked or not).',
          type: 'ComponentRadioElement[]',
          default: '[]',
          try: 'json',
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
          prop: 'leadingLabel',
          description:
            'The label will be displayed to the left of the component.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'name',
          description: "It's the name that binds the radio buttons together.",
          type: 'string',
          default: 'radio-list',
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
  let comp = document.createElement('kup-radio');
  comp.data = [
    {
      value: '1',
      label: 'First option',
      checked: true,
    },
    {
      value: '2',
      label: 'Second option',
      checked: false,
    },
  ];
  comp.id = 'demo-component';
  comp.name = 'radio-list';
  return comp;
}
</script>
