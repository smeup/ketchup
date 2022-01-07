<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <kup-theme-basic></kup-theme-basic>
      </template>
      <template v-slot:1>
        <kup-theme-features></kup-theme-features>
      </template>
      <template v-slot:2>
        <kup-theme-events></kup-theme-events>
      </template>
    </comp>
  </div>
</template>

<script>
import KupThemeBasic from '@/views/framework/kup-theme/examples/KupThemeBasic';
import KupThemeEvents from '@/views/framework/kup-theme/examples/KupThemeEvents';
import KupThemeFeatures from '@/views/framework/kup-theme/examples/KupThemeFeatures';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    KupThemeBasic,
    KupThemeEvents,
    KupThemeFeatures,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/utils/kup-theme',
      headtitle: 'KupTheme',
      titles: ['What is it?', 'Features', 'Events'],
    };
  },
  title: 'Ketchup | KupTheme',
};
</script>
