<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Sometimes the user shouldn't be able to interact with the component. The
        attribute
        <span class="code-word">disabled</span> renders an unclickable text
        field which content can only be displayed, but not changed.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-text-field disabled></kup-text-field>
          <kup-text-field disabled label="I am disabled"></kup-text-field>
        </div>
        <p class="centered">Disabled sample markup</p>
        <code class="flat">{{ markupDisabled }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextfieldDisabled',
  data() {
    return {
      markupDisabled: '<kup-text-field disabled></kup-text-field>',
    };
  },
};
</script>

<style scoped lang="scss">
kup-text-field {
  margin: auto;
  padding: 0.5em;
}
</style>
