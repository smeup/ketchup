<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <portal-basic></portal-basic>
    </template>
  </comp>
</template>

<script>
import PortalBasic from '@/views/advanced/portal/examples/PortalBasic';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    PortalBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-portal',
      headtitle: 'Portal',
      titles: ['Basic usage'],
    };
  },
};
</script>
