<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <drawer-demo></drawer-demo>
      </template>
      <template v-slot:1>
        <drawer-basic></drawer-basic>
      </template>
      <template v-slot:2>
        <drawer-class-name></drawer-class-name>
      </template>
      <template v-slot:3>
        <drawer-event></drawer-event>
      </template>
    </comp>
  </div>
</template>

<script>
import DrawerBasic from '@/views/components/basic/drawer/examples/DrawerBasic';
import DrawerClassName from '@/views/components/basic/drawer/examples/DrawerClassName';
import DrawerDemo from '@/views/components/basic/drawer/examples/DrawerDemo';
import DrawerEvent from '@/views/components/basic/drawer/examples/DrawerEvent';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    DrawerBasic,
    DrawerClassName,
    DrawerDemo,
    DrawerEvent,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-drawer',
      headtitle: 'Drawer',
      titles: ['Playground', 'Basic usage', 'Classes', 'Events'],
    };
  },
  title: 'Ketchup | Drawer',
};
</script>
