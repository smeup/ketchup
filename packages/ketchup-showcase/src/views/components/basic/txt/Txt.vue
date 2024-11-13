<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <txt-demo></txt-demo>
    </template>
    <template v-slot:1>
      <txt-basic></txt-basic>
    </template>
  </comp>
</template>

<script>
import TxtBasic from '@/views/components/basic/txt/examples/TxtBasic.vue';
import TxtDemo from '@/views/components/basic/txt/examples/TxtDemo.vue';
import Comp from '@/views/templates/Comp.vue';

export default {
  components: {
    TxtBasic,
    TxtDemo,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-txt',
      headtitle: 'TXT',
      titles: ['Playground', 'Basic usage'],
    };
  },
  title: 'Ketchup | TXT',
};
</script>
