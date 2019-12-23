<template>
  <comp :titles="titles" :headtitle="headtitle">
    <template v-slot:0>
      <form-basic></form-basic>
    </template>
  </comp>
</template>

<script>
import FormBasic from '@/views/components/form/examples/FormBasic';
import Comp from '@/views/components/page/templates/Comp';

export default {
  components: {
    FormBasic,
    Comp,
  },
  data() {
    return {
      headtitle: 'Form',
      titles: ['Playground'],
    };
  },
};
</script>
