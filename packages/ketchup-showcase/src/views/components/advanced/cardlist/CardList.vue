<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <card-list-basic></card-list-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import Comp from '@/views/templates/Comp';
import CardListBasic from './examples/CardListBasic';

export default {
  components: {
    CardListBasic,
    Comp,
  },

  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-card-list',
      headtitle: 'Card List',
      titles: ['Basic Usage'],
    };
  },
  title: 'Ketchup | Card list',
};
</script>
