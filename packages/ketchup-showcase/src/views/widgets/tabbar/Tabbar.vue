<template>
  <comp :titles="titles" :headtitle="headtitle">
    <template v-slot:0>
      <tabbar-basic></tabbar-basic>
    </template>
    <template v-slot:1>
      <tabbar-styling></tabbar-styling>
    </template>
    <template v-slot:2>
      <tabbar-customization></tabbar-customization>
    </template>
  </comp>
</template>

<script>
import TabbarBasic from '@/views/widgets/tabbar/examples/TabbarBasic';
import TabbarStyling from '@/views/widgets/tabbar/examples/TabbarStyling';
import TabbarCustomization from '@/views/widgets/tabbar/examples/TabbarCustomization';
import Comp from '@/views/components/page/templates/Comp';
export default {
  components: {
    TabbarBasic,
    TabbarStyling,
    TabbarCustomization,
    Comp,
  },
  data() {
    return {
      headtitle: 'Tab Bar',
      titles: ['Basic usage', 'Styling', 'Customization'],
    };
  },
};
</script>
