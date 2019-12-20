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
          <wup-text-field disabled></wup-text-field>
          <wup-text-field disabled label="I am disabled"></wup-text-field>
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
      markupDisabled: '<wup-text-field disabled></wup-text-field>',
    };
  },
};
</script>
