<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <dash-list-properties></dash-list-properties>
      </template>
      <template v-slot:1>
        <dash-list-events></dash-list-events>
      </template>
    </comp>
  </div>
</template>

<script>
import DashListProperties from './examples/DashListProperties';
import Comp from '../page/templates/Comp';
import DashListEvents from './examples/DashListEvents';
export default {
  components: {
    DashListProperties,
    DashListEvents,
    Comp,
  },

  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-dash-list',
      headtitle: 'Dash List',
      titles: ['Properties', 'Events'],
    };
  },
};
</script>
