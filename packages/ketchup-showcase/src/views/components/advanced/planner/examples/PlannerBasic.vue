<template>
  <div>
    <div class="demo-wrapper">
      <p
        >The Planner component is a powerful tools derived by a gantt component,
        used to help users to analize and display the planning of each
        activities</p
      >
      <div class="demo-container">
        <p class="centered">Sample markup</p>
        <code class="flat">{{ markupBasic }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlannerBasic',
  data() {
    return {
      markupBasic: '<kup-planner></kup-planner>',
    };
  },
};
</script>
