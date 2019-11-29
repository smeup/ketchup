<template>
  <comp :titles="titles">
    <template v-slot:0>
      <html-basic></html-basic>
    </template>
  </comp>
</template>

<script>
import HtmlBasic from '@/views/html/examples/HtmlBasic';
import Comp from '@/views/page/templates/Comp';

export default {
  components: {
    HtmlBasic,
    Comp,
  },
  data() {
    return {
      titles: ['Html'],
    };
  },
};
</script>
