<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <dash-basic></dash-basic>
    </template>
    <template v-slot:1>
      <dash-properties></dash-properties>
    </template>
    <template v-slot:2>
      <dash-events></dash-events>
    </template>
  </comp>
</template>

<script>
import DashBasic from '@/views/advanced/dash/examples/DashBasic';
import Comp from '@/views/advanced/page/templates/Comp';
import DashProperties from '@/views/advanced/dash/examples/DashProperties';
import DashEvents from './examples/DashEvents';

export default {
  components: {
    DashBasic,
    DashProperties,
    DashEvents,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-dash',
      headtitle: 'Dash',
      titles: ['Basic usage', 'Properties', 'Events'],
    };
  },
};
</script>
