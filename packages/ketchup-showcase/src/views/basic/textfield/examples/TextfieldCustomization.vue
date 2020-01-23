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
          <wup-text-field custom label="Custom flat"></wup-text-field>
          <wup-text-field
            custom
            outlined
            label="Custom outlined"
          ></wup-text-field>
          <wup-text-field
            custom
            textarea
            label="Custom textarea"
          ></wup-text-field>
        </div>
        <p class="centered">Custom sample markup</p>
        <code class="flat">{{ markupCustom }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextfieldCustomization',
  data() {
    return {
      markupCustom: '<wup-text-field custom></wup-text-field>',
    };
  },
};
</script>
