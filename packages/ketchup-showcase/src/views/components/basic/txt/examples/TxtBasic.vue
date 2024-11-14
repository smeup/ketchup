<template>
  <div>
    <div class="demo-wrapper">
      <p
        >The KupTxt component provides a simple and efficient way to handle and
        display text content. It supports replacing custom separators (e.g.,
        \r\n) with line break for rendering formatted text. This makes it ideal
        for displaying user-generated or dynamic content with line breaks or
        other formatting needs. Simply pass the text with the separator, and
        KupTxt will handle the conversion seamlessly.</p
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
  name: 'TxtBasic',
  data() {
    return {
      markupBasic: '<kup-txt></kup-txt>',
    };
  },
};
</script>
