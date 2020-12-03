<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Gauges are very important elements in dashboards. They are used to
        quickly check thresholds and current value.</p
      >
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GaugeBasic',
  data() {
    return {
      markupBasic: '<kup-gauge></kup-gauge>',
    };
  },
};
</script>
