<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
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
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-form',
      headtitle: 'Form',
      titles: ['Playground', 'Docs'],
    };
  },
};
</script>
