<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <kup-toolbar-basic></kup-toolbar-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import KupToolbarBasic from '@/views/framework/kup-toolbar/examples/KupToolbarBasic';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    KupToolbarBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/managers/kup-toolbar',
      headtitle: 'KupToolbar',
      titles: ['Under development'],
    };
  },
  title: 'Ketchup | KupToolbar',
};
</script>
