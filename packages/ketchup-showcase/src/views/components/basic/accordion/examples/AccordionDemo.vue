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
import { defaultData } from '@/mock/accordion';
import { defaultDataTable } from '@/mock/dataTable';

export default {
  components: {
    Demo,
  },
  name: 'AccordionDemo',
  data() {
    return {
      demoClasses: [
        {
          class: 'kup-borderless',
          description: 'Displays the component without borders.',
        },
        {
          class: 'kup-danger',
          description:
            'The component will be rendered using the danger color of the app.',
        },
        {
          class: 'kup-full-height',
          description: 'The button will fill all the available vertical space.',
        },
        {
          class: 'kup-full-width',
          description:
            'The button will fill all the available horizontal space.',
        },
        {
          class: 'kup-info',
          description:
            'The component will be rendered using the info color of the app.',
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
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-accordion-itemselected',
          type: 'CustomEvent',
        },
      ],
      demoMethods: [
        {
          name: 'collapseAll',
          description: 'Collapses all expandible items.',
        },
        {
          name: 'expandAll',
          description: 'Expands all expandible items.',
        },
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
        {
          name: 'toggleItem',
          description:
            "This method expands/collapses the given expandible item or selects/unselectes it in case it's not expandible.",
        },
      ],
      demoProps: [
        {
          prop: 'customStyle',
          description:
            'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
          type: 'string',
          default: '""',
          try: 'css',
        },
        {
          prop: 'data',
          description: 'The actual data of the component',
          type: 'KupAccordionData',
          default: 'null',
          try: 'json',
        },
        {
          prop: 'ripple',
          description:
            "When enabled displays Material's ripple effect on item headers.",
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
      ],
    };
  },
};

function createComp() {
  const slotFLD1 = document.createElement('kup-data-table');
  slotFLD1.data = defaultDataTable;
  slotFLD1.slot = 'FLD1';
  const slotFLD3 = document.createElement('kup-card');
  slotFLD3.data = {
    button: [
      { icon: 'play', flat: true },
      { icon: 'favorite', flat: true },
      { icon: 'share', label: 'share' },
    ],
    image: [
      {
        resource: 'images/catz_small.jpg',
      },
      { resource: 'widgets' },
    ],
    text: [
      'I am a title',
      'I am a subtitle',
      'I am a description, so I need more words compared to other texts. I will contain some nonsense, apologies.',
    ],
  };
  slotFLD3.sizeY = '300px';
  slotFLD3.slot = 'FLD3';
  const slotFLD4 = document.createElement('div');
  slotFLD4.innerText = 'This is a simple div which uses Ketchup theme colors.';
  slotFLD4.slot = 'FLD4';
  slotFLD4.style.background = 'var(--kup-primary-color)';
  slotFLD4.style.color = 'var(--kup-text-on-primary-color)';
  slotFLD4.style.padding = '1.25em 2em';
  const comp = document.createElement('kup-accordion');
  comp.data = defaultData;
  comp.id = 'demo-component';
  comp.appendChild(slotFLD4);
  comp.appendChild(slotFLD3);
  comp.appendChild(slotFLD1);
  return comp;
}
</script>
