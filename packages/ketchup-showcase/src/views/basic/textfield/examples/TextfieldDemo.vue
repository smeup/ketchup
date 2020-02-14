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
      demoComp:
        '<wup-text-field icon="sentiment_satisfied_alt" initialvalue="Some text" label="Demo" id="demo-component"></wup-text-field>',
      demoProps: [
        {
          prop: 'disabled',
          description:
            'Sets the component to disabled state, making it not interactable.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'fullheight',
          description:
            'Sets the height of the component to fill all the available horizontal space given by its parent.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'fullwidth',
          description:
            'Sets the width of the component to fill all the available horizontal space given by its parent.',
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
          prop: 'helperwhenfocus',
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
          prop: 'initialvalue',
          description: 'Sets the initial text value of the component.',
          type: 'string',
          default: 'undefined',
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
        {
          prop: 'maxlength',
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
          prop: 'rounded',
          description: 'The text field will be rendered with shaped borders.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'textarea',
          description: 'The component will render as a textarea.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'trailingicon',
          description: 'The icon will be shown after the text.',
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
      ],
    };
  },
};
</script>
