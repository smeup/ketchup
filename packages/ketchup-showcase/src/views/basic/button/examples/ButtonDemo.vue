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
  name: 'ButtonBasic',
  data() {
    return {
      items: [
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
        '<wup-button icon="sentiment_satisfied_alt" id="demo-component" label="demo"></wup-button>',
      demoProps: [
        {
          prop: 'label',
          description:
            "The button's text. If no value is specified, the button will render as an icon button, in this variant specifying an icon is mandatory.",
          type: 'string',
          default: 'null',
          try: 'field',
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
          prop: 'transparent',
          description: 'The button will be rendered with an outlined style.',
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
          prop: 'rounded',
          description: "The button's borders will be shaped.",
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
          prop: 'trailingicon',
          description:
            'The button will display its associated icon after the text.',
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
          prop: 'checked',
          description:
            'Icon button variant only. The toggable icon button state will be initialized to ON.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'iconoff',
          description:
            'Toggable icon button variant only. By default, the off state will be displayed as an outlined version of the icon prop. By setting this prop with a Material Design icon, the off state will show this icon instead.',
          type: 'string',
          default: 'null',
          try: 'field',
        },
      ],
      demoEvents: [
        {
          name: 'kupButtonClick',
          type: 'click',
        },
        {
          name: 'kupButtonChange',
          type: 'change',
        },
        {
          name: 'kupButtonInput',
          type: 'input',
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
