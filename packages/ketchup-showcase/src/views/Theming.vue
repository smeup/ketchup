<template>
  <div id="page-wrapper">
    <div id="page-content">
      <h1>Theming</h1>
      <div class="section">
        <h3 class="nav-title">Customize your components</h3>
        <p>Ketch.UP components use CSS variables in order to handle their style, it's a powerful and easy way to customize colors, fonts, etc.</p>
        <p>You can try it yourself by changing the values in the text fields below.</p>
        <p>It's important to note that some variables interact with the framework only and not with the components themselves, that's the case for the background of the page for example.</p>
        <p>A list of all variables available for every component will be added in time to this page.</p>
        <div class="demo-container">
          <div class="kup-container">
            <wup-text-field
              id="background-color"
              @kupTextFieldChange="updateCSS"
              label="Background color"
            ></wup-text-field>
            <wup-text-field id="main-color" @kupTextFieldChange="updateCSS" label="Main color"></wup-text-field>
            <wup-text-field id="text-color" @kupTextFieldChange="updateCSS" label="Text color"></wup-text-field>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Theming',
  methods: {
    logEvent(e) {
      console.log(e.detail);
    },
    updateCSS(e) {
      var DOMEl = document.documentElement;
      var varCSS = '--kup-' + e.target.id;
      console.log(e);
      DOMEl.style.setProperty(varCSS, e.detail.value);
    },
  },
};
</script>
