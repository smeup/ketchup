<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Selects are text fields with preset values, presented in a menu when
        the text field is clicked.</p
      >
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectBasic',
  data() {
    return {
      markupBasic: '<wup-select></wup-select>',
    };
  },
};
</script>
