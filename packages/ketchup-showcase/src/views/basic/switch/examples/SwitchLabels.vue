<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Switches can be rendered with a label to their left or to their right.
        You can choose between setting a
        <span class="code-word">labelleft</span> or a
        <span class="code-word">labelright</span> attribute, which are mutually
        exclusive.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <wup-switch labelleft="This label is on the left"></wup-switch>
          <wup-switch labelright="This label is on the right"></wup-switch>
        </div>
        <p class="centered">Left aligned sample markup</p>
        <code class="flat">{{ markupLeft }}</code>
        <p class="centered">Right aligned sample markup</p>
        <code class="flat">{{ markupRight }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwitchLabels',
  data() {
    return {
      markupLeft: '<wup-switch labelleft="Your label"></wup-switch>',
      markupRight: '<wup-switch labelright="Your label"></wup-switch>',
    };
  },
};
</script>
