<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
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
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-form',
      headtitle: 'Form',
      titles: ['Playground'],
    };
  },
};
</script>
