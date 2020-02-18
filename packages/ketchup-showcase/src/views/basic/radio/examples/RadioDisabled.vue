<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Sometimes the user shouldn't be able to interact with the component. The
        attribute
        <span class="code-word">disabled</span> renders unclickable radio
        buttons which can only be displayed, but not changed.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <wup-radio :data.prop="data" disabled></wup-radio>
        </div>
        <p class="centered">Disabled sample markup</p>
        <code class="flat">{{ markupDisabled }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioDisabled',
  data() {
    return {
      data: [
        {
          value: 'chocolate',
          label: 'Chocolate',
          checked: true,
        },
        {
          value: 'cream',
          label: 'Cream',
          checked: false,
        },
      ],
      markupDisabled: '<wup-radio disabled></wup-radio>',
    };
  },
};
</script>
