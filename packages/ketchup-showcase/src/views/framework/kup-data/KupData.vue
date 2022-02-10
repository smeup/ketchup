<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <kup-data-basic></kup-data-basic>
      </template>
      <template v-slot:1>
        <kup-data-features></kup-data-features>
      </template>
    </comp>
  </div>
</template>

<script>
import KupDataBasic from '@/views/framework/kup-data/examples/KupDataBasic';
import KupDataFeatures from '@/views/framework/kup-data/examples/KupDataFeatures';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    KupDataBasic,
    KupDataFeatures,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/managers/kup-data',
      headtitle: 'KupData',
      titles: ['What is it?', 'Features'],
    };
  },
  title: 'Ketchup | KupData',
};
</script>
