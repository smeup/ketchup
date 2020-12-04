<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Sometimes the user shouldn't be able to interact with the component. The
        attribute
        <span class="code-word">disabled</span> renders an unclickable button
        which can only be displayed, but not clicked.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-button disabled label="Raised"></kup-button>
          <kup-button disabled styling="flat" label="Flat"></kup-button>
          <kup-button disabled styling="outlined" label="Outlined"></kup-button>
          <kup-button disabled icon="favorite"></kup-button>
        </div>
        <p class="centered">Disabled sample markup</p>
        <code class="flat">{{ markupDisabled }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonDisabled',
  data() {
    return {
      markupDisabled: '<kup-button disabled label="Disabled"></kup-button>',
    };
  },
};
</script>
