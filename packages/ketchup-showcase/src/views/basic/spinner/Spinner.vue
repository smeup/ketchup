<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <spinner-demo></spinner-demo>
      </template>
      <template v-slot:1>
        <spinner-basic></spinner-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import SpinnerDemo from '@/views/basic/spinner/examples/SpinnerDemo';
import SpinnerBasic from '@/views/basic/spinner/examples/SpinnerBasic';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    SpinnerDemo,
    SpinnerBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-spinner',
      headtitle: 'Spinner',
      titles: ['Playground', 'Basic usage'],
    };
  },
};
</script>
