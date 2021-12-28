<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <kup-manager-basic></kup-manager-basic>
      </template>
      <template v-slot:1>
        <kup-manager-init></kup-manager-init>
      </template>
      <template v-slot:2>
        <kup-manager-features></kup-manager-features>
      </template>
    </comp>
  </div>
</template>

<script>
import KupManagerBasic from '@/views/framework/kup-manager/examples/KupManagerBasic';
import KupManagerInit from '@/views/framework/kup-manager/examples/KupManagerInit';
import KupManagerFeatures from '@/views/framework/kup-manager/examples/KupManagerFeatures';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    KupManagerBasic,
    KupManagerInit,
    KupManagerFeatures,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/utils/kup-manager',
      headtitle: 'KupManager',
      titles: ['What is it?', 'Initialization', 'Features'],
    };
  },
};
</script>
