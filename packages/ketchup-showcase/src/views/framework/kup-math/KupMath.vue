<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <kup-math-basic></kup-math-basic>
      </template>
      <template v-slot:1>
        <kup-math-features></kup-math-features>
      </template>
      <template v-slot:2>
        <kup-math-events></kup-math-events>
      </template>
    </comp>
  </div>
</template>

<script>
import KupMathBasic from '@/views/framework/kup-math/examples/KupMathBasic';
import KupMathEvents from '@/views/framework/kup-math/examples/KupMathEvents';
import KupMathFeatures from '@/views/framework/kup-math/examples/KupMathFeatures';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    KupMathBasic,
    KupMathEvents,
    KupMathFeatures,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/managers/kup-math',
      headtitle: 'KupMath',
      titles: ['What is it?', 'Features', 'Events'],
    };
  },
  title: 'Ketchup | KupMath',
};
</script>
