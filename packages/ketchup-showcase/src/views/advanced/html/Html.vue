<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <html-basic></html-basic>
    </template>
  </comp>
</template>

<script>
import HtmlBasic from '@/views/advanced/html/examples/HtmlBasic';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    HtmlBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-html',
      headtitle: 'Html',
      titles: ['Basic usage'],
    };
  },
};
</script>
