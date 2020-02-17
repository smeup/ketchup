<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Checkboxes can be rendered with a label on their left or on their right,
        by using the <span class="code-word">label</span> prop. By default it
        will be shown on the right of the component, you can change this by
        setting the <span class="code-word">leadingLabel</span> prop to true.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <wup-switch
            leading-label
            label="This label is on the left"
          ></wup-switch>
          <wup-switch label="This label is on the right"></wup-switch>
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
      markupLeft: '<wup-switch leading-label label="Your label"></wup-switch>',
      markupRight: '<wup-switch label="Your label"></wup-switch>',
    };
  },
};
</script>
