<template>
  <div>
    <div class="demo-wrapper">
      <p>The Input Panel component arranges different input fields.</p>
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputPanelBasic',
  data() {
    return {
      markupBasic: '<kup-input-panel></kup-input-panel>',
    };
  },
};
</script>
