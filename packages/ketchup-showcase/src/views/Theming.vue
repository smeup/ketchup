<template>
  <div id="page-wrapper">
    <div id="page-content" class="no-nav">
      <h1>Theming</h1>
      <div class="section">
        <h3 class="nav-title">Customize your components</h3>
        <p>
          Ketch.UP components use CSS variables in order to handle their style,
          it's a powerful and easy way to customize colors, fonts, etc.
        </p>
        <p>
          You can try it yourself by changing the values of the text fields
          below.
        </p>
        <p>For example, you might notice that they are all piled up.</p>
        <p>
          This is caused by the CSS property
          <span class="code-word">display: block</span>, to which they default.
          Try setting them all inline, by changing the value of the variable
          <span class="code-word">--kup-display-mode</span> in the table below
          to <span class="code-word">inline-block</span>.
        </p>
        <div class="demo-container">
          <div class="kup-container" style="display: unset;">
            <wup-radio></wup-radio>
            <wup-checkbox></wup-checkbox>
            <wup-text-field label="Demo"></wup-text-field>
            <wup-button label="Demo"></wup-button>
            <wup-switch></wup-switch>
          </div>
        </div>
      </div>
      <div class="section">
        <h3 class="nav-title">Variables list</h3>
        <p>
          This list contains all the CSS variables currently available for
          customization.
        </p>
        <div id="sample-wrapper" class="theming">
          <div id="sample-comp" class="full">
            <table class="instruction-table">
              <thead>
                <tr>
                  <th>Variable name</th>
                  <th>Description</th>
                  <th>Type</th>
                  <th>Try it!</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="prevent-cr">
                    <span class="code-word">--kup-display-mode</span>
                  </td>
                  <td>
                    Sets the display property of the components, useful to
                    switch between inline/block.
                  </td>
                  <td class="prevent-cr">
                    <span class="code-word">display</span>
                  </td>
                  <td class="text-cell">
                    <wup-text-field
                      full-width
                      id="display-mode"
                      @kupTextFieldInput="updateCSS"
                    ></wup-text-field>
                  </td>
                </tr>
                <tr>
                  <td class="prevent-cr">
                    <span class="code-word">--kup-font-family</span>
                  </td>
                  <td>
                    Sets a different font family, overriding the default Roboto
                    provided by Material Design. To set a custom font not
                    natively supported by the browser, you must import manually
                    its font face.
                  </td>
                  <td class="prevent-cr">
                    <span class="code-word">font</span>
                  </td>
                  <td class="text-cell">
                    <wup-text-field
                      full-width
                      id="font-family"
                      @kupTextFieldInput="updateCSS"
                    ></wup-text-field>
                  </td>
                </tr>
                <tr>
                  <td class="prevent-cr">
                    <span class="code-word">--kup-font-size</span>
                  </td>
                  <td>
                    Sets a different font size, a sensible range is between 12px
                    and 18px. It's possible to break this boundary but some
                    strange behaviors might occur.
                  </td>
                  <td class="prevent-cr">
                    <span class="code-word">size</span>
                  </td>
                  <td class="text-cell">
                    <wup-text-field
                      full-width
                      id="font-size"
                      @kupTextFieldInput="updateCSS"
                    ></wup-text-field>
                  </td>
                </tr>
                <tr>
                  <td class="prevent-cr">
                    <span class="code-word">--kup-background-color</span>
                  </td>
                  <td>Sets the color of the background.</td>
                  <td class="prevent-cr">
                    <span class="code-word">color</span>
                  </td>
                  <td class="text-cell">
                    <wup-text-field
                      full-width
                      id="background-color"
                      @kupTextFieldInput="updateCSS"
                    ></wup-text-field>
                  </td>
                </tr>
                <tr>
                  <td class="prevent-cr">
                    <span class="code-word">--kup-header-background-color</span>
                  </td>
                  <td>Sets the background color of the header/nav bar.</td>
                  <td class="prevent-cr">
                    <span class="code-word">color</span>
                  </td>
                  <td class="text-cell">
                    <wup-text-field
                      full-width
                      id="header-background-color"
                      @kupTextFieldInput="updateCSS"
                    ></wup-text-field>
                  </td>
                </tr>
                <tr>
                  <td class="prevent-cr">
                    <span class="code-word">--kup-drawer-background-color</span>
                  </td>
                  <td>Sets the color of the drawer/side menu.</td>
                  <td class="prevent-cr">
                    <span class="code-word">color</span>
                  </td>
                  <td class="text-cell">
                    <wup-text-field
                      full-width
                      id="drawer-background-color"
                      @kupTextFieldInput="updateCSS"
                    ></wup-text-field>
                  </td>
                </tr>
                <tr>
                  <td class="prevent-cr">
                    <span class="code-word">--kup-main-color</span>
                  </td>
                  <td>
                    Sets the main color of the app, changing components
                    accordingly.
                  </td>
                  <td class="prevent-cr">
                    <span class="code-word">color</span>
                  </td>
                  <td class="text-cell">
                    <wup-text-field
                      full-width
                      id="main-color"
                      @kupTextFieldInput="updateCSS"
                    ></wup-text-field>
                  </td>
                </tr>
                <tr>
                  <td class="prevent-cr">
                    <span class="code-word">--kup-text-on-main-color</span>
                  </td>
                  <td>
                    Sets the color of text displayed above the main color, keep
                    in mind accessibility when setting this!
                  </td>
                  <td class="prevent-cr">
                    <span class="code-word">color</span>
                  </td>
                  <td class="text-cell">
                    <wup-text-field
                      full-width
                      id="text-on-main-color"
                      @kupTextFieldInput="updateCSS"
                    ></wup-text-field>
                  </td>
                </tr>
                <tr>
                  <td class="prevent-cr">
                    <span class="code-word">--kup-text-color</span>
                  </td>
                  <td>Sets the color of plain text, such as labels.</td>
                  <td class="prevent-cr">
                    <span class="code-word">color</span>
                  </td>
                  <td class="text-cell">
                    <wup-text-field
                      full-width
                      id="text-color"
                      @kupTextFieldInput="updateCSS"
                    ></wup-text-field>
                  </td>
                </tr>
                <tr>
                  <td class="prevent-cr">
                    <span class="code-word">--kup-icon-color</span>
                  </td>
                  <td>
                    Sets the color of icons, for example leading and trailing
                    icons in text fields.
                  </td>
                  <td class="prevent-cr">
                    <span class="code-word">color</span>
                  </td>
                  <td class="text-cell">
                    <wup-text-field
                      full-width
                      id="icon-color"
                      @kupTextFieldInput="updateCSS"
                    ></wup-text-field>
                  </td>
                </tr>
                <tr>
                  <td class="prevent-cr">
                    <span class="code-word">--kup-hover-background-color</span>
                  </td>
                  <td>Sets the background of elements at mouse hover.</td>
                  <td class="prevent-cr">
                    <span class="code-word">color</span>
                  </td>
                  <td class="text-cell">
                    <wup-text-field
                      full-width
                      id="hover-background-color"
                      @kupTextFieldInput="updateCSS"
                    ></wup-text-field>
                  </td>
                </tr>
                <tr>
                  <td class="prevent-cr">
                    <span class="code-word">--kup-hover-color</span>
                  </td>
                  <td>
                    Sets the color of elements at mouse hover, keep in mind
                    accessibility with its counterpart
                    "--kup-hover-background-color".
                  </td>
                  <td class="prevent-cr">
                    <span class="code-word">color</span>
                  </td>
                  <td class="text-cell">
                    <wup-text-field
                      full-width
                      id="hover-color"
                      @kupTextFieldInput="updateCSS"
                    ></wup-text-field>
                  </td>
                </tr>
                <tr>
                  <td class="prevent-cr">
                    <span class="code-word">--kup-border-color</span>
                  </td>
                  <td
                    >Sets the color of borders, such as checkboxes borders.</td
                  >
                  <td class="prevent-cr">
                    <span class="code-word">color</span>
                  </td>
                  <td class="text-cell">
                    <wup-text-field
                      full-width
                      id="border-color"
                      @kupTextFieldInput="updateCSS"
                    ></wup-text-field>
                  </td>
                </tr>
                <tr>
                  <td class="prevent-cr">
                    <span class="code-word">--kup-disabled-text-color</span>
                  </td>
                  <td>Sets the color of disabled text.</td>
                  <td class="prevent-cr">
                    <span class="code-word">color</span>
                  </td>
                  <td class="text-cell">
                    <wup-text-field
                      full-width
                      id="disabled-text-color"
                      @kupTextFieldInput="updateCSS"
                    ></wup-text-field>
                  </td>
                </tr>
                <tr>
                  <td class="prevent-cr">
                    <span class="code-word"
                      >--kup-disabled-background-color</span
                    >
                  </td>
                  <td>
                    Sets the background color of disabled text, keep in mind
                    accessibility when setting its counterpart
                    "--kup-disabled-text-color".
                  </td>
                  <td class="prevent-cr">
                    <span class="code-word">color</span>
                  </td>
                  <td class="text-cell">
                    <wup-text-field
                      full-width
                      id="disabled-background-color"
                      @kupTextFieldInput="updateCSS"
                    ></wup-text-field>
                  </td>
                </tr>
                <tr>
                  <td class="prevent-cr">
                    <span class="code-word">--kup-field-background-color</span>
                  </td>
                  <td>Sets the background color of filled text fields.</td>
                  <td class="prevent-cr">
                    <span class="code-word">color</span>
                  </td>
                  <td class="text-cell">
                    <wup-text-field
                      full-width
                      id="field-background-color"
                      @kupTextFieldInput="updateCSS"
                    ></wup-text-field>
                  </td>
                </tr>
                <tr>
                  <td class="prevent-cr">
                    <span class="code-word">--kup-chip-background-color</span>
                  </td>
                  <td>Sets the background color of chips.</td>
                  <td class="prevent-cr">
                    <span class="code-word">color</span>
                  </td>
                  <td class="text-cell">
                    <wup-text-field
                      full-width
                      id="chip-background-color"
                      @kupTextFieldInput="updateCSS"
                    ></wup-text-field>
                  </td>
                </tr>
                <tr>
                  <td class="prevent-cr">
                    <span class="code-word">--kup-spinner-color</span>
                  </td>
                  <td>Sets the color of spinners.</td>
                  <td class="prevent-cr">
                    <span class="code-word">color</span>
                  </td>
                  <td class="text-cell">
                    <wup-text-field
                      full-width
                      id="spinner-color"
                      @kupTextFieldInput="updateCSS"
                    ></wup-text-field>
                  </td>
                </tr>
              </tbody>
            </table>
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
      DOMEl.style.setProperty(varCSS, e.detail.value);
    },
  },
};
</script>
