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
          <wup-button disabled text="Raised"></wup-button>
          <wup-button disabled flat label="Flat"></wup-button>
          <wup-button disabled outlined label="Transparent"></wup-button>
          <wup-button disabled icon="favorite"></wup-button>
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
      markupDisabled: '<wup-button disabled label="Disabled"></wup-button>',
    };
  },
};
</script>
