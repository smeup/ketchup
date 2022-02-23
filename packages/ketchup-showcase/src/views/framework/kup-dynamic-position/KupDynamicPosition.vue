<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <kup-dynamic-position-basic></kup-dynamic-position-basic>
      </template>
      <template v-slot:1>
        <kup-dynamic-position-features></kup-dynamic-position-features>
      </template>
    </comp>
  </div>
</template>

<script>
import KupDynamicPositionBasic from '@/views/framework/kup-dynamic-position/examples/KupDynamicPositionBasic';
import KupDynamicPositionFeatures from '@/views/framework/kup-dynamic-position/examples/KupDynamicPositionFeatures';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    KupDynamicPositionBasic,
    KupDynamicPositionFeatures,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/managers/kup-dynamic-position',
      headtitle: 'KupDynamicPosition',
      titles: ['What is it?', 'Features'],
    };
  },
  title: 'Ketchup | KupDynamicPosition',
};
</script>
