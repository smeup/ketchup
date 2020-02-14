<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <tabbar-demo></tabbar-demo>
    </template>
    <template v-slot:1>
      <tabbar-basic></tabbar-basic>
    </template>
    <template v-slot:2>
      <tabbar-styling></tabbar-styling>
    </template>
  </comp>
</template>

<script>
import TabbarDemo from '@/views/basic/tabbar/examples/TabbarDemo';
import TabbarBasic from '@/views/basic/tabbar/examples/TabbarBasic';
import TabbarStyling from '@/views/basic/tabbar/examples/TabbarStyling';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    TabbarDemo,
    TabbarBasic,
    TabbarStyling,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/wup-tab-bar',
      headtitle: 'Tab Bar',
      titles: ['Playground', 'Basic usage', 'Styling'],
    };
  },
};
</script>
