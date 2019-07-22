<template>
  <div>
    <h3>Without value</h3>
    <kup-progress-bar></kup-progress-bar>

    <h3>With value 70</h3>
    <kup-progress-bar :value.prop="70"></kup-progress-bar>

    <h3>With value 50 and custom text</h3>
    <kup-progress-bar
      :value.prop="50"
      :labelText.prop="'My custom label'"
    ></kup-progress-bar>

    <h3>Custom colors</h3>
    <kup-progress-bar id="custom-colors" :value.prop="50"></kup-progress-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
};
</script>

<style scoped>
#custom-colors {
  --pgb_background-color: black;
  --pgb_foreground-color: green;
}
</style>

