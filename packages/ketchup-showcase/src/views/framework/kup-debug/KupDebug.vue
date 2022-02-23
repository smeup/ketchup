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
      <template v-slot:3>
        <kup-debug-tester></kup-debug-tester>
      </template>
    </comp>
  </div>
</template>

<script>
import KupDebugBasic from '@/views/framework/kup-debug/examples/KupDebugBasic';
import KupDebugEvents from '@/views/framework/kup-debug/examples/KupDebugEvents';
import KupDebugFeatures from '@/views/framework/kup-debug/examples/KupDebugFeatures';
import KupDebugTester from '@/views/framework/kup-debug/examples/KupDebugTester';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    KupDebugBasic,
    KupDebugEvents,
    KupDebugFeatures,
    KupDebugTester,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/managers/kup-debug',
      headtitle: 'KupDebug',
      titles: ['What is it?', 'Features', 'Events', 'Tester'],
    };
  },
  title: 'Ketchup | KupDebug',
};
</script>
