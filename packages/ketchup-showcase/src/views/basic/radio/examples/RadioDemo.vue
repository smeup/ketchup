<template>
  <div>
    <demo :demoTabs="demoTabs" :demoComp="demoComp" :demoProps="demoProps" :demoEvents="demoEvents"></demo>
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
      demoComp: '<wup-radio id="demo-component"></wup-radio>',
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
    };
  },
};
</script>
