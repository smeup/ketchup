<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <kup-search-basic></kup-search-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import KupSearchBasic from '@/views/framework/kup-search/examples/KupSearchBasic';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    KupSearchBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/managers/kup-search',
      headtitle: 'KupSearch',
      titles: ['Under development'],
    };
  },
  title: 'Ketchup | KupSearch',
};
</script>
