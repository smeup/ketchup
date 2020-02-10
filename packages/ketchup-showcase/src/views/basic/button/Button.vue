<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <demo
        :items="demoTabs"
        :demoComp="demoComp"
        :demoProps="demoProps"
        :demoEvents="demoEvents"
        :hasHTML="hasHTML"
        :hasJSON="hasJSON"
      ></demo>
      <button-basic></button-basic>
    </template>
    <template v-slot:1>
      <button-styling></button-styling>
    </template>
    <template v-slot:2>
      <button-icon-variant></button-icon-variant>
    </template>
    <template v-slot:3>
      <button-disabled></button-disabled>
    </template>
  </comp>
</template>

<script>
import ButtonBasic from '@/views/basic/button/examples/ButtonBasic';
import ButtonStyling from '@/views/basic/button/examples/ButtonStyling';
import ButtonDisabled from '@/views/basic/button/examples/ButtonDisabled';
import ButtonIconVariant from '@/views/basic/button/examples/ButtonIconVariant';
import Comp from '@/views/advanced/page/templates/Comp';
import Demo from '@/views/advanced/page/templates/Demo';
export default {
  components: {
    ButtonBasic,
    ButtonStyling,
    ButtonDisabled,
    ButtonIconVariant,
    Comp,
    Demo,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/wup-button',
      headtitle: 'Button',
      titles: ['Basic usage', 'Styling', 'Icon button variant', 'Disabled'],
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
          refId: 'onkupButtonClick',
        },
        {
          name: 'kupButtonChange',
          type: 'change',
          refId: 'onkupButtonChange',
        },
        {
          name: 'kupButtonInput',
          type: 'input',
          refId: 'onkupButtonInput',
        },
        {
          name: 'kupButtonFocus',
          type: 'focus',
          refId: 'onkupButtonFocus',
        },
        {
          name: 'kupButtonBlur',
          type: 'blur',
          refId: 'onkupButtonBlur',
        },
      ],
      hasHTML: true,
      hasJSON: false,
    };
  },
};
</script>
