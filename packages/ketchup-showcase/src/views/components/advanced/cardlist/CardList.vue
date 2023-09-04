<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <card-list-demo></card-list-demo>
      </template>
      <template v-slot:1>
        <card-list-basic></card-list-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import Comp from '@/views/templates/Comp';
import CardListBasic from './examples/CardListBasic';
import CardListDemo from './examples/CardListDemo';

export default {
  components: {
    CardListBasic,
    CardListDemo,
    Comp,
  },

  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-card-list',
      headtitle: 'Card List',
      titles: ['Playground', 'Basic Usage'],
    };
  },
  title: 'Ketchup | Card list',
};
</script>
