<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Text fields are input fields, they are used mostly inside forms where
        the user is asked to fill them.</p
      >
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <wup-text-field label="I am a text field"></wup-text-field>
        </div>
        <p class="centered">Sample markup</p>
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
      markupBasic: '<wup-text-field></wup-text-field>',
    };
  },
};
</script>
