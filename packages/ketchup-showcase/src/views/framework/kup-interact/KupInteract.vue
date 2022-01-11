<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <kup-interact-basic></kup-interact-basic>
      </template>
      <template v-slot:1>
        <kup-interact-features></kup-interact-features>
      </template>
      <template v-slot:2>
        <kup-interact-events></kup-interact-events>
      </template>
    </comp>
  </div>
</template>

<script>
import KupInteractBasic from '@/views/framework/kup-interact/examples/KupInteractBasic';
import KupInteractEvents from '@/views/framework/kup-interact/examples/KupInteractEvents';
import KupInteractFeatures from '@/views/framework/kup-interact/examples/KupInteractFeatures';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    KupInteractBasic,
    KupInteractEvents,
    KupInteractFeatures,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/managers/kup-interact',
      headtitle: 'KupInteract',
      titles: ['What is it?', 'Features', 'Events'],
    };
  },
  title: 'Ketchup | KupInteract',
};
</script>
