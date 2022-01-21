<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <kup-data-basic></kup-data-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import KupDataBasic from '@/views/framework/kup-data/examples/KupDataBasic';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    KupDataBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/managers/kup-data',
      headtitle: 'KupData',
      titles: ['Under development'],
    };
  },
  title: 'Ketchup | KupData',
};
</script>
