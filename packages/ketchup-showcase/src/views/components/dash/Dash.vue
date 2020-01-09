<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <dash-basic></dash-basic>
    </template>
  </comp>
</template>

<script>
import DashBasic from '@/views/components/dash/examples/DashBasic';
import Comp from '@/views/components/page/templates/Comp';

export default {
  components: {
    DashBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-dash',
      headtitle: 'Dash',
      titles: ['Basic usage'],
    };
  },
};
</script>
