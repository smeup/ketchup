<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Text fields can be also used as textareas by specifying the attribute
        <span class="code-word">textarea</span>. It will always render as an
        <span class="code-word">outlined</span> field, that's why it's not
        allowed using both attributes together.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <wup-text-field textarea label="I am a textarea"></wup-text-field>
        </div>
        <p class="centered">Textarea sample markup</p>
        <code class="flat">{{ markupTextarea }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextfieldTextareaVariant',
  data() {
    return {
      markupTextarea: '<wup-text-field textarea></wup-text-field>',
    };
  },
};
</script>
