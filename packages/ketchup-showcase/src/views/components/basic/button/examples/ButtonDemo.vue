<template>
  <div>
    <demo
      :demoClasses="demoClasses"
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoMethods="demoMethods"
      :demoProps="demoProps"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'ButtonDemo',
  data() {
    return {
      demoClasses: [
        {
          class: 'kup-danger',
          description:
            'The component will be rendered using the danger color of the app (needs a new render to be effective).',
        },
        {
          class: 'kup-full-height',
          description:
            'The button will fill all the available vertical space (needs a new render to be effective).',
        },
        {
          class: 'kup-full-width',
          description:
            'The button will fill all the available horizontal space (needs a new render to be effective).',
        },
        {
          class: 'kup-info',
          description:
            'The component will be rendered using the info color of the app (needs a new render to be effective).',
        },
        {
          class: 'kup-large',
          description:
            'The button will have an increased size (needs a new render to be effective).',
        },
        {
          class: 'kup-pulsating',
          description:
            'In case of a toggable button, when it is toggled the button will feature a pulsating effect (needs a new render to be effective).',
        },
        {
          class: 'kup-secondary',
          description:
            'The component will be rendered using the secondary color of the app (needs a new render to be effective).',
        },
        {
          class: 'kup-shaped',
          description:
            'The borders of the button will be shaped (needs a new render to be effective).',
        },
        {
          class: 'kup-slim',
          description:
            'The button will have a decreased size (needs a new render to be effective).',
        },
        {
          class: 'kup-success',
          description:
            'The component will be rendered using the success color of the app (needs a new render to be effective).',
        },
        {
          class: 'kup-warning',
          description:
            'The component will be rendered using the warning color of the app (needs a new render to be effective).',
        },
      ],
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-button-click',
          type: 'click',
        },
        {
          name: 'kup-button-focus',
          type: 'focus',
        },
        {
          name: 'kup-button-blur',
          type: 'blur',
        },
      ],
      demoMethods: [
        {
          name: 'getProps',
          description:
            "Returns the props' values of the component. When invoked giving true as the only argument, returns the props descriptions instead.",
        },
        {
          name: 'refresh',
          description:
            'This method is used to trigger a new render of the component.',
        },
        {
          name: 'setProps',
          description: 'Sets the props to the component.',
        },
      ],
      demoProps: [
        {
          prop: 'buttonType',
          description: 'Sets the type of the button.',
          type: 'string',
          default: 'null',
          try: 'field',
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
          prop: 'customStyle',
          description:
            'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
          type: 'string',
          default: '""',
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
          prop: 'icon',
          description:
            'The button will be rendered with the specified Material Design icon.',
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
          prop: 'styling',
          description:
            'Defines the style of the button. Styles available: "flat", "outlined", "floating", "icon" and "raised" which is also the default.',
          type: 'FButtonStyling',
          default: 'raised',
          try: 'field',
        },
        {
          prop: 'showSpinner',
          description:
            'The button displays a spinner in place of its content and is not clickable.',
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
          prop: 'trailingIcon',
          description:
            'The button will display its associated icon after the text.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-button');
  comp.icon = 'widgets';
  comp.id = 'demo-component';
  comp.label = 'Demo';
  comp.styling = 'raised';
  let innerComp = document.createElement('kup-spinner');
  innerComp.slot = 'spinner';
  innerComp.dimensions = '0.6em';
  innerComp.active = true;
  comp.appendChild(innerComp);
  return comp;
}
</script>
