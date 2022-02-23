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
  name: 'GridDemo',
  data() {
    return {
      demoClasses: [
        {
          class: 'kup-full-width',
          description: 'The grid will fill all the available horizontal space.',
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
