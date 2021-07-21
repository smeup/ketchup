<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <bpmn-demo></bpmn-demo>
    </template>
    <template v-slot:1>
      <bpmn-basic></bpmn-basic>
    </template>
  </comp>
</template>

<script>
import BpmnDemo from '@/views/advanced/bpmn.io/examples/BpmnDemo';
import BpmnBasic from '@/views/advanced/bpmn.io/examples/BpmnBasic';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    BpmnDemo,
    BpmnBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-bpmn',
      headtitle: 'Bpmn',
      titles: ['Playground', 'Basic usage'],
    };
  },
};
</script>
