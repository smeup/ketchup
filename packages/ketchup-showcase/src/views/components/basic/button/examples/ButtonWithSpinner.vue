<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Sometimes we need to warn the user that the application is doing some
        operations and we cannot click the button again. The
        <span class="code-word">showSpinner</span> attribute enables the display
        of a spinner in the button and makes it non-clickable.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-button label="With Spinner" show-spinner="true">
            <kup-spinner
              slot="spinner"
              dimensions="0.6em"
              active="true"
            ></kup-spinner>
          </kup-button>
        </div>
        <p class="centered">Show spinner sample markup</p>
        <code class="flat">{{ markupWithSpinner }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonWithSpinner',
  data() {
    return {
      markupWithSpinner:
        '<kup-button label="With Spinner" show-spinner="true"><kup-spinner slot="spinner" dimensions="0.6em" active="true"></kup-spinner></kup-button>',
    };
  },
};
</script>
