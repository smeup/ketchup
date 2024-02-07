<template>
  <div>
    <div class="demo-wrapper">
      <p
        >The Editor component provides a streamlined solution for creating and
        editing text. It offers a user-friendly interface, making text
        manipulation straightforward and efficient.</p
      >
      <div class="demo-container">
        <p class="centered">Sample markup</p>
        <code class="flat">{{ markupBasic }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditorBasic',
  data() {
    return {
      markupBasic: '<kup-editor></kup-editor>',
    };
  },
};
</script>
