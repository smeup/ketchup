<template>
  <div>
    <div class="demo-wrapper">
      <p> Multi select component test </p>
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MultiSelectBasic',
  data() {
    return {
      markupBasic: '<kup-multi-select></kup-multi-select>',
    };
  },
};
</script>
