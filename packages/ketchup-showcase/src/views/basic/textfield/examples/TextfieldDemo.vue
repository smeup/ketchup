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
  name: 'TextfieldDemo',
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
      demoComp:
        '<wup-text-field icon="widgets" initial-value="Some text" label="Demo" id="demo-component"></wup-text-field>',
      demoProps: [
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
          prop: 'fullHeight',
          description:
            'Sets the height of the component to fill all the available horizontal space provided by its parent.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'fullWidth',
          description:
            'Sets the width of the component to fill all the available horizontal space provided by its parent.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'helper',
          description:
            'Its value will be shown as a help text below the field.',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'helperWhenFocused',
          description:
            'The helper will be shown only when the field is focused.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'icon',
          description:
            'The text-field will be rendered with the specified Material Design icon.',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'initialValue',
          description: 'Sets the initial text value of the component.',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'inputType',
          description:
            'The HTML type of the input element. It has no effect on text areas.',
          type: 'string',
          default: 'text',
          try: 'field',
        },
        {
          prop: 'label',
          description: 'The label of the field.',
          type: 'string',
          default: 'undefined',
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
        {
          prop: 'maxLength',
          description:
            'Sets the component max length to given characters and the helper will display a character counter.',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'outlined',
          description: 'Renders an outlined text field.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'shaped',
          description: 'The text field will be rendered with shaped borders.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'textArea',
          description: 'The component will render as a textarea.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'trailingIcon',
          description: 'The icon will be shown after the text.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'trailingLabel',
          description:
            'The label will be displayed to the left of the component.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
      ],
      demoEvents: [
        {
          name: 'kupTextFieldClick',
          type: 'click',
        },
        {
          name: 'kupTextFieldChange',
          type: 'change',
        },
        {
          name: 'kupTextFieldInput',
          type: 'input',
        },
        {
          name: 'kupTextFieldFocus',
          type: 'focus',
        },
        {
          name: 'kupTextFieldBlur',
          type: 'blur',
        },
        {
          name: 'kupTextFieldIconClick',
          type: 'click',
        },
      ],
    };
  },
};
</script>
