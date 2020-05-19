<template>
  <div>
    <div class="demo-wrapper">
      <p
        >By default the text field will be flat, this can be changed by using
        the attribute <span class="code-word">outlined</span>.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-text-field outlined label="I am outlined"></kup-text-field>
        </div>
        <p class="centered">Outlined sample markup</p>
        <code class="flat">{{ markupOutlined }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p
        >The attribute <span class="code-word">rounded</span> will render a
        shaped text field with its edges rounded.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-text-field rounded label="I am shaped and flat"></kup-text-field>
          <kup-text-field
            rounded
            outlined
            label="I am shaped and outlined"
          ></kup-text-field>
        </div>
        <p class="centered">Shaped sample markup</p>
        <code class="flat">{{ markupShaped }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextfieldStyling',
  data() {
    return {
      markupOutlined: '<kup-text-field outlined></kup-text-field>',
      markupShaped: '<kup-text-field rounded></kup-text-field>',
    };
  },
};
</script>
