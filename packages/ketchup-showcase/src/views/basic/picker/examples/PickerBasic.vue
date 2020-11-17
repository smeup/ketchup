<template>
  <div>
    <div class="demo-wrapper">
      <p>
        The picker component features a
        <span class="code-word">Text Field</span> and a drop down menu which
        lets the user set the desired value. At the moment, the only supported
        picker is "date".</p
      ><br /><p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PickerBasic',
  data() {
    return {
      markupBasic: '<kup-picker></kup-picker>',
    };
  },
};
</script>
