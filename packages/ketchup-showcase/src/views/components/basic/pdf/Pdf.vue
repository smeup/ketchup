<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <pdf-demo></pdf-demo>
      </template>
      <template v-slot:1>
        <pdf-basic></pdf-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import Comp from '@/views/templates/Comp';
import PdfDemo from './examples/PdfDemo';
import PdfBasic from './examples/PdfBasic';

export default {
  components: {
    PdfDemo,
    PdfBasic,
    Comp,
  },

  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-pdf',
      headtitle: 'Pdf',
      titles: ['Playground', 'Basic Usage'],
    };
  },
  title: 'Ketchup | Pdf',
};
</script>
