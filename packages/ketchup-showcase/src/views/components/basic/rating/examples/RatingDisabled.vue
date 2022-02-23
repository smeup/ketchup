<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Sometimes the user shouldn't be able to interact with the component. The
        attribute
        <span class="code-word">disabled</span> renders rating not editable
        which can only be displayed, but not changed.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-rating :maxValue.prop="10" :value.prop="3" disabled></kup-rating>
        </div>
        <p class="centered">Disabled sample markup</p>
        <code class="flat">{{ markupDisabled }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RatingDisabled',
  data() {
    return {
      markupDisabled:
        '<kup-rating max-value="10" value="3" disabled></kup-rating>',
    };
  },
};
</script>
