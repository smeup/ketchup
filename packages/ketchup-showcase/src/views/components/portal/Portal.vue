<template>
  <comp :titles="titles">
    <template v-slot:0>
      <portal-basic></portal-basic>
    </template>
  </comp>
</template>

<script>
import PortalBasic from '@/views/components/portal/examples/PortalBasic';
import Comp from '@/views/components/page/templates/Comp';

export default {
  components: {
    PortalBasic,
    Comp,
  },
  data() {
    return {
      titles: ['Portal'],
    };
  },
};
</script>
