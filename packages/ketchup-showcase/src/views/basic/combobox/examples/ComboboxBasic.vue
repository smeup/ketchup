<template>
  <div>
    <div class="demo-wrapper">
      <p>Combobox are text fields with a list of preset choices associated to them.</p>
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComboboxBasic',
  data() {
    return {
      markupBasic: '<wup-combobox></wup-combobox>',
    };
  },
};
</script>
