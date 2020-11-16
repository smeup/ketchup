<template>
  <div>
    <div class="demo-wrapper">
      <p>
        By default, radio buttons will be displayed inline. It is possible,
        however, to display them in a grid. <br />The
        <span class="code-word">columns</span> prop, which by default is
        undefined, can be set to a number which specifies how many columns the
        grid should have.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-radio columns="1" :data.prop="dataGrid"></kup-radio>
        </div>
        <p class="centered">Grid sample markup</p>
        <code class="flat">{{ markupGrid }}</code>
      </div>
    </div>

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
  name: 'RadioStyling',
  data() {
    return {
      dataGrid: [
        {
          value: '1',
          label: 'First row',
          checked: false,
        },
        {
          value: '2',
          label: 'Second row',
          checked: false,
        },
      ],
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
      markupGrid: '<kup-radio columns="1"></kup-radio>',
    };
  },
};
</script>
