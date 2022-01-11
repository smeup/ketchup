<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <kup-scroll-on-hover-basic></kup-scroll-on-hover-basic>
      </template>
      <template v-slot:1>
        <kup-scroll-on-hover-features></kup-scroll-on-hover-features>
      </template>
    </comp>
  </div>
</template>

<script>
import KupScrollOnHoverBasic from '@/views/framework/kup-scroll-on-hover/examples/KupScrollOnHoverBasic';
import KupScrollOnHoverFeatures from '@/views/framework/kup-scroll-on-hover/examples/KupScrollOnHoverFeatures';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    KupScrollOnHoverBasic,
    KupScrollOnHoverFeatures,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/managers/kup-scroll-on-hover',
      headtitle: 'KupScrollOnHover',
      titles: ['What is it?', 'Features'],
    };
  },
  title: 'Ketchup | KupScrollOnHover',
};
</script>
