<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Sometimes the user shouldn't be able to interact with the component. The
        attribute
        <span class="code-word">disabled</span> renders an unclickable dropdown
        button which can only be displayed, but not clicked.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-dropdown-button disabled label="Raised"></kup-dropdown-button>
          <kup-dropdown-button
            disabled
            styling="flat"
            label="Flat"
          ></kup-dropdown-button>
          <kup-dropdown-button
            disabled
            styling="outlined"
            label="Outlined"
          ></kup-dropdown-button>
        </div>
        <p class="centered">Disabled sample markup</p>
        <code class="flat">{{ markupDisabled }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DorpdownButtonDisabled',
  data() {
    return {
      markupDisabled:
        '<kup-dropdown-button disabled label="Disabled"></kup-dropdown-button>',
    };
  },
};
</script>

<style scoped lang="scss">
kup-dropdown-button {
  margin: auto;
  padding: 0.5em;
}
</style>
