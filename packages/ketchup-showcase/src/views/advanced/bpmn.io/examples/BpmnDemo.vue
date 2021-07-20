<template>
  <div>
    <demo :demoComp="demoComp" :demoProps="demoProps"></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'BpmnDemo',
  data() {
    return {
      demoComp: createComp(),
      demoProps: [
        {
          prop: 'asImage',
          description: 'set true to view the image of xml diagram',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-bpmn');
  comp.id = 'demo-component';
  return comp;
}
</script>
