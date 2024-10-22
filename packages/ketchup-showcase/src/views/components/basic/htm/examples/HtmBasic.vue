<template>
  <div>
    <div class="demo-wrapper">
      <p
        >The KupHtm component provides a flexible way to display content, either
        as an embedded iFrame for URLs or as rendered HTML for inline content.
        It dynamically adapts based on the input, offering a seamless experience
        for previewing external pages or displaying custom HTML.</p
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
  name: 'HtmBasic',
  data() {
    return {
      markupBasic: '<kup-htm></kup-htm>',
    };
  },
};
</script>
