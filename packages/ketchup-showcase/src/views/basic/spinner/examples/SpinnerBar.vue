<template>
  <div>
    <div class="demo-wrapper">
      <p
        >This component offers two possible display styles: standard spinner or
        styled as a bar. It's possible to set the bar variant by setting to true
        the <span class="code-word">barVariant</span> prop.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container" style="height: 10vh; width: 100%;">
          <kup-spinner active bar-variant disabled></kup-spinner>
        </div>
        <p class="centered">Disabled sample markup</p>
        <code class="flat">{{ markupBar }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpinnerBar',
  data() {
    return {
      markupBar: '<kup-spinner bar-variant></kup-spinner>',
    };
  },
};
</script>
