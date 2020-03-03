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
  name: 'ButtonDemo',
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
        '<wup-button icon="widgets" id="demo-component" label="demo"></wup-button>',
      demoProps: [
        {
          prop: 'checked',
          description:
            'Icon button variant only. The toggable icon button state will be initialized to ON.',
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
          prop: 'flat',
          description: 'The button will be rendered as flat text.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'fullHeight',
          description:
            'The button will fill all available vertical space. Has no effect on icon buttons variant.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'fullWidth',
          description:
            'The button will fill all available horizontal space. Has no effect on icon buttons variant.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'icon',
          description:
            'The button will be rendered with the specified Material Design icon.',
          type: 'string',
          default: 'null',
          try: 'field',
        },
        {
          prop: 'iconColor',
          description:
            'Sets the color of the icon. When unset, it will be managed by the component.',
          type: 'string',
          default: 'null',
          try: 'field',
        },
        {
          prop: 'iconOff',
          description:
            'Toggable icon button variant only. By default, the off state will be displayed as an outlined version of the icon prop. By setting this prop with a Material Design icon, the off state will show this icon instead.',
          type: 'string',
          default: 'null',
          try: 'field',
        },
        {
          prop: 'label',
          description:
            "The button's text. If no value is specified, the button will render as an icon button, in this variant specifying an icon is mandatory.",
          type: 'string',
          default: 'null',
          try: 'field',
        },
        {
          prop: 'outlined',
          description: 'The button will be rendered with an outlined style.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'shaped',
          description: "The button's borders will be more rounded.",
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'toggable',
          description:
            'Icon button variant only. The icon button supports the toggable state, switching between ON and OFF.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'tooltip',
          description:
            'When set, this tooltip will be displayed on mouse over (using the HTML attribute title).',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'trailingIcon',
          description:
            'The button will display its associated icon after the text.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
      ],
      demoEvents: [
        {
          name: 'kupButtonClick',
          type: 'click',
        },
        {
          name: 'kupButtonFocus',
          type: 'focus',
        },
        {
          name: 'kupButtonBlur',
          type: 'blur',
        },
      ],
    };
  },
};
</script>
