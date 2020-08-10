<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Radio buttons can be rendered with a label on their left or on their
        right. By default it will be on the right of the component, you can set
        the <span class="code-word">leadingLabel</span> prop to true to display
        it on the left.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-radio leading-label :data.prop="dataLeft"></kup-radio>
          <kup-radio :data.prop="dataRight"></kup-radio>
        </div>
        <p class="centered">Left aligned sample markup</p>
        <code class="flat">{{ markupLeft }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckboxLabels',
  data() {
    return {
      dataLeft: [
        {
          value: 'left',
          label: 'This label is on the left',
          checked: false,
        },
      ],
      dataRight: [
        {
          value: 'right',
          label: 'This label is on the right',
          checked: false,
        },
      ],
      markupLeft: '<kup-radio leading-label></kup-radio>',
    };
  },
};
</script>
