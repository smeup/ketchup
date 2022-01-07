<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Sometimes the user shouldn't be able to interact with the component. The
        attribute
        <span class="code-word">disabled</span> renders an unclickable checkbox
        which content can only be displayed, but not changed.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-checkbox disabled></kup-checkbox>
          <kup-checkbox disabled checked></kup-checkbox>
        </div>
        <p class="centered">Disabled sample markup</p>
        <code class="flat">{{ markupDisabled }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckboxDisabled',
  data() {
    return {
      markupDisabled: '<kup-checkbox disabled></kup-checkbox>',
    };
  },
};
</script>
