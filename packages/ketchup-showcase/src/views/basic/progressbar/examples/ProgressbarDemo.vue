<template>
  <div>
    <demo :demoTabs="demoTabs" :demoComp="demoComp" :demoProps="demoProps"></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'ProgressbarDemo',
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
        '<kup-progress-bar centered-label value="50" id="demo-component"></kup-progress-bar>',
      demoProps: [
        {
          prop: 'centeredLabel',
          description:
            "Displays the label in the middle of the progress bar. It's the default for the radial variant and can't be changed.",
          type: 'boolean',
          default: 'true',
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
          prop: 'hasPadding',
          description:
            'Sets a padding between the bar and its container. Not supported for the radial variant.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'hasStripes',
          description:
            'Sets a striped background. Not supported for the radial variant.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'hideLabel',
          description: "Flag to show or hide the progress bar's label.",
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'icon',
          description: 'Specifies an icon to replace the label.',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'isAnimated',
          description:
            'When striped background is active, it will be animated. Not supported for the radial variant.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'isRadial',
          description: 'Radial version.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'isSlim',
          description: 'Slim version.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'label',
          description: "Specifies a text for the bar's label.",
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'value',
          description:
            'The label will be displayed to the left of the component.',
          type: 'number',
          default: '0',
          try: 'field',
        },
      ],
    };
  },
};
</script>
