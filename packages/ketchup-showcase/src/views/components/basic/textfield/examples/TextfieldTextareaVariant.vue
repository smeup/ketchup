<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Text fields can be also used as textareas by setting the prop
        <span class="code-word">text-area</span> to true. It will always render
        as an <span class="code-word">outlined</span> field, that's why it's not
        allowed using both attributes together.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-text-field text-area label="I am a textarea"></kup-text-field>
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
      markupTextarea: '<kup-text-field text-area></kup-text-field>',
    };
  },
};
</script>
