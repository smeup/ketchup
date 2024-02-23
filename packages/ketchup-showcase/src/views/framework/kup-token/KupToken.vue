<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <kup-token-syntax></kup-token-syntax>
      </template>
    </comp>
  </div>
</template>

<script>
import KupTokenSyntax from '@/views/framework/kup-token/examples/KupTokenSyntax';
import Comp from '@/views/templates/Comp';

export default {
  components: {
    KupTokenSyntax,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/managers/kup-token',
      headtitle: 'KupToken',
      titles: ['Syntax'],
    };
  },
  title: 'Ketchup | KupToken',
};
</script>
