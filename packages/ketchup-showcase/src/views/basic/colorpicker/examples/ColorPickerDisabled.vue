<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Sometimes the user shouldn't be able to interact with the component. The
        attribute
        <span class="code-word">disabled</span> renders component not editable
        which can only be displayed, but not changed.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-color-picker initial-value="red" disabled></kup-color-picker>
        </div>
        <p class="centered">Disabled sample markup</p>
        <code class="flat">{{ markupDisabled }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorPickerDisabled',
  data() {
    return {
      markupDisabled:
        '<kup-color-picker value="red" disabled></kup-color-picker>',
    };
  },
};
</script>
