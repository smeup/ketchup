<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <dash-basic></dash-basic>
    </template>
    <template v-slot:1>
      <dash-properties></dash-properties>
    </template>
    <template v-slot:2>
      <dash-layouts></dash-layouts>
    </template>
    <template v-slot:3>
      <dash-events></dash-events>
    </template>
    <template v-slot:4>
      <dash-dynamism></dash-dynamism>
    </template>
  </comp>
</template>

<script>
import DashBasic from '@/views/components/advanced/dash/examples/DashBasic';
import Comp from '@/views/templates/Comp';
import DashProperties from './examples/DashProperties';
import DashEvents from './examples/DashEvents';
import DashLayouts from './examples/DashLayouts';
import DashDynamism from './examples/DashDynamism';

export default {
  components: {
    DashBasic,
    Comp,
    DashProperties,
    DashEvents,
    DashLayouts,
    DashDynamism,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-dash',
      headtitle: 'Dash',
      titles: ['Basic usage', 'Properties', 'Layouts', 'Events', 'Dynamism'],
    };
  },
  title: 'Ketchup | Dash',
};
</script>
