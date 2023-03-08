<template>
  <div>
    <div class="demo-wrapper">
      <p
        >The Dash list component is an extension of the Dash component, it
        creates a list of Dash objects that you can customize by choosing
        different layouts or colors.</p
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
