<template>
  <div>
    <div class="demo-wrapper">
      <p>
        When the style of the component doesn't suit your client's preferences,
        you can customize a few elements. In order to activate the customization
        you need to use the
        <span class="code-word">custom</span> attribute. This is still a W.I.P.
        feature, so there will be more information about it in the future.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <wup-switch custom></wup-switch>
          <wup-switch custom checked></wup-switch>
          <wup-switch custom disabled></wup-switch>
          <wup-switch custom disabled checked></wup-switch>
        </div>
        <p class="centered">Custom sample markup</p>
        <code class="flat">{{ markupCustom }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwitchCustomization',
  data() {
    return {
      markupCustom: '<wup-switch custom></wup-switch>',
    };
  },
};
</script>
