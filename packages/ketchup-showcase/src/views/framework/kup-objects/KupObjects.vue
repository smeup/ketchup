<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <kup-objects-basic></kup-objects-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import KupObjectsBasic from '@/views/framework/kup-objects/examples/KupObjectsBasic';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    KupObjectsBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/utils/kup-objects',
      headtitle: 'KupObjects',
      titles: ['Under development'],
    };
  },
};
</script>
