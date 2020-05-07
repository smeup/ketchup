<template>
  <div>
    <p>
      Ketch.UP components use CSS variables in order to handle their style,
      it's a powerful and easy way to customize colors, fonts, etc.
    </p>
    <p>
      You can try it yourself by changing the values of the text fields
      below.
    </p>
    <p>For example, you might notice that they are all piled up.</p>
    <p>
      This is caused by the CSS property
      <span class="code-word">display: block</span>, to which they default.
      Try setting them all inline, by changing the value of the variable
      <span
        class="code-word"
      >--kup-display-mode</span> in the table below
      to
      <span class="code-word">inline-block</span>.
    </p>
    <div class="demo-container">
      <div class="kup-container" style="display: unset;">
        <kup-radio></kup-radio>
        <kup-checkbox></kup-checkbox>
        <kup-text-field label="Demo"></kup-text-field>
        <kup-button label="Demo"></kup-button>
        <kup-switch></kup-switch>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThemingBasic',
};
</script>
