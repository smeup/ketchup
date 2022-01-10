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
  name: 'SpinnerDemo',
  data() {
    return {
      demoClasses: [
        {
          class: 'kup-unclickable',
          description:
            'The area covered by the spinner will be unclickable and the cursor will change to "wait".',
        },
      ],
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-spinner-ready',
          type: 'custom',
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
          prop: 'active',
          description: 'When set to true the spinner is animating.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'barVariant',
          description: 'Decides whether the component is a bar or a spinner.',
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
          prop: 'dimensions',
          description:
            'Width and height of the spinner. For the bar variant, only height.',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'fader',
          description:
            "Places a blend modal over the wrapper to darken the view (or lighten, when the theme is dark). It will be displayed after 3500ms since the component's render.",
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'faderTimeout',
          description: 'The time required for the "fader" to trigger.',
          type: 'number',
          default: '3500',
          try: 'field',
        },
        {
          prop: 'fullScreen',
          description:
            'When set to true the component will fill the whole viewport.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'layout',
          description: 'Sets the layout of the spinner.',
          type: 'number',
          default: '1',
          try: 'field',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-spinner');
  comp.active = true;
  comp.id = 'demo-component';
  comp.layout = '1';
  return comp;
}
</script>
