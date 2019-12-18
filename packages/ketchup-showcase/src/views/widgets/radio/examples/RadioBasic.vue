<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Radio buttons are commonly used to give the user a multiple choice,
        that's why it's rare to see a single radio inside a form.</p
      >
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>

    <div class="demo-wrapper">
      <p>
        To render a checked radio button you need to specify the
        <span class="code-word">checked</span> attribute. When it's not, the
        radio button state defaults to unchecked.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <wup-radio></wup-radio>
          <wup-radio checked></wup-radio>
        </div>
        <p class="centered">Marked state sample markup</p>
        <code class="flat">{{ markupMarked }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioBasic',
  data() {
    return {
      markupBasic: '<wup-radio></wup-radio>',
      markupMarked: '<wup-radio checked></wup-radio>',
    };
  },
};
</script>
