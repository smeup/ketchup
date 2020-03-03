<template>
  <div>
    <div class="demo-wrapper">
      <p
        >There must be some kind of feedback to the user whenever an app is
        loading. Spinners do just that: they are basically visual "waiting
        please" feedback. Spinners can be turned on and off using the
        <span class="code-word">active</span> prop.
      </p>
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
