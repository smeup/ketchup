<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <debugging-basic></debugging-basic>
    </template>
  </comp>
</template>

<script>
import DebuggingBasic from '@/views/javascript/debugging/examples/DebuggingBasic';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    DebuggingBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/blob/develop/packages/ketchup/src/utils/debug-manager.ts',
      headtitle: 'Debugging',
      titles: ['Basic usage'],
    };
  },
};
</script>
