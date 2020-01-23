<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Sometimes the user shouldn't be able to interact with the component. The
        attribute
        <span class="code-word">disabled</span> renders an unclickable switch
        which can only be displayed, but not changed.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <wup-switch disabled></wup-switch>
          <wup-switch disabled checked></wup-switch>
        </div>
        <p class="centered">Disabled sample markup</p>
        <code class="flat">{{ markupDisabled }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwitchDisabled',
  data() {
    return {
      markupDisabled: '<wup-switch disabled></wup-switch>',
    };
  },
};
</script>
