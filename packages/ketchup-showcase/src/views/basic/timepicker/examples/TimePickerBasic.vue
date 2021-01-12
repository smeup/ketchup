<template>
  <div>
    <div class="demo-wrapper">
      <p>
        The time picker component features a
        <span class="code-word">Text Field</span> and a drop down menu which
        lets the user set the desired value.</p
      ><br /><p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimePickerBasic',
  data() {
    return {
      markupBasic: '<kup-time-picker></kup-time-picker>',
    };
  },
};
</script>
