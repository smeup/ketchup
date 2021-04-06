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
  name: 'GridDemo',
  data() {
    return {
      demoComp: createComp(),
      demoProps: [
        {
          prop: 'columns',
          description:
            'The number of columns displayed by the grid, the default behavior is 12.',
          type: 'number',
          default: '12',
          try: 'field',
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
          prop: 'singleLine',
          description: 'When set to true, forces the content on a single line.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
      ],
      demoClasses: [
        {
          class: 'kup-danger',
          description:
            'The component will be rendered using the danger color of the app.',
        },
        {
          class: 'kup-full-width',
          description: 'The grid will fill all the available horizontal space.',
        },
        {
          class: 'kup-info',
          description:
            'The component will be rendered using the informational color of the app.',
        },
        {
          class: 'kup-secondary',
          description:
            'The component will be rendered using the secondary color of the app.',
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
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-grid');
  comp.id = 'demo-component';
  comp.columns = '12';
  for (let index = 0; index < 48; index++) {
    let compImage = document.createElement('kup-image');
    compImage.data = [
      {
        shape: 'bar',
        color: 'var(--kup-primary-color)',
        width: '100%',
        height: '100%',
      },
    ];
    compImage.sizeX = '48px';
    compImage.sizeY = '48px';
    compImage.slot = index;
    comp.appendChild(compImage);
  }
  return comp;
}
</script>
