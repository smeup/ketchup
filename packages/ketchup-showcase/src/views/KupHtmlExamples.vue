<template>
  <div>
    <h1>HTML</h1>
    <p>HTML component is a really small wrapper for an iframe element.</p>

    <h3>Button mode on</h3>
    <kup-html
      id="htm-2"
      class="basic-spacer"
      label="Open Google in a new window"
      src="https://www.google.it/"
      is-button/>
    <kup-html
      id="htm-1"
      class="basic-spacer"
      label="Open Sme.UP in a new window"
      src="https://www.smeup.com/"
      is-button/>

    <h3>Iframe mode on</h3>
    <kup-html
      class="max-width-container"
      src="https://stenciljs.com/"/>

  </div>
</template>

<script>
  export default {
    // IMPORTANT: do not change this name to KupHtml because it will make Vue go in a loop of
    // trying to resolve the correct name, since kup-html is also the web component name.
    name: "KupHtmlExamples"
  }
</script>