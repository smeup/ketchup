<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Radio buttons can be rendered with a label on their left or on their
        right. You can choose between setting a
        <span class="code-word">labelleft</span> or a
        <span class="code-word">labelright</span> attribute, which are mutually
        exclusive.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <wup-radio labelleft="This label is on the left"></wup-radio>
          <wup-radio labelright="This label is on the right"></wup-radio>
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
  name: 'CheckboxLabels',
  data() {
    return {
      markupLeft: '<wup-radio labelleft="Your label"></wup-radio>',
      markupRight: '<wup-radio labelright="Your label"></wup-radio>',
    };
  },
};
</script>
