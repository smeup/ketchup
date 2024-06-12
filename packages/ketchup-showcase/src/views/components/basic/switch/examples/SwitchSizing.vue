<template>
  <div>
    <div class="demo-wrapper">
      <p>
        The switch component can be used in its smaller version using the
        <span class="code-word">sizing</span> parameter.
        <span class="code-word">medium</span> is the default. Passing
        <span class="code-word">small</span> you'll get the smaller version
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-switch></kup-switch>
          <kup-switch sizing="small"></kup-switch>
        </div>
        <p class="centered">Sizing small</p>
        <code class="flat">{{ markupDisabled }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwitchDisabled',
  data() {
    return {
      markupDisabled: '<kup-switch sizing="small"></kup-switch>',
    };
  },
};
</script>

<style scoped lang="scss">
kup-switch {
  margin: auto;
  padding: 0.5em;
}
</style>
