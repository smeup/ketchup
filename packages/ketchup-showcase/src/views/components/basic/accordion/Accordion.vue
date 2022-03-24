<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <accordion-demo></accordion-demo>
    </template>
    <template v-slot:1>
      <accordion-basic></accordion-basic>
    </template>
  </comp>
</template>

<script>
import AccordionBasic from '@/views/components/basic/accordion/examples/AccordionBasic';
import AccordionDemo from '@/views/components/basic/accordion/examples/AccordionDemo';
import Comp from '@/views/templates/Comp';

export default {
  components: {
    AccordionBasic,
    AccordionDemo,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-accordion',
      headtitle: 'Accordion',
      titles: ['Playground', 'Basic usage'],
    };
  },
  title: 'Ketchup | Accordion',
};
</script>
