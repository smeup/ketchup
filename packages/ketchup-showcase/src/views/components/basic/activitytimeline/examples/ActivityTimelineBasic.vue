<template>
  <div>
    <div class="demo-wrapper">
      <p
        >The Activity Timeline component offers a visually intuitive way to
        display activities chronologically. It groups events by date and time,
        providing a clear and organized view of past and upcoming activities.</p
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
  name: 'ActivityTimelineBasic',
  data() {
    return {
      markupBasic: '<kup-activity-timeline></kup-activity-timeline>',
    };
  },
};
</script>
