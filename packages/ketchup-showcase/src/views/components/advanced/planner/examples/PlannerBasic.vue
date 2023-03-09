<template>
  <div>
    <div class="demo-wrapper">
      <p
        >The Planner component is a powerful tools derived by a gantt component,
        used to help users to analize and display the planning of each
        activities</p
      >
      <br />
      <h3>Horizontal Configuration</h3>
      <div class="demo-container">
        <div class="kup-container">
          <div style="overflow: scroll">
            <kup-planner :data.prop="Data"></kup-planner>
          </div>
          <br />
        </div>
        <p class="centered">Sample markup</p>
        <code class="flat">{{ markupBasic }}</code>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mockedTaskData,
  mockedPhaseData,
  mockedProps,
} from '@/mock/mockedPlanner';
export default {
  name: 'PlannerBasic',
  data() {
    return {
      Data: mockedDefaultData,
      PhaseData: mockedPhaseData,
      Props: mockedProps,
      markupBasic: '<kup-planner></kup-planner>',
    };
  },
};
</script>
