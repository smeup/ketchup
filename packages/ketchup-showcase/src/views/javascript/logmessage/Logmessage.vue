<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <logmessage-basic></logmessage-basic>
    </template>
  </comp>
</template>

<script>
import LogmessageBasic from '@/views/javascript/logmessage/examples/LogmessageBasic';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    LogmessageBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/blob/develop/packages/ketchup/src/utils/debug-manager.ts',
      headtitle: 'Logmessage',
      titles: ['Basic usage'],
    };
  },
};
</script>
