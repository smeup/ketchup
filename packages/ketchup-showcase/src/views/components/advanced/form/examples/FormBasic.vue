<template>
  <div>
    <div class="demo-wrapper">
      <p>The form component arranges different input fields.</p>
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormBasic',
  data() {
    return {
      markupBasic: '<kup-form></kup-form>',
    };
  },
};
</script>
