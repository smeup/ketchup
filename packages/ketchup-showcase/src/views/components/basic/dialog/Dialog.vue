<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <dialog-demo></dialog-demo>
    </template>
    <template v-slot:1>
      <dialog-basic></dialog-basic>
    </template>
  </comp>
</template>

<script>
import DialogBasic from '@/views/components/basic/dialog/examples/DialogBasic';
import DialogDemo from '@/views/components/basic/dialog/examples/DialogDemo';
import Comp from '@/views/templates/Comp';

export default {
  components: {
    DialogBasic,
    DialogDemo,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-dialog',
      headtitle: 'Dialog',
      titles: ['Playground', 'Basic usage'],
    };
  },
  title: 'Ketchup | Dialog',
};
</script>
