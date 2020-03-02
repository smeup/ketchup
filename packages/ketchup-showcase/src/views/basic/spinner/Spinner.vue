<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <spinner-demo></spinner-demo>
      </template>
      <template v-slot:1>
        <spinner-basic></spinner-basic>
      </template>
      <template v-slot:2>
        <spinner-bar></spinner-bar>
      </template>
      <template v-slot:3>
        <spinner-styling></spinner-styling>
      </template>
      <template v-slot:4>
        <spinner-layouts></spinner-layouts>
      </template>
      <template v-slot:5>
        <spinner-bar-layouts></spinner-bar-layouts>
      </template>
    </comp>
  </div>
</template>

<script>
import SpinnerDemo from '@/views/basic/spinner/examples/SpinnerDemo';
import SpinnerBasic from '@/views/basic/spinner/examples/SpinnerBasic';
import SpinnerStyling from '@/views/basic/spinner/examples/SpinnerStyling';
import SpinnerBar from '@/views/basic/spinner/examples/SpinnerBar';
import SpinnerLayouts from '@/views/basic/spinner/examples/SpinnerLayouts';
import SpinnerBarLayouts from '@/views/basic/spinner/examples/SpinnerBarLayouts';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    SpinnerDemo,
    SpinnerBasic,
    SpinnerStyling,
    SpinnerBar,
    SpinnerLayouts,
    SpinnerBarLayouts,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-spinner',
      headtitle: 'Spinner',
      titles: [
        'Playground',
        'Basic usage',
        'Bar variant',
        'Styling',
        'Layouts',
        'Bar variant layouts',
      ],
    };
  },
};
</script>
