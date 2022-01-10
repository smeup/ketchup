<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <dash-list-demo></dash-list-demo>
      </template>
      <template v-slot:1>
        <dash-basic></dash-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import Comp from '@/views/templates/Comp';
import DashListDemo from './examples/DashListDemo';
import DashBasic from './examples/DashListBasic';

export default {
  components: {
    DashListDemo,
    DashBasic,
    Comp,
  },

  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-dash-list',
      headtitle: 'Dash List',
      titles: ['Playground', 'Basic Usage'],
    };
  },
  title: 'Ketchup | Dash list',
};
</script>
