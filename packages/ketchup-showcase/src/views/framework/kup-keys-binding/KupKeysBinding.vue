<template>
  <comp :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <kup-keys-binding-basic></kup-keys-binding-basic>
    </template>
    <template v-slot:1>
      <kup-keys-binding-features></kup-keys-binding-features>
    </template>
  </comp>
</template>

<script>
import Comp from '@/views/templates/Comp';
import KupKeysBindingBasic from '@/views/framework/kup-keys-binding/examples/KupKeysBindingBasic';
import KupKeysBindingFeatures from '@/views/framework/kup-keys-binding/examples/KupKeysBindingFeatures';
export default {
  components: {
    KupKeysBindingBasic,
    KupKeysBindingFeatures,
    Comp,
  },
  data() {
    return {
      headtitle: 'Kup keys binding',
      titles: ['What is it?', 'Features'],
    };
  },
  title: 'Ketchup | KupKeysBinding',
};
</script>
