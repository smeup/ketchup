<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <button-basic></button-basic>
    </template>
  </comp>
</template>

<script>
import ButtonBasic from '@/views/advanced/button/examples/ButtonBasic';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    ButtonBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-button',
      headtitle: 'Button',
      titles: ['Basic usage'],
    };
  },
};
</script>
