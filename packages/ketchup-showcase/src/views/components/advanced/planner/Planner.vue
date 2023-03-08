<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <planner-basic></planner-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import Comp from '@/views/templates/Comp';
import PlannerBasic from './examples/PlannerBasic';

export default {
  components: {
    PlannerBasic,
    Comp,
  },

  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-planner',
      headtitle: 'Planner',
      titles: ['Playground', 'Basic Usage'],
    };
  },
  title: 'Ketchup | Planner',
};
</script>
