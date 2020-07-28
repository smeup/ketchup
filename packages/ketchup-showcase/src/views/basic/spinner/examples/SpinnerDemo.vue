<template>
  <div>
    <demo :demoComp="demoComp" :demoProps="demoProps" :demoTabs="demoTabs"></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'SpinnerDemo',
  data() {
    return {
      demoComp: createComp(),
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
          default: 'undefined',
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
          prop: 'isUnclickable',
          description:
            'When set to true the area covered by the component will be unclickable and the cursor will be changed to "wait".',
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
      demoTabs: [
        {
          text: 'Props',
          icon: '',
          active: true,
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
