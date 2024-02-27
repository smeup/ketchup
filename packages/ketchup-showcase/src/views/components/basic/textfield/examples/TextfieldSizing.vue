<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Passing the <span class="code-word">sizing</span> param you can specify
        the dimension of the field. You can pass small, medium, large or
        extralarge. The default is <span class="code-word">medium</span></p
      >
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-text-field
            label="Size: Small"
            initial-value="Small"
            sizing="small"
          ></kup-text-field>
          <kup-text-field
            label="Size: Medium (Default)"
            initial-value="Medium"
            sizing="medium"
          ></kup-text-field>
          <br />
          <kup-text-field
            label="Size: Large"
            initial-value="Large"
            sizing="large"
          ></kup-text-field>
          <kup-text-field
            label="Size: Max Large"
            initial-value="Max Large"
            sizing="max-large"
          ></kup-text-field>
        </div>
        <p class="centered">Sample markup with 'small' sizing</p>
        <code class="flat">{{ markupBasic }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextfieldBasic',
  data() {
    return {
      markupBasic: '<kup-text-field sizing="small"></kup-text-field>',
    };
  },
};
</script>
