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
      <template v-slot:3>
        <kup-theme-maker></kup-theme-maker>
      </template>
    </comp>
  </div>
</template>

<script>
import KupThemeBasic from '@/views/framework/kup-theme/examples/KupThemeBasic';
import KupThemeEvents from '@/views/framework/kup-theme/examples/KupThemeEvents';
import KupThemeFeatures from '@/views/framework/kup-theme/examples/KupThemeFeatures';
import KupThemeMaker from '@/views/framework/kup-theme/examples/KupThemeMaker';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    KupThemeBasic,
    KupThemeEvents,
    KupThemeFeatures,
    KupThemeMaker,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/managers/kup-theme',
      headtitle: 'KupTheme',
      titles: ['What is it?', 'Features', 'Events', 'Theme maker'],
    };
  },
  title: 'Ketchup | KupTheme',
};
</script>
