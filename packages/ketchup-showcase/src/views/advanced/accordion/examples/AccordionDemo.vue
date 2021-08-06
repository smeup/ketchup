<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoProps="demoProps"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';
import { defaultData } from '@/mock/accordion';

export default {
  components: {
    Demo,
  },
  name: 'AccordionDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-accordion-itemselected',
          type: 'CustomEvent',
        },
        {
          name: 'kup-accordion-tree-nodeselected',
          type: 'CustomEvent',
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
          type: '{ columns: Column[]; rows: Row[]; }',
          default: 'null',
          try: 'json',
        },
        {
          prop: 'globalFilter',
          description: 'When set to true it activates the global filter.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'globalFilterValue',
          description: 'The value of the global filter.',
          type: 'string',
          default: '',
          try: 'field',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-accordion');
  comp.data = defaultData;
  comp.id = 'demo-component';
  return comp;
}
</script>
