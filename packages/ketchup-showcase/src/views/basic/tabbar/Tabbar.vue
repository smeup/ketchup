<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <tabbar-basic></tabbar-basic>
    </template>
    <template v-slot:1>
      <tabbar-styling></tabbar-styling>
    </template>
  </comp>
</template>

<script>
import TabbarBasic from '@/views/basic/tabbar/examples/TabbarBasic';
import TabbarStyling from '@/views/basic/tabbar/examples/TabbarStyling';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    TabbarBasic,
    TabbarStyling,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/wup-tab-bar',
      headtitle: 'Tab Bar',
      titles: ['Basic usage', 'Styling'],
    };
  },
};
</script>
