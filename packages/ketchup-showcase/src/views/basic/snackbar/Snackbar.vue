<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <snackbar-demo></snackbar-demo>
    </template>
    <template v-slot:1>
      <snackbar-basic></snackbar-basic>
    </template>
  </comp>
</template>
<script>
import SnackbarBasic from '@/views/basic/snackbar/examples/SnackbarBasic';
import Comp from '@/views/advanced/page/templates/Comp';
import SnackbarDemo from '@/views/basic/snackbar/examples/SnackbarDemo';
export default {
  components: {
    SnackbarBasic,
    Comp,
    SnackbarDemo,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-snackbar',
      headtitle: 'Snackbar',
      titles: ['Playground', 'Basic usage'],
    };
  },
};
</script>
