<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoProps="demoProps"
      :demoClasses="demoClasses"
    ></demo>
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
      demoComp: createComp(),
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
            'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
          type: 'string',
          default: 'undefined',
          try: 'css',
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
          prop: 'isRadial',
          description: 'Radial version.',
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
      demoClasses: [
        {
          class: 'animated',
          description:
            'When the striped class is active, the stripes will be animated.',
        },
        {
          class: 'kup-secondary-color',
          description:
            'The component will be rendered using the secondary color of the app.',
        },
        {
          class: 'padded',
          description: 'Adds padding to the progress bar.',
        },
        {
          class: 'slim',
          description: 'Slim version.',
        },
        {
          class: 'striped',
          description: 'Displays stripes above the progress bar.',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-progress-bar');
  comp.centeredLabel = true;
  comp.id = 'demo-component';
  comp.value = '75';
  return comp;
}
</script>
