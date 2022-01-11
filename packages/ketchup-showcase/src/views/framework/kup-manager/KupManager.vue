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
      <template v-slot:3>
        <kup-manager-events></kup-manager-events>
      </template>
    </comp>
  </div>
</template>

<script>
import KupManagerBasic from '@/views/framework/kup-manager/examples/KupManagerBasic';
import KupManagerInit from '@/views/framework/kup-manager/examples/KupManagerInit';
import KupManagerFeatures from '@/views/framework/kup-manager/examples/KupManagerFeatures';
import KupManagerEvents from '@/views/framework/kup-manager/examples/KupManagerEvents';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    KupManagerBasic,
    KupManagerInit,
    KupManagerFeatures,
    KupManagerEvents,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/managers/kup-manager',
      headtitle: 'KupManager',
      titles: ['What is it?', 'Initialization', 'Features', 'Events'],
    };
  },
  title: 'Ketchup | KupManager',
};
</script>
