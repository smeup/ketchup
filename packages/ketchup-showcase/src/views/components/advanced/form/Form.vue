<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <form-demo></form-demo>
      </template>
      <template v-slot:1>
        <form-basic></form-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import FormDemo from '@/views/components/advanced/form/examples/FormDemo';
import FormBasic from '@/views/components/advanced/form/examples/FormBasic';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    FormDemo,
    FormBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-form',
      headtitle: 'Form',
      titles: ['Playground', 'Basic usage'],
    };
  },
  title: 'Ketchup | Form',
};
</script>
