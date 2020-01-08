<template>
  <comp :titles="titles" :headtitle="headtitle">
    <template v-slot:0>
      <form-basic></form-basic>
    </template>
    <template v-slot:1>
      <form-docs></form-docs>
    </template>
  </comp>
</template>

<script>
import FormBasic from '@/views/components/form/examples/FormBasic';
import FormDocs from '@/views/components/form/examples/FormDocs';
import Comp from '@/views/components/page/templates/Comp';

export default {
  components: {
    FormBasic,
    FormDocs,
    Comp,
  },
  data() {
    return {
      headtitle: 'Form',
      titles: ['Playground', 'Docs'],
    };
  },
};
</script>
