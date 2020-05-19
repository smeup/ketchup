<template>
  <div>
    <demo
      :demoTabs="demoTabs"
      :demoComp="demoComp"
      :demoProps="demoProps"
    ></demo>
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
      demoComp:
        '<kup-spinner active layout="1" id="demo-component"></kup-spinner>',
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
            'Sets a custom style for the component by feeding this string into a <style> tag.',
          type: 'string',
          default: 'null',
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
</script>
