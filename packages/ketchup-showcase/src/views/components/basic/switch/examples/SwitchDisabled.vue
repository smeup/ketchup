<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Sometimes the user shouldn't be able to interact with the component. The
        attribute
        <span class="code-word">disabled</span> renders an unclickable switch
        which can only be displayed, but not changed.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-switch disabled></kup-switch>
          <kup-switch disabled checked></kup-switch>
        </div>
        <p class="centered">Disabled sample markup</p>
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
      markupDisabled: '<kup-switch disabled></kup-switch>',
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
