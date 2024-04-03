<template>
  <div>
    <div class="demo-wrapper">
      <p
        >The Pdf component provides a streamlined solution for viewing Pdf
        documents.</p
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
  name: 'PdfBasic',
  data() {
    return {
      markupBasic: '<kup-pdf></kup-pdf>',
    };
  },
};
</script>
