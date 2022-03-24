<template>
  <div>
    <demo
      :demoClasses="demoClasses"
      :demoComp="demoComp"
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
  name: 'ProgressbarDemo',
  data() {
    return {
      demoClasses: [
        {
          class: 'kup-animated',
          description:
            'When the striped class is active, the stripes will be animated.',
        },
        {
          class: 'kup-danger',
          description:
            'The component will be rendered using the danger color of the app.',
        },
        {
          class: 'kup-info',
          description:
            'The component will be rendered using the informational color of the app.',
        },
        {
          class: 'kup-padded',
          description: 'Adds padding to the progress bar.',
        },
        {
          class: 'kup-secondary',
          description:
            'The component will be rendered using the secondary color of the app.',
        },
        {
          class: 'kup-slim',
          description: 'Slim version.',
        },
        {
          class: 'kup-striped',
          description: 'Displays stripes above the progress bar.',
        },
        {
          class: 'kup-success',
          description:
            'The component will be rendered using the success color of the app.',
        },
        {
          class: 'kup-warning',
          description:
            'The component will be rendered using the warning color of the app.',
        },
      ],
      demoComp: createComp(),
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
          default: '""',
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
