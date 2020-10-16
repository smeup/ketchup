<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <drawer-basic></drawer-basic>
      </template>
      <template v-slot:1>
        <drawer-how-to-use></drawer-how-to-use>
      </template>
      <template v-slot:2>
        <drawer-prop></drawer-prop>
      </template>
      <template v-slot:3>
        <drawer-event></drawer-event>
      </template>
      <template v-slot:4>
        <drawer-toggle></drawer-toggle>
      </template>
    </comp>
  </div>
</template>

<script>
import DrawerBasic from '@/views/basic/drawer/examples/DrawerBasic';
import DrawerHowToUse from '@/views/basic/drawer/examples/DrawerHowToUse';
import DrawerProp from '@/views/basic/drawer/examples/DrawerProp';
import DrawerEvent from '@/views/basic/drawer/examples/DrawerEvent';
import DrawerToggle from '@/views/basic/drawer/examples/DrawerToggle';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    DrawerBasic,
    DrawerHowToUse,
    DrawerProp,
    DrawerEvent,
    DrawerToggle,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-drawer',
      headtitle: 'Drawer',
      titles: [
        'Basic usage',
        'How To Use',
        'Drawer prop',
        'Drawer Event',
        'Function Toggle',
      ],
    };
  },
};
</script>
