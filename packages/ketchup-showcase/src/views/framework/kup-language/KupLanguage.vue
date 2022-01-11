<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <kup-language-basic></kup-language-basic>
      </template>
      <template v-slot:1>
        <kup-language-features></kup-language-features>
      </template>
      <template v-slot:2>
        <kup-language-events></kup-language-events>
      </template>
    </comp>
  </div>
</template>

<script>
import KupLanguageBasic from '@/views/framework/kup-language/examples/KupLanguageBasic';
import KupLanguageEvents from '@/views/framework/kup-language/examples/KupLanguageEvents';
import KupLanguageFeatures from '@/views/framework/kup-language/examples/KupLanguageFeatures';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    KupLanguageBasic,
    KupLanguageEvents,
    KupLanguageFeatures,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/managers/kup-language',
      headtitle: 'KupLanguage',
      titles: ['What is it?', 'Features', 'Events'],
    };
  },
  title: 'Ketchup | KupLanguage',
};
</script>
