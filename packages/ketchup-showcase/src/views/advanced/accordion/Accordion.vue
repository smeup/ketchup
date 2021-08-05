<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <accordion-demo></accordion-demo>
    </template>
  </comp>
</template>

<script>
import AccordionDemo from '@/views/advanced/accordion/examples/AccordionDemo';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    AccordionDemo,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-accordion',
      headtitle: 'Accordion',
      titles: ['Playground'],
    };
  },
};
</script>
