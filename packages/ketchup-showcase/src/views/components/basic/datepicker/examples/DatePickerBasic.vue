<template>
  <div>
    <div class="demo-wrapper">
      <p>
        The date picker component features a
        <span class="code-word">Text Field</span> and a drop down menu which
        lets the user set the desired value.</p
      ><br /><p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DatePickerBasic',
  data() {
    return {
      markupBasic: '<kup-date-picker></kup-date-picker>',
    };
  },
};
</script>
