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
import TabbarDemo from '@/views/components/basic/tabbar/examples/TabbarDemo';
import TabbarBasic from '@/views/components/basic/tabbar/examples/TabbarBasic';
import TabbarStyling from '@/views/components/basic/tabbar/examples/TabbarStyling';
import Comp from '@/views/templates/Comp';
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
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-tab-bar',
      headtitle: 'Tab Bar',
      titles: ['Playground', 'Basic usage', 'Styling'],
    };
  },
  title: 'Ketchup | Tab bar',
};
</script>
