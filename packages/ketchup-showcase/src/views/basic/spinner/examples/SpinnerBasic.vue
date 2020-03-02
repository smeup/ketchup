<template>
  <div>
    <div class="demo-wrapper">
      <p>The loading indicator within an app is usually a spinner.</p>
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpinnerBasic',
  data() {
    return {
      markupBasic: '<kup-spinner></kup-spinner>',
    };
  },
};
</script>
