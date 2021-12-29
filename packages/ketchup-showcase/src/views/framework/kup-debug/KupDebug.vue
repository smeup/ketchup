<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <kup-debug-basic></kup-debug-basic>
      </template>
      <template v-slot:1>
        <kup-debug-features></kup-debug-features>
      </template>
      <template v-slot:2>
        <kup-debug-events></kup-debug-events>
      </template>
    </comp>
  </div>
</template>

<script>
import KupDebugBasic from '@/views/framework/kup-debug/examples/KupDebugBasic';
import KupDebugEvents from '@/views/framework/kup-debug/examples/KupDebugEvents';
import KupDebugFeatures from '@/views/framework/kup-debug/examples/KupDebugFeatures';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    KupDebugBasic,
    KupDebugEvents,
    KupDebugFeatures,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/utils/kup-debug',
      headtitle: 'KupDebug',
      titles: ['What is it?', 'Features', 'Events'],
    };
  },
};
</script>
