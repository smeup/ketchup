<template>
  <div>
    <demo
      :demoTabs="demoTabs"
      :demoComp="demoComp"
      :demoProps="demoProps"
      :demoEvents="demoEvents"
      :demoData="demoData"
    ></demo>
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
      demoComp: '<wup-radio id="demo-component"></wup-radio>',
      demoProps: [
        {
          prop: 'data',
          description:
            'Object array containing the data of the radio list: value, label to be shown and status (if checked or not).',
          type: 'ComponentRadioElement[]',
          default: '[]',
          try: 'json',
        },
        {
          prop: 'customStyle',
          description:
            'Sets a custom style for the component by feeding this string into a <style> tag.',
          type: 'string',
          default: 'null',
          try: 'css',
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
      demoData: [
        {
          prop: 'data',
          value: [
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
          ],
        },
        {
          prop: 'name',
          value: 'radio-list',
        },
      ],
    };
  },
};
</script>
