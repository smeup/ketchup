<template>
  <div>
    <div class="demo-wrapper">
      <p>
        There are situation in which the content is not disabled but it's also
        only on reading. If the field is calculated and/or will never be
        modified and it's passed in the form, than it's a read only field.
        <span class="code-word">read-only</span> renders an unclickable text but
        it's value is included in form submissions.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-text-field
            label="Read Only"
            initial-value="Read Only"
            read-only
            max-length="10"
          ></kup-text-field>
          <kup-text-field
            label="Read Only"
            initial-value="Read Only"
            text-area
            read-only
            max-length="10"
          ></kup-text-field>
        </div>
        <p class="centered">Disabled sample markup</p>
        <code class="flat">{{ markupReadOnly }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextfieldReadonly',
  data() {
    return {
      markupReadOnly: '<kup-text-field read-only></kup-text-field>',
    };
  },
};
</script>

<style scoped lang="scss">
kup-text-field {
  margin: auto;
  padding: 0.5em;
}
</style>
