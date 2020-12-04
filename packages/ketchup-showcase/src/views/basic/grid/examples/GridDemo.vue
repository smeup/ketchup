<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoProps="demoProps"
      :demoTabs="demoTabs"
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
          prop: 'className',
          description: 'Available classes: full-width.',
          type: 'string',
          default: '""',
          try: 'field',
        },
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
          default: 'undefined',
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
  let comp = document.createElement('kup-grid');
  comp.id = 'demo-component';
  comp.columns = '12';
  for (let index = 0; index < 48; index++) {
    let compImage = document.createElement('kup-image');
    compImage.data = [
      {
        shape: 'bar',
        color: 'var(--kup-main-color)',
        width: '100%',
        height: '100%',
      },
    ];
    compImage.sizeY = '48px';
    compImage.slot = index;
    comp.appendChild(compImage);
  }
  return comp;
}
</script>
