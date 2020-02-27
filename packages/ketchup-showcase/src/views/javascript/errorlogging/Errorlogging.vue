<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <errorlogging-basic></errorlogging-basic>
    </template>
  </comp>
</template>

<script>
import ErrorloggingBasic from '@/views/javascript/errorlogging/examples/ErrorloggingBasic';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    ErrorloggingBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/blob/develop/packages/ketchup/src/utils/error-logging.ts',
      headtitle: 'Error logging',
      titles: ['Basic usage'],
    };
  },
};
</script>
