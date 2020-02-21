<template>
  <div>
    <demo
      :demoTabs="demoTabs"
      :demoComp="demoComp"
      :demoProps="demoProps"
      :demoEvents="demoEvents"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'CheckboxDemo',
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
          text: 'CSS',
          icon: '',
          active: false,
        },
      ],
      demoComp: '<wup-checkbox id="demo-component"></wup-checkbox>',
      demoProps: [
        {
          prop: 'checked',
          description: 'Sets the component to checked state.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
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
          prop: 'indeterminate',
          description: 'Sets the component to an indeterminate state.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'label',
          description: 'Displays a label.',
          type: 'string',
          default: 'null',
          try: 'field',
        },
        {
          prop: 'leadingLabel',
          description:
            'The label will be displayed to the left of the component.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
      ],
      demoEvents: [
        {
          name: 'kupCheckboxClick',
          type: 'click',
        },
        {
          name: 'kupCheckboxChange',
          type: 'change',
        },
        {
          name: 'kupCheckboxInput',
          type: 'input',
        },
        {
          name: 'kupCheckboxFocus',
          type: 'focus',
        },
        {
          name: 'kupCheckboxBlur',
          type: 'blur',
        },
      ],
    };
  },
};
</script>
