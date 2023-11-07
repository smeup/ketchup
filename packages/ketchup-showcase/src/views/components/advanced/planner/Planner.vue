<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <planner-demo></planner-demo>
      </template>
      <template v-slot:1>
        <planner-basic></planner-basic>
      </template>
      <template v-slot:2>
        <planner-phases></planner-phases>
      </template>
      <template v-slot:3>
        <planner-details></planner-details>
      </template>
    </comp>
  </div>
</template>

<script>
import Comp from '@/views/templates/Comp';
import PlannerBasic from './examples/PlannerBasic';
import PlannerDemo from './examples/PlannerDemo';
import PlannerPhases from './examples/PlannerPhases';
import PlannerDetails from './examples/PlannerDetails';

export default {
  components: {
    PlannerBasic,
    PlannerDemo,
    PlannerPhases,
    PlannerDetails,
    Comp,
  },

  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-planner',
      headtitle: 'Planner',
      titles: ['Playground', 'Basic Usage', 'With phases', 'With details'],
    };
  },
  title: 'Ketchup | Planner',
};
</script>
