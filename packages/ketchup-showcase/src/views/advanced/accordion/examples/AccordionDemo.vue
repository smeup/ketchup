<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoProps="demoProps"
      :demoClasses="demoClasses"
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
      demoEvents: [],
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
          default: 'undefined',
          try: 'json',
        },
      ],
      demoClasses: [],
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
